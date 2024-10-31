import IcTopQuality from "../../assets/svgs/ic-top-quality.svg";
import IcFixMonthlyRate from "../../assets/svgs/ic-fix-monthly-rate.svg";
import IcFastSpeedy from "../../assets/svgs/ic-fast-speedy.svg";
import IcFlexible from "../../assets/svgs/ic-flexible.svg";
import IcTrello from "../../assets/svgs/ic-trello.svg";
import IcMoneyBack from "../../assets/svgs/ic-money-back.svg";

import MembershipCard from "../Card/MembershipCard";
import SectionTitle from "../Sections/SectionTitle";
function Membership() {
  return (
    <div className="mx-5 md:mx-[120px] pt-[120px] md:pt-[211px] " id="benefits">
      <SectionTitle
        title="Awesome Membership Perks"
        subtitle="With a DIVADSGN subscription, you'll get stress-free design like magic, delivering consistent quality at a steady price."
        className=""
      />
      <div className="mt-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MembershipCard
            image={IcTopQuality}
            title="Top Quality"
            subtitle="A design wizard that delivers top-notch masterpieces whenever you crave it!"
            className="bg-gradient-to-tr from-[#FFFFFF30] via-[#FFFFFF30] via-70% to-[#5581FF] rounded-3xl p-[1.5px]"
          />
          <MembershipCard
            image={IcFastSpeedy}
            title="Super Speedy"
            subtitle="Transform your design into review-ready perfection in only a 3-5 business days, on average."
            className="bg-gradient-to-t from-[#FFFFFF30] via-[#FFFFFF30] via-70% to-[#5581FF] rounded-3xl p-[1.5px]"
          />
          <MembershipCard
            image={IcFixMonthlyRate}
            title="Fix Monthly Rate"
            subtitle="No more hidden fees or surprise charges - you'll pay the exact same amount every single month."
            className="bg-gradient-to-tl from-[#FFFFFF30] via-[#FFFFFF30] via-70% to-[#5581FF] rounded-3xl p-[1.5px]"
          />
          <MembershipCard
            image={IcFlexible}
            title="Flexible"
            subtitle="Upgrade, downgrade, cancel, or hit pause of subscription services, always ready to accommodate your ever-changing needs."
            className="bg-gradient-to-tr from-[#FFFFFF30] via-[#FFFFFF30] via-70% to-[#5581FF] rounded-3xl p-[1.5px]"
          />
          <MembershipCard
            image={IcTrello}
            title="Trello Collabs"
            subtitle="Invite us to your Trello board, and we'll be your ultimate collaboration BFFs. Working alongside you like we're in the same boat."
            className="bg-gradient-to-t from-[#FFFFFF30] via-[#FFFFFF30] via-70% to-[#5581FF] rounded-3xl p-[1.5px]"
          />
          <MembershipCard
            image={IcMoneyBack}
            title="Money-back guarantee"
            subtitle="We're pretty sure this won't happen, but if it doesn't tickle your fancy within a week, we'll gladly give your money back!"
            className="bg-gradient-to-tl from-[#FFFFFF30] via-[#FFFFFF30] via-70% to-[#5581FF] rounded-3xl p-[1.5px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Membership;
