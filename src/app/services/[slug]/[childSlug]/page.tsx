import BlogCards from "@/components/BlogCard/BlogCards";
import { Icons } from "@/components/Icons/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import PageBanner from "@/components/PageBanner/PageBanner";
import ServicePageMenu from "@/components/ServicePageMenu/ServicePageMenu";
import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/components/Button/Button";

// export async function generateStaticParams() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services`
//   ).then((res) => res.json());

//   const services = res.data;

//   // Extract and return the slugs from the childrens array of each service
//   return services.flatMap((service: any) => {
//     return service.childrens.map((child: string) => ({
//       slug: service.slug.toString(), // Assuming each service has a slug property
//       childSlug: child.toString(),
//     }));
//   });
// }


async function getServiceData({
  params,
}: {
  params: { slug: string; childSlug?: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/${params.slug}/${params.childSlug}`
  );
  const data = await res.json();
  const newData = data.data[0];
  return newData;
}

interface ChildServiceProps {
  params: {
    slug: string;
  };
}

const ChildService: React.FC<ChildServiceProps> = async ({ params }) => {
  const data = await getServiceData({ params });
  return (
    <>
      <PageBanner title={data.serviceBanner} />
      <IntroSection
        title={data.serviceTitle}
        description={data.serviceDescription}
        mainTwoPoints={data.mainTwoPoints}
        serviceImage={data.serviceImage}
        decription_II={data.serviceDescriptionII}
        serviceHeadingII={data.serviceHeadingII}
        serviceDescriptionIII={data.serviceDescriptionIII}
        fourPoints={data.fourPoints}
        menuData={data.childrens}
        slug={data.slug}
      />
      <ServiceBuild data={data.combinedSection} />
      <BlogCards />
    </>
  );
};

export default ChildService;

interface MainTwoPoints {
  mainTwoPointsImage: string;
  title: string;
  description: string;
}

interface IntroSectionProps {
  title: string;
  description: string;
  mainTwoPoints?: MainTwoPoints[];
  serviceImage: string;
  decription_II: string;
  serviceHeadingII: string;
  serviceDescriptionIII: string;
  fourPoints?: string[];
  menuData?: string[];
  slug: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  title,
  description,
  mainTwoPoints,
  serviceImage,
  decription_II,
  serviceHeadingII,
  serviceDescriptionIII,
  fourPoints,
  menuData,
  slug,
}) => {
  return (
    <section className="py-6 lg:py-12">
      <MaxWidthWrapper className="flex gap-10">
        <div className="w-3/4">
          <h2 className="text-[1.688rem] md:text-4xl pb-4">{title}</h2>
          <div>{parse(description)}</div>
          {mainTwoPoints && (
            <ul className="flex gap-5 py-4">
              {mainTwoPoints.map((point: any, index: number) => {
                return (
                  <li key={point.title} className="flex gap-5 border p-5 w-1/2">
                    <div>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${point.mainTwoPointsImage}`}
                        alt={point.title}
                        width={150}
                        height={150}
                        className="border"
                      />
                    </div>
                    <div>
                      <h3>{point.title}</h3>
                      <p>{point.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${serviceImage}`}
              alt={title}
              width={1200}
              height={400}
            />
          </div>
          <div className="py-3">{parse(decription_II)}</div>
          <h3 className="text-[1.688rem] md:text-4xl py-2">
            {serviceHeadingII}
          </h3>
          <div className="pb-3">{parse(serviceDescriptionIII)}</div>
        </div>
        <aside className="w-1/4">
          <ServicePageMenu data={menuData} parentPage={slug} />
        </aside>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="py-2">
        {fourPoints && (
          <ul className="grid grid-cols-2 gap-3">
            {fourPoints.map((point: any, index: number) => {
              return (
                <li key={point}>
                  <div className="flex gap-2 items-center ">
                    <Icons.PinkArrowMarker />
                    <p>{point}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

const ServiceBuild = ({ data }: { data: any }) => {
  return (
    <>
      {data.map(
        (
          section: {
            combinedSectionImage: string;
            editorValue: string;
            accordion: any;
            heading: string;
          },
          index: number
        ) => {
          const value = section.editorValue;
          const ChangedEditorValue = value
            ? value
                .replace(/<ul>/g, '<ul class="grid grid-cols-2 py-2">')
                .replace(
                  /<li>/g,
                  '<li class="custom-marker flex items-center custom-marker py-1" >'
                )
                .replace(
                  /<li dir="ltr">/g,
                  '<li class="custom-marker flex items-center custom-marker py-1" >'
                )
            : "";

          return (
            <section
              key={section.combinedSectionImage}
              className={cn(
                "flex relative min-h-96",
                index % 2 === 0 ? "flex-row-reverse" : "flex-row",
                index === data.length - 1 ? "pb-6 lg:pb-12" : ""
              )}
            >
              <div className="w-1/2"></div>
              <div className="w-1/2 object-cover">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${section.combinedSectionImage}`}
                  alt="Image"
                  height={300}
                  width={1000}
                />
              </div>
              <MaxWidthWrapper
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 flex",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                <div className="w-1/2"></div>
                <div className="w-1/2 ">
                  {section.editorValue ? (
                    <div
                      className={cn(
                        index % 2 === 0 ? "p-10 pr-0" : "p-10 pl-0"
                      )}
                    >
                      <h2 className="text-[1.688rem] md:text-4xl pb-4">
                        {section.heading}
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{ __html: ChangedEditorValue }}
                      />
                      <Button
                        title="View More"
                        className="bg-white text-black mt-5"
                        svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
                        type="button"
                        navigateTo="/about"
                      />
                    </div>
                  ) : (
                    <div>
                      <h2
                        className={cn(
                          "text-[1.688rem] md:text-4xl ",
                          index % 2 === 0 ? "p-10 pr-0 pb-2" : "p-10 pb-2 pl-0"
                        )}
                      >
                        {section.heading}
                      </h2>
                      <Accordion type="single" collapsible>
                        {section.accordion.map(
                          (accordion: any, index: number) => {
                            return (
                              <AccordionItem
                                key={index}
                                value={accordion.title}
                                className="border-none px-10 data-[state=open]:bg-[#FFFAFD]"
                              >
                                <AccordionTrigger className="flex ">
                                  <div className="flex items-center gap-3">
                                    <div className="h-3 w-3 bg-[#BC1D8D]" />
                                    {accordion.title}
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                  {parse(accordion.content)}
                                </AccordionContent>
                              </AccordionItem>
                            );
                          }
                        )}
                      </Accordion>
                      <div className="px-10">
                        <Button
                          title="View More"
                          className="bg-white text-black mt-5"
                          svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
                          type="button"
                          navigateTo="/about"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </MaxWidthWrapper>
            </section>
          );
        }
      )}
    </>
  );
};
