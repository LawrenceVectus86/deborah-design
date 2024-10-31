import React, { useState } from "react";
import IcDown from "../../assets/svgs/ic-down.svg";
import IcUp from "../../assets/svgs/ic-up.svg";

interface IProps {
  open?: boolean;
  id: number;
  title: string;
  desc: string;
}

const FaqCollapse: React.FC<IProps> = ({ open, id, title, desc }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex border-b border-b-[#D9D9D91A] pb-6 mb-6">
        <div
          className={
            isOpen
              ? "faq-collapse-title-active mr-6"
              : "faq-collapse-title mr-6"
          }
        >
          0{id}
        </div>
        <div className="flex items-start flex-col w-full">
          <div
            className="w-full flex justify-between items-start cursor-pointer"
            onClick={handleOpen}
          >
            <div className="faq-collapse-title">{title}</div>
            {isOpen ? <img src={IcUp} /> : <img src={IcDown} />}
          </div>
          {isOpen ? (
            <div className="faq-collapse-desc pt-6">{desc}</div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqCollapse;
