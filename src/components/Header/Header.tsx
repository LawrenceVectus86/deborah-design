import { TextGenerateEffect } from "../Ui/TextGenerateEffect";
import Photoshop from "../../assets/svgs/ic-photoshop.svg";
import Illustrator from "../../assets/svgs/ic-illustrator.svg";
import AfterEffect from "../../assets/svgs/ic-after-effects.svg";
import Figma from "../../assets/svgs/ic-figma.svg";
import Dribbble from "../../assets/svgs/ic-dribble.svg";
import UI8 from "../../assets/svgs/ic-ui8.svg";

function Header() {
  return (
    <div className="relative pt-[118px] md:pt-[218px] px-5 md:px-[129.5px] flex flex-col items-center">
      <div className="title">
        <TextGenerateEffect
          words="Unlimited design deliciousness is yours for a single, flat monthly
          charge."
        />

        <p className="header-subtitle-mobile md:header-subtitle">
          You can request modifications as often as you like—we&lsquo;ll take
          care of it!
        </p>
      </div>
      {/* <div className="button-header mt-3 md:mt-6">
        <a
          href="#pricing"
          className="btn-gradient-blue shadow-[0_0_45.4px_-6px_rgba(98,109,212,1)] cursor-pointer"
        >
          See Plans
        </a>
        <div className="flex items-center justify-center mt-6">
          <div className="circle-gradient mr-2"></div>
          <h6 className="text-xs md:text-lg text-white text-semibold">
            Available Now
          </h6>
        </div>
      </div> */}
      <div className="tech-stack mt-[12px] md:mt-[77px] w-full px-5 md:px-[42px] ">
        <div className="flex items-center justify-between p-0 md:p-4 md:h-[80px]">
          <img
            src={Photoshop}
            alt="photoshop"
            className="w-10 h-10 md:w-[80px] md:h-[80px]"
          />
          <img
            src={Illustrator}
            alt="illustrator"
            className="w-10 h-10 md:w-[80px] md:h-[80px]"
          />
          <img
            src={AfterEffect}
            alt="after-effect"
            className="w-10 h-10 md:w-[80px] md:h-[80px]"
          />
          <img
            src={Figma}
            alt="figma"
            className="w-10 h-10 md:w-[126px] md:h-[40px]"
          />
          <img
            src={Dribbble}
            alt="Dribbble"
            className="w-10 h-10 md:w-[162px] md:h-[45px]"
          />
          <img
            src={UI8}
            alt="UI8"
            className="w-10 h-10 md:w-[137px] md:h-[45px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
