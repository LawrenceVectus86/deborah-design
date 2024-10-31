import { howDoesWorkItems } from "../../data/Data";
import HowDoesWorkCard from "../Card/HowDoesWorkCard";
import SectionTitle from "../Sections/SectionTitle";

const HowDoesWork = () => {
  return (
    <div className="mx-5 md:mx-[112px] mt-[66px] md:mt-[211px]">
      <SectionTitle
        title="How does work?"
        subtitle="You can effortlessly throw in, organize, and keep tabs on all your requests using your very own Trello board."
        className=""
      />
      <div className="mt-[41px] md:mt-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {howDoesWorkItems.map((item) => {
            return <HowDoesWorkCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HowDoesWork;
