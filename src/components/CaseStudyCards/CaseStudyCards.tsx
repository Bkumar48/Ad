"use client";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";

function CaseStudyCards({
  categories,
  caseStudies,
}: {
  categories: any;
  caseStudies: any;
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  console.log("selectedCategory ", selectedCategory); 
  return (
    <MaxWidthWrapper>
      <div>
        {categories.map((category: any) => {
          return (
            <button
              key={category.categoryName}
              className="m-2"
              onClick={() => {
                setSelectedCategory(category.slug);
              }}
            >
              {category.categoryName}
            </button>
          );
        })}
      </div>
      <div>
        {caseStudies.map((caseStudy: any) => {
          return (
            <Link href={`/case-studies/${caseStudy.slug}`} key={caseStudy.slug}>
              <CaseStudyCard
                caseStudyName={caseStudy.caseStudyName}
                caseStudyDescription={caseStudy.caseStudyDescription}
                cardImage={caseStudy.cardImage}
                aboutProjectDescription={caseStudy.aboutProjectDescription}
                technologiesUsed={caseStudy.technologiesUsed}
              />
            </Link>
          );
        })}
      </div>
      {/* <CaseStudyCard /> */}
    </MaxWidthWrapper>
  );
}

export default CaseStudyCards;

function CaseStudyCard({
  caseStudyName,
  caseStudyDescription,
  cardImage,
  aboutProjectDescription,
  technologiesUsed,
}: {
  caseStudyName: string;
  caseStudyDescription: string;
  cardImage: string;
  aboutProjectDescription: string;
  technologiesUsed: string[];
}) {
  return (
    <>
      <div className="border flex">
        <div className="w-1/2">
          <div>
            <h2>About the project</h2>
            <p className="line-clamp-3">{aboutProjectDescription}</p>
          </div>
          <div>
            {technologiesUsed.map((tech: string) => {
              return <p>{tech}</p>;
            })}
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <h3>{caseStudyName}</h3>
            <div>_____</div>
            <p className="line-clamp-1">{caseStudyDescription}</p>
          </div>
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_URL}${cardImage}`}
              alt="Case Study Card Image"
              height={400}
              width={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
