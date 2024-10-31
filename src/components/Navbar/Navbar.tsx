import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import IcMenu from "../../assets/svgs/ic-menu.svg";

import { navbarData } from "../../data/Data";
import { ToggleMobileMenu } from "../../context/ToggleMenuMobile";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const { show, setShow } = useContext(ToggleMobileMenu);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div className="">
      <div className="relative">
        <div
          className={
            scroll
              ? "bg-bgColor w-full fixed z-20 backdrop-blur-sm bg-opacity-20"
              : "bg-transparent  w-full fixed transition ease-in-out duration-500 flex items-center z-20"
          }
        >
          <nav className="relative flex items-center justify-between px-5 md:px-10 lg:px-[76px] py-[18px] md:py-[24px] w-full">
            <a href="">
              <img
                src={logo}
                alt="logo-alt"
                className="w-100 h-[19px] md:h-14 mr-2"
              />
            </a>
            <div className="hidden lg:flex items-center px-[43.5px] lg:px-2 ">
              {navbarData.map((item) => {
                return (
                  <div key={item.id}>
                    <a href={item.link} className="nav-link">
                      {item.name}
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center">
              <a
                href="#work"
                className="btn-gradient-blue-nav-mobile md:btn-gradient-blue"
              >
                Get Started
              </a>
              <button
                className="block lg:hidden ml-[10px] lg:ml-0"
                onClick={() => {
                  setShow(!show);
                  console.log(show);
                }}
              >
                <img src={IcMenu} alt="ic-menu" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
