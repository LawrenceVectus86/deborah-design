import Subtract from "../../assets/images/Subtract.png";
import IcStar from "../../assets/svgs/ic-star.svg";

function TestimonialCard({
  item,
}: {
  item: {
    id: number;
    name: string;
    image: string;
    text: string;
    rating: number;
    link: string;
  };
}) {
  return (
    <div className="w-[369px] h-[244px] relative flex flex-col items-center">
      <img src={item.image} className="w-[70px] h-[70px] rounded-full" />
      <img src={Subtract} className="absolute bottom-0" />
      <div className="content relative mt-6 text-center mx-[18px] ">
        <h6 className="font-bold text-white text-base">{item.name}</h6>
        <div className="flex items-center justify-center gap-[10px] mt-[14px]">
          {[...Array(item.rating)].map((index) => (
            <img src={IcStar} key={index} className="" />
          ))}
        </div>
        <p className="text-xs text-[#E8E8E8] text-center mt-[14px]">
          {item.text}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
