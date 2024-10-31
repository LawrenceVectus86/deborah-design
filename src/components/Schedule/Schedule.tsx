import SectionTitle from "../Sections/SectionTitle";

function Schedule() {
  return (
    <div className="mt-[80px] mx-[20px] md:mx-[200px] lg:mx-[369px]">
      <div className="">
        <SectionTitle
          title="Want to learn more before using our services?"
          subtitle=""
          className=""
        />
      </div>
      <div className="mt-[87px]">
        <div className="bg-gradient-to-r from-[#4B6ED3] to-[#FFFFFF30] rounded-[20px] p-[2px]">
          <div className="bg-bgColor rounded-[20px]">
            <div className="w-full h-[347px] bg-gradient-to-b from-[#FFFFFF00] to-[#ffffff0c]  rounded-[20px] schedule-border py-[58px] px-[100px] md:px-[145px] flex flex-col items-center justify-between ">
              <h5 className="font-bold text-white text-xl md:text-[30px] leading-tight text-center">
                Make an introduction call for 15 minutes.
              </h5>
              <div className="text-center">
                <a
                  href="https://wa.me/6282144234649"
                  target="_blank"
                  className="btn-gradient-blue"
                >
                  Schedule Now
                </a>
                <p className="font-bold text-xs text-center text-white mt-6">
                  Prefer to email?{" "}
                  <a
                    href="mailto:deborahhuda8@gmail.com"
                    className="text-[#156AFB] cursor-pointer"
                  >
                    deborahhuda8@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
