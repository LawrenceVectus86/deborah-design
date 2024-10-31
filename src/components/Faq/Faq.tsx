import { faqItems } from "../../data/Data";
import FaqCollapse from "../Card/FaqCollapse";
import SectionTitle from "../Sections/SectionTitle";

function Faq() {
  return (
    <div className="py-[56px] mx-[20px] md:mx-[100px] lg:mx-[284.5px]">
      <div>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="These questions might not be on everyone's FAQ list, but we've got your back in case you were curious."
          className=""
        />
      </div>
      <div className="mt-[64px]">
        {faqItems.map((item) => {
          return (
            <FaqCollapse
              key={item.id}
              id={item.id}
              title={item.name}
              desc={item.desc}
              open={item.id == 2 ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
