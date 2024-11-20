import Logo from "../../assets/images/logo.png";
import IcTiktok from "../../assets/svgs/ic-tiktok.svg";
import IcLinkedin from "../../assets/svgs/ic-linkedin.svg";
import IcDribbble from "../../assets/svgs/ic-dribbble.svg";
import IcInstagram from "../../assets/svgs/ic-instagram.svg";
function Footer() {
  return (
    <footer className="mx-[76px] mt-[80px] mb-[49px]">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="">
          <img src={Logo} alt="logo-alt" className="h-[51px]" />
          <p className="text-xl mt-[18px] text-white ">
            Deborah Design. Design at its finest.
          </p>
          <div className="flex mt-[18px]">
            {/* <button className="btn-gradient-icon mr-[18px]">
              <img src={IcTiktok} alt="tiktok" />
            </button> */}
            <a href="https://www.linkedin.com/company/deborahdesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient-icon mr-[18px]">
              <img src={IcLinkedin} alt="linkedin" />
            </a>
            <a
              href="https://www.behance.net/deborahdesign8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient-icon mr-[18px]"
            >
            <img src={IcDribbble} alt="dribbble" />
          </a>

           <a href="https://www.instagram.com/deborahdesign.uk?igsh=aHAzajZsdnB6b3ox"
           target="_blank"
           rel="noopener noreferrer"
           className="btn-gradient-icon mr-[18px]">
              <img src={IcInstagram} alt="instagram" />
           </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h5 className="footer-title">Quick Links</h5>
          <ul className="mt-[14px]">
            <li className="mb-6">
              <a className="footer-link" href="#work">
                Work
              </a>
            </li>
            <li className="mb-6">
              <a className="footer-link" href="#benefits">
                Benefits
              </a>
            </li>
            <li className="mb-6">
              <a className="footer-link " href="#process">
                Process
              </a>
            </li>
            <li>
              <a className="footer-link" href="#pricing">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10 md:mt-0">
          <h5 className="footer-title mb-[14px]">Contact Us</h5>
          <p className="footer-link mb-[14px]"><a href="mailto:deborahhuda8@gmail.com">deborahhuda8@gmail.com</a></p>
          <p className="footer-link mb-[14px]">
          <a
            href="https://wa.me/6282144234649"
            target="_blank"
            rel="noopener noreferrer">
            +62821-4423-4649
          </a>
        </p>

          <p className="footer-link mb-[14px]">DEBORAH DESIGN LTD</p>
          <p className="footer-link mb-[14px]">United Kingdom - 71-75 Shelton Street, London, England Great Britain</p>
        </div>
      </div>
      <h6 className="mt-[70px] text-[#8FA0AD] text-lg font-medium">
        © DeborahTech 2024. All rights reserved.
      </h6>
    </footer>
  );
}

export default Footer;
