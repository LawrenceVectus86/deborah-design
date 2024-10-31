import { designServices } from "../../data/Data";
import DesignServiceCard from "../Card/DesignServiceCard";
import SectionTitle from "../Sections/SectionTitle";

function DesignService() {
  return (
    <div
      className="relative my-[66px] md:my-[211px] mx-5 md:mx-[76px]"
      id="process"
    >
      <div className="px-0 md:px-[44px]">
        <SectionTitle
          title="Design Services you can Expect from Us"
          subtitle="Our experienced designers bring your vision to life with innovative, customized solutions that meet your unique needs and exceed expectations."
          className="px-0 md:px-[132.5px]"
        />
      </div>
      <div className="mt-[52px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[26px]">
          {designServices.map((item) => {
            return (
              <DesignServiceCard key={item.id} item={item}></DesignServiceCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DesignService;
