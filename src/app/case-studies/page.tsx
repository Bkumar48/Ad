import PageBanner from "@/components/PageBanner/PageBanner";
import { ProcessSection } from "../about/page";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import BlogCards from "@/components/BlogCard/BlogCards";
import CaseStudyCards from "@/components/CaseStudyCards/CaseStudyCards";

// async function getCaseStudyCategories() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/v1/case-studies-category/getCaseStudiesCategory/all`
//   );
//   const data = await res.json();
//   return data.result;
// }

// async function getCaseStudies({ slug }: { slug: string }) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/v1/case-studies/all/?category=${slug}`
//   );
//   const data = await res.json();
//   return data.result;
// }

const CaseStudies = async () => {
  // const categories = await getCaseStudyCategories();

  // const caseStudies = await getCaseStudies({
  //   slug: "all",
  // });

  return (
    <>
      <PageBanner title="Case Studies" />
      {/* <MaxWidthWrapper>
        {categories.map((category: any) => {
          return (
            <Button
              key={category.id}
              variant="outline"
              size="sm"
              className="m-2"
            >
              {category.categoryName}
            </Button>
          );
        })}
      </MaxWidthWrapper> */}
      {/* <CaseStudyCategoryButtons /> */}
      {/* <MaxWidthWrapper>
        {caseStudies.map((caseStudy: any) => {
          return (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudyName={caseStudy.caseStudyName}
              caseStudyDescription={caseStudy.caseStudyDescription}
              cardImage={caseStudy.cardImage}
              aboutProjectDescription={caseStudy.aboutProjectDescription}
              technologiesUsed={caseStudy.technologiesUsed}
            />
          );
        })}
      </MaxWidthWrapper> */}
      <CaseStudyCards />
      <ProcessSection />
      <TestimonialSlider />
      <BlogCards />
    </>
  );
};

export default CaseStudies;

// export interface CaseStudyCardProps {
//   caseStudyName: string;
//   caseStudyDescription: string;
//   cardImage: string;
//   aboutProjectDescription: string;
//   technologiesUsed: string[];
// }

// export function CaseStudyCard({
//   caseStudyName,
//   caseStudyDescription,
//   cardImage,
//   aboutProjectDescription,
//   technologiesUsed,
// }: CaseStudyCardProps) {
//   return (
//     <>
//       <div className="border flex">
//         <div className="w-1/2">
//           <div>
//             <h2>About the project</h2>
//             <p className="line-clamp-3">{aboutProjectDescription}</p>
//           </div>
//           <div>
//             {technologiesUsed.map((tech: string) => {
//               return <p>{tech}</p>;
//             })}
//           </div>
//         </div>
//         <div className="w-1/2">
//           <div>
//             <h3>{caseStudyName}</h3>
//             <div>_____</div>
//             <p className="line-clamp-1">{caseStudyDescription}</p>
//           </div>
//           <div>
//             <Image
//               src={`${process.env.NEXT_PUBLIC_IMG_URL}${cardImage}`}
//               alt="Case Study Card Image"
//               height={400}
//               width={600}
//               className="rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
