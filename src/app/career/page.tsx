import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import PageBanner from "@/components/PageBanner/PageBanner";
import parse, { domToReact, HTMLReactParserOptions } from "html-react-parser";
import LocomotiveScroll from "@/components/LocomotiveScroll/LocomotiveScroll";
import CareerPageForm from "@/components/Forms/CareerPageForm";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Career = () => {
  return (
    <React.Fragment>
      <PageBanner title="Career" />

      <section className="py-12 lg:py-24">
        <MaxWidthWrapper>
          <div className="flex gap-16 flex-col-reverse lg:flex-row ">
            <div className="lg:w-[55%]">
              <JobList />
            </div>
            <div className="lg:w-[45%]">
              <CareerPageForm />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <LocomotiveScroll />
    </React.Fragment>
  );
};

export default Career;

interface Job {
  jobName: string;
  jobDescription: string;
  description: string;
  updatedAt: string;
}

interface ApiResponse {
  result: Job[];
}

async function getJobs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/career/all`
  );
  const data: ApiResponse = await res.json();
  return data.result;
}

const JobList = async () => {
  const data = await getJobs();
  return (
    <div>
      <h2 className="text-2xl md:text-4xl mb-3.5">
        We Are Currently Recruiting For :
      </h2>
      {data.map((job: Job) => {
        const dateString: string = job.updatedAt;
        const date: Date = new Date(dateString);
        const currentDate: Date = new Date();

        // Calculate the difference in milliseconds
        const difference: number = currentDate.getTime() - date.getTime();
        const millisecondsPerDay: number = 24 * 60 * 60 * 1000;
        const daysAgo: number = Math.round(difference / millisecondsPerDay);

        // Construct the string
        let daysAgoString: string;
        if (daysAgo === 0) {
          daysAgoString = "Today";
        } else {
          daysAgoString = `${daysAgo} ${daysAgo === 1 ? "Day" : "Days"} Ago`;
        }
        const options: HTMLReactParserOptions = {
          replace: (domNode) => {
            if (domNode.type === "tag" && domNode.name === "ol") {
              const { children }: any = domNode;
              return (
                <ol className="list-decimal list-inside">
                  {domToReact([...children])}
                </ol>
              );
            }
            // Return domNode if the condition is not met
            return domNode;
          },
        };

        return (
          <div key={job.jobName}>
            <div className="border p-5 sm:p-10 rounded-tl-lg rounded-tr-lg">
              <div className="py-2 flex flex-col sm:flex-row sm:justify-between items-center">
                <h3 className="text-xl md:text-3xl">{job.jobName}</h3>
                <p>({daysAgoString})</p>
              </div>
              <p className="text-justify sm:text-left">{job.jobDescription}</p>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value={job.jobName} className="border-none">
                <AccordionTrigger className="px-5 hover:no-underline bg-[#515151] rounded-bl-lg rounded-br-lg text-white text-xl data-[state=open]:rounded-none">
                  Description
                </AccordionTrigger>
                <AccordionContent className="border p-10 rounded-bl-xl rounded-br-xl ">
                  {parse(job.description, options)}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};
