// import IcRowRight from "../../assets/svgs/ic-row-right.svg";

function HowDoesWorkCard({
  item,
}: {
  item: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
}) {
  return (
    <div className="p-[7px] w-full md:w-[344px] h-[280px] relative">
      <div className="absolute top-0 right-0 w-[138px] h-[148px] rounded-[20px] bg-gradient-to-r from-[#283E7D] to-[#86A6FF]"></div>
      <div className="absolute bottom-0 left-0 w-[138px] h-[148px] rounded-[20px] bg-gradient-to-r from-[#283E7D] to-[#86A6FF]"></div>
      <div className="absolute w-full md:w-[330px] h-[267px] bg-bgColor rounded-[20px] pt-6 pl-6 pb-[21px] pr-8">
        <div className="w-[62px] h-[62px] rounded-xl bg-primary flex items-center p-[5px]">
          <img src={item.icon} alt="support" />
        </div>
        <div className="mt-[30px]">
          <h5 className="font-bold text-white text-lg leading-8">
            {item.title}
          </h5>
          <p className="pt-[14px] text-base font-normal text-grey">
            {item.description}
          </p>
        </div>
        {/* <div className="pt-[14px] flex items-center">
          <p className="text-white text-xs font-bold pr-[14px]">Read more</p>
          <img src={IcRowRight} alt="ic-row-right" />
        </div> */}
      </div>
    </div>
  );
}

export default HowDoesWorkCard;
