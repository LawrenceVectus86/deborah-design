function SectionTitle({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-whiteText text-center font-medium font-sans text-[28px] md:text-[46px] leading-tight">
        {title}
      </h1>
      <h6 className="text-whiteText text-center font-normal text-xs md:text-xl mt-4">
        {subtitle}
      </h6>
    </div>
  );
}

export default SectionTitle;
