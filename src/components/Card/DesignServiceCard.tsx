function DesignServiceCard({
  item,
}: {
  item: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
}) {
  return (
    <div className="w-full md:w-[408px] h-[260px] bg-black25 p-5">
      <div className="w-12 h-12 bg-[#2E2E2E] rounded-full flex items-center justify-center">
        <img src={item.icon} alt={item.title} />
      </div>
      <p className="pt-4">
        <h6 className="text-lg font-bold leading-8 text-white">{item.title}</h6>
        <p className="pt-[10px] text-[#9B9B9B] text-base leading-6">
          {item.description}
        </p>
      </p>
    </div>
  );
}

export default DesignServiceCard;
