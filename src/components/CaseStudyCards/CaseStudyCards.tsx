"use client";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";

// export async function getCaseStudyCategories() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/v1/case-studies-category/getCaseStudiesCategory/all`
//   );
//   const data = await res.json();
//   return data.result;
// }

function CaseStudyCards() {
  const [categories, setCategories] = useState([]);
  // const categories = await getCaseStudyCategories();

  return (
    <MaxWidthWrapper>
      {categories.map((category: any) => {
        return (
          <button key={category.categoryName} className="m-2">
            <Link href={`/case-studies/${category.slug}`}>
              {category.categoryName}
            </Link>
          </button>
        );
      })}
      {/* <CaseStudyCard /> */}
    </MaxWidthWrapper>
  );
}

export default CaseStudyCards;

async function getCaseStudies({ slug }: { slug: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/case-studies/all/?category=${slug}`
  );
  const data = await res.json();
  return data.result;
}

// export function CaseStudyCard({params}) {
//   const caseStudies = getCaseStudies({
//     slug: "all",
//   });
//   return <>hello</>;
// }
