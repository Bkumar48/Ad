import React from "react";

async function getCaseStudyCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/case-studies-category/getCaseStudiesCategory/all`
  );
  const data = await res.json();
  return data.result;
}

async function getCaseStudies({ slug }: { slug: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/case-studies/${slug}`
  );
  const data = await res.json();
  return data.result;
}
const CaseStudies = async () => {
  const categories = await getCaseStudyCategories();
  console.log("data:",categories[0].categoryName,);
  const caseStudies = await getCaseStudies({
    slug: categories[0].slug,
  });
console.log("caseStudies:",caseStudies)

  return <div></div>;
};

export default CaseStudies;
