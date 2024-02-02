import BackgroundImage from "@/components/BannerSlider/BackgroundImage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className={`py-20 mx-auto text-center flex flex-col items-center max-w-3xl`}>
      <h1>Adaired Digital Media</h1>
      <BackgroundImage transitionData={{
        "img":"https://demo.adaired.com/assets/images/homePage/1.webp"
      }}/>
      </div>
    </MaxWidthWrapper>
  );
}
