"use client";
import React, { use, useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";
import Button from "../Button/Button";
import { cn } from "@/lib/utils";

interface Technology {
  _id: string;
  icon: string;
  title: string;
}

interface Category {
  categoryName: string;
  slug: string;
  technologies: Technology[];
}

interface CaseStudy {
  colorScheme: string;
  slug: string;
  category: string;
  caseStudyName: string;
  caseStudyDescription: string;
  cardImage: string;
  aboutProjectDescription: string;
  technologiesUsed: string[];
}

interface CaseStudyCardsProps {
  categories: Category[];
  caseStudies: CaseStudy[];
}
function CaseStudyCards({ categories, caseStudies }: CaseStudyCardsProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredCaseStudies, setFilteredCaseStudies] =
    useState<CaseStudy[]>(caseStudies);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredCaseStudies(caseStudies);
    } else {
      const filtered = caseStudies.filter(
        (caseStudy) => caseStudy.category === selectedCategory
      );
      setFilteredCaseStudies(filtered);
    }
  }, [selectedCategory, caseStudies]);

  if (categories) {
    categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
  }

  return (
    <MaxWidthWrapper className="py-12 lg:py-24">
      <div className="mb-8">
        {categories.map((category) => (
          <button
            key={category.slug}
            className={cn(
              "m-2 p-3 px-8 rounded-full border",
              selectedCategory === category.slug
                ? "bg-[#F89520] text-white"
                : "bg-white text-black"
            )}
            onClick={() => {
              setSelectedCategory(category.slug);
            }}
          >
            {category.categoryName}
          </button>
        ))}
      </div>
      <div>
        {filteredCaseStudies.map((caseStudy) => (
          <CaseStudyCard
            categories={categories}
            colorScheme={caseStudy.colorScheme}
            key={caseStudy.slug}
            slug={caseStudy.slug}
            caseStudyName={caseStudy.caseStudyName}
            caseStudyDescription={caseStudy.caseStudyDescription}
            cardImage={caseStudy.cardImage}
            aboutProjectDescription={caseStudy.aboutProjectDescription}
            technologiesUsed={caseStudy.technologiesUsed}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}

interface CaseStudyCardProps {
  categories: Category[];
  colorScheme: string;
  slug: string;
  caseStudyName: string;
  caseStudyDescription: string;
  cardImage: string;
  aboutProjectDescription: string;
  technologiesUsed: string[];
}

function CaseStudyCard({
  categories,
  colorScheme,
  slug,
  caseStudyName,
  caseStudyDescription,
  cardImage,
  aboutProjectDescription,
  technologiesUsed,
}: CaseStudyCardProps) {
  return (
    <div className="p-8 my-8 border rounded-3xl flex">
      <div className="w-1/2">
        <div
          className="h-4 w-7"
          style={{
            backgroundColor: colorScheme,
          }}
        />
        <div>
          <h3 className="text-3xl py-4">About the project</h3>
          <p className="line-clamp-3">{aboutProjectDescription}</p>
        </div>

        <div className="py-4 grid grid-cols-3 gap-5">
          {technologiesUsed.map((tech) => {
            return (
              <p
                className="bg-[#515151] rounded-full py-1 text-center text-white"
                key={tech}
              >
                hello
              </p>
            );
          })}
        </div>
        <div>
          <Button
            title="View Case Study"
            className="bg-white text-black mt-5"
            svgClassName="bg-[#F89520] group-hover/btn:right-[10.2rem]"
            type="button"
            navigateTo={`/case-studies/${slug}`}
          />
        </div>
      </div>
      <div className="w-1/2">
        <div>
          <h2 className="text-[1.688rem] md:text-4xl">{caseStudyName}</h2>
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
  );
}

export default CaseStudyCards;
