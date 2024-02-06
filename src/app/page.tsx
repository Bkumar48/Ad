import BackgroundImage from "@/components/BannerSlider/BackgroundImage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";

export default function Home() {

  return (
    <main id="root" >
      <BackgroundImage
      transitionData={{
        img: "https://demo.adaired.com/assets/images/homePage/1.webp",
      }}
    />
    </main>
  );
}
