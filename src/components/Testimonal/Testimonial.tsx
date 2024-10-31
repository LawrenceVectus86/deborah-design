import { testimonials } from "../../data/Data";
import TestimonialCard from "../Card/TestimonialCard";
const Testimonial = () => {
  return (
    <div className="mx-5 md:mx-[93.5px] my-[66px] md:my-[211px]">
      <div className={`text-center`}>
        <h1 className="text-whiteText font-medium font-sans text-[28px] md:text-[46px] leading-tight">
          What a Customer{" "}
          <span className="bg-gradient-to-r from-[#283E7D] to-[#86A6FF] text-transparent bg-clip-text">
            Say
          </span>{" "}
          About Us
        </h1>
        <h6 className="text-whiteText font-normal text-xs md:text-xl mt-4">
          Real testimonials from real costumers
        </h6>
      </div>
      <div className="text-center mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 content-center">
          {testimonials.map((item) => {
            return <TestimonialCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
