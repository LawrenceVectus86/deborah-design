import BenefitItem from "./BenefitItem";

function PricingPopularCard({
  item,
}: {
  item: {
    id: number;
    title: string;
    price: string;
    description: string;
    benefits: Array<string>;
  };
}) {
  return (
    <div className="bg-gradient-to-r from-[#4B6ED3] to-[#FFFFFF30] h-[792px] p-[1px] rounded-3xl pricing-shadow my-[55px] lg:my-0">
      <div className="bg-bgColor h-[790px] rounded-3xl  ">
        <div className="bg-[#D2D2D21F] h-[790px] rounded-3xl">
          <div className="bg-radial-price h-[790px] rounded-3xl py-[70px] pl-12 pr-[76px]">
            <h5 className="text-whiteText font-bold text-4xl leading-tight">
              {item.title}
            </h5>
            <p className="text-[#ECECECCC] text-base opacity-80 mt-4 pb-5 border-b border-b-[#D9D9D91A]">
              {item.description}
            </p>
            <div className="w-[194px]">
              <div className="flex mt-5">
                <p className="text-2xl text-whiteText">$</p>
                <p className="font-bold text-whiteText text-[42px]">
                  {item.price}
                  <span className="text-[#ECECECCC] text-lg font-bold">
                    /mo
                  </span>
                </p>
              </div>
              <p className="text-[#ECECECCC] text-sm">
                Pause or cancel anytime.
                <br />7 days money-back guarantee
              </p>
            </div>
            <div className="mt-10">
              {item.benefits.map((data, idx) => {
                return <BenefitItem key={idx} name={data} />;
              })}
            </div>
            <button className="btn-gradient-blue mt-[34px]">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPopularCard;
