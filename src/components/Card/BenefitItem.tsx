import IcCheck from "../../assets/svgs/ic-check.svg";

const BenefitItem = ({ name }: { name: string }) => {
  return (
    <div className="flex mb-4">
      <img src={IcCheck} alt="" />
      <p className="text-whiteText text-base ml-2">{name}</p>
    </div>
  );
};

export default BenefitItem;
