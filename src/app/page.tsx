import BannerSlider from "@/components/BannerSlider/BannerSlider";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import { Icons } from "@/components/Icons/Icons";
import LocomotiveScroll from "@/components/LocomotiveScroll/LocomotiveScroll";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import dynamic from "next/dynamic";
import BlogCard from "@/components/BlogCard/BlogCard";
import Link from "next/link";
import HomePageForm from "@/components/Forms/HomePageForm";

const CaseStudySlider = dynamic(
  () => import("@/components/CaseStudySlider/CaseStudySlider")
);
const TestimonialSlider = dynamic(
  () => import("@/components/TestimonialSlider/TestimonialSlider")
);

export default function Home() {
  return (
    <main>
      <BannerSlider />
      <ManageGrid />
      <AboutSection />
      <LogoSlider />
      <CaseStudySlider />
      <Growth />
      <Awards />
      <TestimonialSlider />
      {/* <BlogCard /> */}
      <ContactUs />
      <Footer />
      <LocomotiveScroll />
    </main>
  );
}

const ManageGrid = () => {
  return (
    <>
      <section className="py-6 flex items-center justify-between transition-all">
        <div className="hidden md:block">
          <Image
            height={300}
            width={150}
            src="/splashLeft-.webp"
            alt="Splash Left Image"
          />
        </div>
        <MaxWidthWrapper>
          <div className="text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl ">
              {" "}
              Digital Marketing Services For The Most Ambitious Enterprises
            </h2>
            <div className="relative py-6">
              <div className="absolute top-1/2 left-[-100px] transform -translate-y-1/2 bg-[#A7A9AC] h-px w-20"></div>
              <div className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 bg-[#A7A9AC] h-px w-20"></div>
              <Icons.NimbusMarketing className="text-white h-14 w-14 bg-[#8EC640] p-2 rounded-full" />
            </div>

            <p className=" text-lg md:text-2xl max-w-[900px]">
              We work with businesses that want to engage better, dominate
              SERPs, and achieve more than just website traffic.
            </p>
          </div>
        </MaxWidthWrapper>
        <div className=" hidden md:block">
          <Image
            height={300}
            width={150}
            src="/splashRight-.webp"
            alt="Splash Left Image"
          />
        </div>
      </section>
    </>
  );
};

const AboutSection = () => {
  return (
    <>
      <section className="pb-6 md:pb-12">
        <MaxWidthWrapper className="flex gap-6 flex-col lg:flex-row">
          <div className="flex-1">Video</div>
          <div className="flex-1 text-center md:text-left">
            <h5 className="inline font-nunito text-[#515151] relative md:pl-20 text-lg">
              <div className="absolute top-1/2 -left-full md:left-0 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
              <div className="md:hidden absolute top-1/2 -right-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
              About Us
            </h5>
            <h2 className="text-3xl md:text-4xl">
              A Company Obsessed With ROI
            </h2>
            <p className="py-2">
              Transform your marketing outcomes and experience exponential ROI
              growth by partnering with Adaired! We offer smart, targeted,
              integrated campaigns that drive traffic, build engagement,
              generate conversions, and foster long-term relationships. Our
              online marketing services will turn your website into a
              lead-generating machine, and our ongoing efforts will bring in
              more clients than you can handle.
            </p>
            <div className="flex gap-5 py-2 flex-col sm:flex-row">
              <div className="flex flex-col items-center border p-4 md:p-0 md:border-none md:items-start ">
                <Image
                  src="/homePage_about1.svg"
                  alt=""
                  height={60}
                  width={60}
                  className="border rounded-lg p-2 mb-2"
                />
                <h4 className="relative py-2 font-nunito font-semibold text-xl">
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 md:translate-x-0  md:left-0 bg-[#A7A9AC] h-0.5 w-16 rounded-lg"></div>
                  Tailored Approach
                </h4>
                <p className="">
                  Our obsession with ROI means crafting personalized strategies,
                  from meticulous campaign design to continuous optimization for
                  maximum impact and growth.
                </p>
              </div>
              <div className="flex flex-col items-center border p-4 md:p-0 md:border-none md:items-start ">
                <Image
                  src="/homePage_about2.svg"
                  alt=""
                  height={60}
                  width={60}
                  className="border rounded-lg p-2 mb-2 "
                />
                <h4 className="relative py-2 font-nunito font-semibold text-xl">
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 bg-[#A7A9AC] h-0.5 w-16 rounded-lg"></div>
                  Tangible Results
                </h4>
                <p className="">
                  Experience transparency in your marketing endeavors with
                  Adaired. As your brand gains momentum, the ROI translates into
                  measurable success for your business.
                </p>
              </div>
            </div>
            <p className="font-baby text-lg sm:text-2xl font-semibold py-2">
              &quot;Your brand is what people say about you when you&apos;re not
              in the room.&quot; -<i className="text-[#92288D]">Jeff Bezos</i>
            </p>
            <Button
              title="View More Information"
              className="bg-white text-black mt-5"
              svgContainerClassName="group-hover:right-[78%]"
              svgClassName="bg-[#F89520]"
              type="button"
              navigateTo="/about"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const LogoSlider = () => {
  const logoImages = [
    {
      img: "/trustedBy1.webp",
    },
    {
      img: "/trustedBy2.webp",
    },
    {
      img: "/trustedBy3.webp",
    },
    {
      img: "/trustedBy4.webp",
    },
    {
      img: "/trustedBy5.webp",
    },
    {
      img: "/trustedBy6.webp",
    },
    {
      img: "/trustedBy7.webp",
    },
    {
      img: "/trustedBy8.webp",
    },
    {
      img: "/trustedBy9.webp",
    },
    {
      img: "/trustedBy10.webp",
    },
    {
      img: "/trustedBy11.webp",
    },
    {
      img: "/trustedBy12.webp",
    },
  ];
  return (
    <>
      <section className="bg-[#f8f8f8] py-6 sm:py-12">
        <MaxWidthWrapper className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl py-2">Trusted By:</h2>
          <p className="max-w-[1000px] py-2 mb-4">
            The success of our clients is what determines our success. Below are
            a few of our favorite clients who we have worked for; we have
            reserved a spot for you!
          </p>
          <div className="antialiased w-full py-2">
            <InfiniteMovingCards
              items={logoImages}
              direction="left"
              speed="slow"
              itemClassName="border border-[#E5E5E5] bg-white grayscale hover:grayscale-0 px-2 py-2 sm:py-5 sm:px-8"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const Awards = () => {
  type AwardImages = {
    img: string;
  };
  const data: AwardImages[] = [
    {
      img: "/image1.webp",
    },
    {
      img: "/image2.webp",
    },
    {
      img: "/image3.webp",
    },
    {
      img: "/image4.webp",
    },
    {
      img: "/image5.webp",
    },
    {
      img: "/image6.webp",
    },
    {
      img: "/image7.webp",
    },
    {
      img: "/image8.webp",
    },
  ];
  return (
    <>
      <section className="py-6 sm:py-12">
        <MaxWidthWrapper>
          <div className="antialiased w-full py-2">
            <InfiniteMovingCards
              items={data}
              direction="right"
              speed="slow"
              itemClassName=" w-20 sm:w-32 h-auto md:w-40 px-2 py-2 sm:py-5 sm:px-8"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const ContactUs = () => {
  return (
    <>
      <section className="pt-6 sm:pt-12">
        <MaxWidthWrapper>
          <h2 className="text-2xl md:text-3xl lg:text-4xl py-2">
            Ready To Win More Customers?{" "}
          </h2>
          <p className="py-2">
            Connect for more website traffic, qualified leads, and an
            established online brand image.
          </p>
        </MaxWidthWrapper>
        <div className="bg-[#ECECEC]">
          <MaxWidthWrapper className="flex py-6">
            <div className="flex-1 flex flex-col gap-4">
              <Link
                href="mailto:info@adaired.com"
                className="flex bg-white gap-4 items-center p-6 "
              >
                <Icons.Mail className="border p-2 rounded h-16 w-16 text-[#1B5A96]" />
                <div>
                  <p>Mail Id Of Sales Executive</p>
                  <p className="font-semibold text-2xl">info@adaired.com</p>
                </div>
              </Link>
              <Link
                href="/"
                className="flex bg-white gap-4 items-center p-6 "
              >
                <Icons.Skype className="border p-2 rounded h-16 w-16 text-[#1B5A96]" />
                <div>
                  <p>Our Skype ID</p>
                  <p className="font-semibold text-2xl">Adaired Digital</p>
                </div>
              </Link>
              <Link
                href="/"
                className="flex bg-white gap-4 items-center p-6 "
              >
                <Icons.Whatsapp className="border p-2 rounded h-16 w-16 text-[#1B5A96]" />
                <div>
                  <p> Chat on</p>
                  <p className="font-semibold text-2xl">Whatsapp</p>
                </div>
              </Link>
              <Link
                href="/"
                className="flex bg-white gap-4 items-center p-6 "
              >
                <Icons.Telegram className="border p-2 rounded h-16 w-16 text-[#1B5A96]" />
                <div>
                  <p>Ping us on</p>
                  <p className="font-semibold text-2xl">Telegram</p>
                </div>
              </Link>
            </div>
            <div className="flex-1">
              <HomePageForm/>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
    </>
  );
};

const Growth = () => {
  return (
    <>
      <section className="py-7 sm:py-14 ">
        <MaxWidthWrapper className="flex flex-col lg:flex-row items-center lg:items-start gap-16 xl:gap-36  ">
          <div className="flex-1 relative ml-2 mr-4 lg:mr-0 lg:ml-2 ">
            <div className="max-w-[500px] lg:max-w-full after:absolute after:-top-3 after:-right-3 md:after:-top-6 md:after:-right-6 after:border-2 after:border-[#BC1D8D] after:h-[90%] after:w-[90%] after:-z-10">
              {" "}
              <Image
                src="/TeamsBig.webp"
                alt="Growth Image"
                height={600}
                width={800}
                className=""
                />
                </div>
                <div className="transition-all absolute top-3/4 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:top-auto xl:left-auto xl:bottom-[20%] xl:right-[-20%]">
                  
            <Image
              src="/TeamsSmall.webp"
              alt="Growth Image"
              height={100}
              width={300}
              sizes="(min-width:640px) 50vw, 100vw"
              className=""
            />
                </div>
          </div>
          <div className="flex-1 ">
            <h5 className="inline font-nunito text-[#515151] relative pl-16 text-lg md:pl-20 ">
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-12 md:w-16"></div>
              {/* <div className="lg:hidden absolute top-1/2 -right-2/4 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div> */}
              Holistic Expertise
            </h5>
            <h2 className="text-3xl md:text-4xl py-2">
              Digital Marketing Experts Dedicated To Your Growth
            </h2>
            <p className="py-2">
              Adaired has helped numerous companies develop their brands with
              its digital marketing services worldwide. We understand the
              importance of leads, sales, and return on investment when it comes
              to digital marketing. Our clients come from all industries of
              every size.
            </p>
            <ul className="text-left grid gap-3 sm:gap-0 sm:grid-cols-2 py-2">
              <li className="flex items-center gap-1 border p-2 sm:border-none"><Icons.PinkArrowMarker className="text-[#BC1D8D]"/> Comprehensive Services</li>
              <li className="flex items-center gap-1 border p-2 sm:border-none"><Icons.PinkArrowMarker className="text-[#BC1D8D]"/>Industry Expertise</li>
              <li className="flex items-center gap-1 border p-2 sm:border-none"><Icons.PinkArrowMarker className="text-[#BC1D8D]"/>Client-Centric Approach</li>
              <li className="flex items-center gap-1 border p-2 sm:border-none"><Icons.PinkArrowMarker className="text-[#BC1D8D]"/>Tailored Solutions</li>
            </ul>
            <p className="py-2">
              Our digital marketing agency provides a wide range of services,
              from initial brand development to a globally syndicated
              advertising campaign, all of which are customized to meet the
              unique needs of our clients.
            </p>
            <p className="py-2 px-2 bg-[#FFF9FD] border-l-8 border-[#BC1D8D]">
              We strive to surpass your expectations, providing unparalleled
              quality in our online marketing services.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};
