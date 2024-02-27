import BlogCards from "@/components/BlogCard/BlogCards";
import { Icons } from "@/components/Icons/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import PageBanner from "@/components/PageBanner/PageBanner";
import ServicePageMenu from "@/components/ServicePageMenu/ServicePageMenu";
import { Separator } from "@/components/ui/separator";
import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Link from "next/link";
import { cn } from "@/lib/utils";

async function getServiceData({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/${params.slug}`
  );
  const data = await res.json();
  const newData = data.data[0];
  return newData;
}

interface MainServiceProps {
  params: {
    slug: string;
  };
}

const MainService: React.FC<MainServiceProps> = async ({ params }) => {
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
      />
      {!data.isChildService && (
        <OurProcess
          ourProcessSubHeading={data.ourProcessSubHeading}
          ourProcessImage1={data.ourProcessImageI}
          ourProcessImage2={data.ourProcessImageII}
        />
      )}
      <ServiceBuild data={data.combinedSection} />
      <ServiceParagraph
        title={data.serviceHeadingIII}
        description={data.serviceDescriptionIV}
      />
      <PinkSection
        heading={data.LastSectionHeading}
        text={data.LastSectionText}
        image={data.LastSectionImage}
        hookline={data.LastSectionHookLine}
        points={data.LastSectionPoints}
      />
      <Consultation />

      <BlogCards />
    </>
  );
};

export default MainService;

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
}) => {
  return (
    <section className="py-6 lg:py-12">
      <MaxWidthWrapper className="flex gap-10">
        <div className="w-3/4">
          <h2>{title}</h2>
          <div>{parse(description)}</div>
          {mainTwoPoints && (
            <ul className="flex gap-5 ">
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
          <div>{parse(decription_II)}</div>
          <h3>{serviceHeadingII}</h3>
          <div>{parse(serviceDescriptionIII)}</div>
        </div>
        <aside className="w-1/4">
          <ServicePageMenu data={menuData} />
        </aside>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        {fourPoints && (
          <ul className="grid grid-cols-2">
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

interface OurProcessProps {
  ourProcessSubHeading: string;
  ourProcessImage1: string;
  ourProcessImage2: string;
}

const OurProcess: React.FC<OurProcessProps> = ({
  ourProcessSubHeading,
  ourProcessImage1,
  ourProcessImage2,
}) => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="text-center flex flex-col items-center justify-center">
          <h5 className="inline font-nunito text-[#515151] relative px-4 text-lg">
            <div className="absolute top-1/2 left-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
            <div className="absolute top-1/2 right-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
            How We Work
          </h5>
          <h2 className="text-[1.688rem] md:text-4xl py-2">Our Process</h2>
          <p className="py-2 max-w-[900px] text-base sm:text-lg">
            {ourProcessSubHeading}
          </p>
        </div>
        <div>
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${ourProcessImage2}`}
                srcSet={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${ourProcessImage2}`}
                alt="Image one"
                className="bg-white"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${ourProcessImage1}`}
                srcSet={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${ourProcessImage1}`}
                alt="Image two"
                className="bg-white"
                style={{ objectFit: "contain" }}
              />
            }
            className="py-8 my-6"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const ServiceBuild = ({ data }: { data: any }) => {
  return (
    <>
      {data.map((section: { combinedSectionImage: string }, index: number) => {
        return (
          <section
            key={section.combinedSectionImage}
            className={cn(
              "flex",
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div className="w-1/2">
              {
                section
              }
            </div>
            <div className="w-1/2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${section.combinedSectionImage}`}
                alt="Image"
                height={400}
                width={1200}
              />
            </div>
          </section>
        );
      })}
    </>
  );
};

interface ServiceParagraphProps {
  title: string;
  description: string;
}

const ServiceParagraph: React.FC<ServiceParagraphProps> = ({
  title,
  description,
}) => {
  const modifiedText = description
    .replace(/<ul>/g, '<ul class="grid grid-cols-2 ">')
    .replace(
      /<li>/g,
      '<li class="custom-marker flex items-center " ><div className="flex  ">'
    )
    .replace(
      /<li dir="ltr">/g,
      '<li class="custom-marker flex items-center" ><div className="flex  ">'
    )
    .replace(
      /<li dir="ltr" aria-level="1">/g,
      '<li class="custom-marker flex items-center" ><div className="flex  ">'
    );
  function parseHTML() {
    return { __html: modifiedText };
  }

  return (
    <section>
      <MaxWidthWrapper>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={parseHTML()} />
      </MaxWidthWrapper>
    </section>
  );
};

interface PinkSectionProps {
  heading: string;
  text: string;
  image: string;
  hookline: string;
  points: lastPoints[];
}
interface lastPoints {
  LastSectionPointsImage: string;
  title: string;
}

const PinkSection: React.FC<PinkSectionProps> = ({
  heading,
  text,
  image,
  hookline,
  points,
}) => {
  return (
    <section className=" pt-10 pb-14 lg:pt-20 lg:pb-28 bg-[#bc1d8d0a]">
      <MaxWidthWrapper className="flex gap-10">
        <div className="w-1/2">
          <h2 className="text-4xl mb-2">{heading}</h2>
          <div className="py-2">{parse(text)}</div>
          {points && (
            <ul className="grid grid-cols-2 gap-5 py-2">
              {points.map((point: any, index: number) => {
                return (
                  <li key={point.title}>
                    <div className="flex gap-2 items-center border p-5">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${point.LastSectionPointsImage}`}
                        alt={point.title}
                        width={50}
                        height={50}
                        className="border"
                      />
                      <p className="font-semibold">{point.title}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <p className="py-2">{hookline}</p>
        </div>
        <div className="w-1/2">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${image}`}
            alt={heading}
            width={800}
            height={400}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const Consultation = () => {
  return (
    <section>
      <MaxWidthWrapper className="-mt-16 flex items-center justify-between md:px-10 py-6 max-w-5xl rounded-xl bg-[#fb9100] text-white">
        <div className="flex gap-5 items-center">
          <div className="border p-2">
            <Icons.Phone className="h-14 w-14" />
          </div>
          <div>
            <p className="text-xl">Get A Free Consultation</p>
            <p className="text-2xl text-semibold">
              <Link href="/">+91-8907200008</Link>
            </p>
          </div>
        </div>
        <Separator orientation="vertical" className="h-20 w-0.5 bg-white" />
        <div className="flex gap-5 items-center">
          <div className="border p-2">
            <Icons.Mail className="h-14 w-14" />
          </div>
          <div>
            <p className="text-xl">Mail Us</p>
            <p className="text-2xl text-semibold">
              <Link href="/">info@adaired.com</Link>
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
