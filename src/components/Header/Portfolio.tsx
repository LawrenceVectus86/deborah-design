import { portfolioSlide1, portfolioSlide2 } from "../../data/Data";
import { InfinityPorfolioCard } from "../Ui/InfinityPortfolioCard";

function Portfolio() {
  return (
    <div className="" id="work">
      <InfinityPorfolioCard
        items={portfolioSlide1}
        speed="normal"
        className="pt-[80px] md:pt-[246px]"
        pauseOnHover={false}
      />
      <InfinityPorfolioCard
        items={portfolioSlide2}
        speed="normal"
        direction="right"
        className="py-[44px]"
        pauseOnHover={false}
      />
      <div className=" flex items-center flex-col pb-[37px]">
        <a className="btn-gradient-blue" href="https://www.behance.net/deborahdesign8">View Recent Works</a>
      </div>
    </div>
  );
}

export default Portfolio;
