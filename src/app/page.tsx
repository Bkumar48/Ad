import BannerSlider from "@/components/BannerSlider/BannerSlider";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import { Icons } from "@/components/Icons/Icons";
import LocomotiveScroll from "@/components/LocomotiveScroll/LocomotiveScroll";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <BannerSlider />
      <ManageGrid />
      <AboutSection />
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
      <section className="pb-20">
        <MaxWidthWrapper className="flex gap-6">
          <div className="min-h-96 min-w-96 bg-black h-full w-full text-white">
            Video
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-nunito text-[#515151] relative md:pl-20 ">
              <div className="absolute top-1/2 left-10 md:left-0 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
              <div className="md:hidden absolute top-1/2 right-10 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
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
            <div className="flex gap-5 py-2">
              <div>
                <Image
                  src="/homePage_about1.svg"
                  alt=""
                  height={50}
                  width={50}
                />
                <h4>Tailored Approach</h4>
                <p>
                  Our obsession with ROI means crafting personalized strategies,
                  from meticulous campaign design to continuous optimization for
                  maximum impact and growth.
                </p>
              </div>
              <div>
                <Image
                  src="/homePage_about2.svg"
                  alt=""
                  height={50}
                  width={50}
                />
                <h4>Tangible Results</h4>
                <p>
                  Experience transparency in your marketing endeavors with
                  Adaired. As your brand gains momentum, the ROI translates into
                  measurable success for your business.
                </p>
              </div>
            </div>
            <p className="font-baby py-2">
              "Your brand is what people say about you when you're not in the
              room." -<i>Jeff Bezos</i>
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
