import { pricingItems } from "../../data/Data";
import PricingCard from "../Card/PricingCard";
import PricingPopularCard from "../Card/PricingPopularCard";
import SectionTitle from "../Sections/SectionTitle";

function Price() {
  return (
    <div className="mx-5 md:mx-[120px] mt-[44px] md:my-[80px]" id="pricing">
      <div className="mx-0 md:mx-[132.5px]">
        <SectionTitle
          title="Plans & Pricing"
          subtitle="No shady charges, no unexpected shocks! Stick to one flat fee, month after month. No money surprises here!"
          className=""
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-[120px]">
        <PricingCard isRight={false} item={pricingItems[0]} />
        <PricingPopularCard item={pricingItems[1]} />
        <PricingCard isRight={true} item={pricingItems[2]} />
      </div>
    </div>
  );
}

export default Price;
