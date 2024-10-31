function MembershipCard({
  image,
  title,
  subtitle,
  className,
}: {
  image: string;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={`w-full md:w-[384px] h-[376px]  ${className}`}>
      <div className="w-full md:w-[381px] h-[373px] bg-bgColor rounded-3xl ">
        <div className="w-full md:w-[381px] h-[373px] bg-[#d2d2d233] bg-blend-luminosity rounded-3xl ">
          <div className="w-full md:w-[381px] h-[373px] bg-[#4860CB73]  bg-blend-multiply bg-radial-blue rounded-3xl  pt-6 px-6">
            <div className="flex flex-col items-center">
              <img src={image} className="w-[144px] h-[144x]" alt="" />
              <div className="text-center pt-12">
                <h5 className="font-bold text-whiteText text-lg leading-8">
                  {title}
                </h5>
                <p className="font-normar text-whiteText opacity-80 pt-4">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipCard;
