import Image from "next/image";

type TransitionData = {
  img: string;
};

type BackgroundImageProps = {
  transitionData: TransitionData | null;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  transitionData,
}) => {
  return (
    <>
      {transitionData && (
        <div
          className={`absolute top-0 left-0 w-full h-full object-cover z-[-1] `}
        >
          <Image src={transitionData.img} alt="Transition Image" fill />
        </div>
      )}
    </>
  );
};

export default BackgroundImage;
