import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Icons } from "../Icons/Icons";
import { Separator } from "../ui/separator";

const NewsLetter = dynamic(() => import("../Forms/NewsLetter"), {
  loading: () => <p>Loading...</p>,
});

const Footer = () => {
  return (
    <footer className="bg-[#1B5A96] text-white">
      <MaxWidthWrapper className="px-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 py-6">
          <Link
            href="https://maps.app.goo.gl/CEMtUbQd1246YQ3c7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 col-span-12 p-5 flex-col items-center text-center lg:text-left lg:items-start border lg:flex-row lg:border-0 lg:col-span-5 xl:col-span-6"
          >
            <Icons.Map className="flex-none h-12 w-12 border p-2  text-[#FB9100] lg:text-white rounded" />
            <div>
              <p>Find Us</p>
              B-509, 5th Floor, Bestech Business Towers, Sector 66,{" "}
              <br className="hidden xl:block" />
              SAS Nagar, Punjab 160066
            </div>
          </Link>
          <Link
            href="https://maps.app.goo.gl/CEMtUbQd1246YQ3c7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 col-span-12 p-5 flex-col items-center text-center lg:text-left lg:items-start border lg:flex-row lg:border-0 lg:col-span-4 xl:col-span-3"
          >
            <Icons.Phone className="flex-none h-12 w-12 border p-2  text-[#FB9100] lg:text-white rounded" />
            <div>
              <p>Call Us</p>
              +91-8907400008
            </div>
          </Link>
          <Link
            href="https://maps.app.goo.gl/CEMtUbQd1246YQ3c7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 col-span-12 p-5 flex-col items-center text-center lg:text-left lg:items-start border lg:flex-row lg:border-0 lg:col-span-3 xl:col-span-3"
          >
            <Icons.Mail className="flex-none h-12 w-12 border p-2  text-[#FB9100] lg:text-white rounded" />
            <div>
              <p>Mail Us</p>
              info@adaired.com
            </div>
          </Link>
        </div>
        <div className="border-t pt-6 mx-auto grid grid-cols-1 gap-5 md:grid-cols-12">
          <div className="col-span-12 lg:col-span-4">
            <Link href="/">
              <Image
                src="/Footer_Logo.svg"
                width={200}
                height={50}
                alt="Footer Logo"
                priority
              />
            </Link>
            <p className="mt-6">
              AdAired Digital Media is a digital marketing company located in
              Mohali. We are a team of marketing and design experts who are
              committed to your online growth.{" "}
            </p>
            <div className="mt-6 hidden lg:block">
              <h4 className="tracking-wide font-semibold font-nunito text-lg lg:text-2xl">
                Follow Us
              </h4>
              <div className="flex gap-2 mt-4">
                <Link
                  href={process.env.NEXT_PUBLIC_FACEBOOK_URL || "/"}
                  className="p-2 bg-white rounded-lg"
                >
                  <Icons.Facebook className="text-[#1B5A96]" />
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_TWITTER_URL || "/"}
                  className="p-2 bg-white rounded-lg"
                >
                  <Icons.Twitter className="text-[#1B5A96]" />
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "/"}
                  className="p-2 bg-white rounded-lg"
                >
                  <Icons.Instagram className="text-[#1B5A96]" />
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "/"}
                  className="p-2 bg-white rounded-lg"
                >
                  <Icons.LinkedIn className="text-[#1B5A96]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-2 md:col-span-3">
            <h4 className="relative after:absolute after:content-[''] after:h-0.5 after:w-16 after:bg-white after:left-0 after:bottom-[-5px] tracking-wide font-semibold font-nunito text-lg lg:text-2xl">
              Useful Links
            </h4>
            <ul className="mt-6 space-y-2">
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/career" className="">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3 md:col-span-5">
            <h4 className="relative after:absolute after:content-[''] after:h-0.5 after:w-16 after:bg-white after:left-0 after:bottom-[-5px] tracking-wide font-semibold font-nunito text-lg lg:text-2xl">
              Services
            </h4>
            <ul className="mt-6 space-y-2">
              <li>
                <Link href="/" className="">
                  Website Designing & Development
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Search Engine Optimization (SEO)
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Paid Media & Advertising
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Compelling Content Marketing
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Digital Creative & Logo Design
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Strategic Social Media Management
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3 md:col-span-4">
            <h4 className="relative after:absolute after:content-[''] after:h-0.5 after:w-16 after:bg-white after:left-0 after:bottom-[-5px] tracking-wide font-semibold font-nunito text-lg lg:text-2xl">
              Subscribe
            </h4>
            <p className="mt-6">
              Share your email address to subscribe to Adaired&apos;s
              newsletter.
            </p>
            <NewsLetter />
          </div>
          <div className="mt-6 lg:hidden col-span-12">
            <h4 className="tracking-wide font-semibold font-nunito text-lg lg:text-2xl">
              Follow Us
            </h4>
            <div className="flex gap-2 mt-4">
              <Link
                href={process.env.NEXT_PUBLIC_FACEBOOK_URL || "/"}
                className="p-2 bg-white rounded-lg"
              >
                <Icons.Facebook className="text-[#1B5A96]" />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_TWITTER_URL || "/"}
                className="p-2 bg-white rounded-lg"
              >
                <Icons.Twitter className="text-[#1B5A96]" />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "/"}
                className="p-2 bg-white rounded-lg"
              >
                <Icons.Instagram className="text-[#1B5A96]" />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "/"}
                className="p-2 bg-white rounded-lg"
              >
                <Icons.LinkedIn className="text-[#1B5A96]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-6 py-6 text-center flex justify-center items-center flex-col-reverse md:flex-row md:justify-between ">
          <div>Copyright © 2024 - AdAired Digital Media</div>
          <div className=" sm:bg-transparent flex gap-5 sm:gap-1 py-2" >
            <Link href="/terms-and-conditions">Terms & Conditions </Link>
            <span className="hidden sm:block">/</span>
            <div className="sm:hidden">
              <Separator orientation="vertical" />
            </div>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
