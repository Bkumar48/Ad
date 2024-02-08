import { MouseEventHandler } from "react";
import { Icons } from "./../Icons/Icons";
import Link from "next/link";

type ButtonProps = {
  title: string;
  icon?: keyof typeof Icons; // Updated to ensure only valid icon keys are accepted
  className?: string; // Accepts custom className for the button container
  svgClassName?: string; // Accepts custom className for the SVG
  navigateTo?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = (props) => {
  const SelectedIcon = props.icon
    ? Icons[props.icon]
    : Icons["ArrowRightBroken"];

  const buttonContent = (
    <>
      <div className="flex">
        {props.title}
        {SelectedIcon && (
          <div className="flex items-center">
            <SelectedIcon className={`svg-icon mx-2 ${props.svgClassName}`} />
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {props.navigateTo ? (
        <Link href={props.navigateTo}>
          <a
            target={props.target || "_self"}
            rel={props.rel || "noreferrer"}
            className={`rounded-full text-base font-medium transition-transform transition-left outline-none relative cursor-pointer border py-4 pl-4 pr-4 ${props.className}`}
          >
            {buttonContent}
          </a>
        </Link>
      ) : (
        <button
          className={`rounded-full text-base font-medium transition-transform transition-left outline-none relative cursor-pointer border py-4 pl-4 pr-4 ${props.className}`}
          type={props.type}
          onClick={props.onClick}
        >
          {buttonContent}
        </button>
      )}
    </>
  );
};

export default Button;
