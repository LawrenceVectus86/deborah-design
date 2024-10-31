import Header from "./components/Header/Header";
import Membership from "./components/Membership/Membership";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Header/Portfolio";
import BgNoice from "./assets/images/bg-noice.png";
import BgPatern from "./assets/images/bg-pattern.png";
import BgPaternMobile from "./assets/images/bg-patern-mobile.png";
import Eclipse from "./assets/images/ellipse.png";
import HowDoesWork from "./components/Membership/HowDoesWork";
import DesignService from "./components/DesignService/DesignService";
import Price from "./components/Price/Price";
import Testimonial from "./components/Testimonal/Testimonial";
import Faq from "./components/Faq/Faq";
import Schedule from "./components/Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import NavbarMobile from "./components/Navbar/NavbarMobile";
// import BgStar from "./assets/images/bg-star.png";
function App() {
  return (
    <div>
      <div className="wrapper overflow-hidden relative">
        <div className="absolute top-[8200px] md:top-[7000px] lg:top-[5600px] -left-[300px] md:-left-[148px] lg:-left-[148px]  w-[750px] h-[750px] bg-gradient-to-r opacity-30 rounded-full bg-blend-soft-light from-[#233B6E] to-[#00F0FF] blur-[100px]"></div>
        <div className="absolute top-0 lg:top-[3300px] left-[155px] bg-gradient-to-r from-[#283E7D] to-[#86A6FF] w-[781px] h-[546px] opacity-50 blur-[100px] "></div>
        <img
          src={Eclipse}
          alt="eclips"
          className="absolute top-[10500px] lg:top-[6203px] -left-[140px] w-[499px] h-[699px]"
        />
        <div className="header-wrapper overflow-hidden relative">
          <img
            src={BgNoice}
            className="absolute opacity-40 left-0 top-0 w-full h-auto"
          />
          <Navbar />
          <NavbarMobile />
          <Header />
          <Portfolio />
        </div>
        <div className="">
          <div className="relative">
            <img
              src={BgPatern}
              className="hidden md:block absolute -top-[40px] md:-top-[100px] lg:-top-[239px] w-full "
            />
            <img
              src={BgPaternMobile}
              className="block md:hidden absolute -top-[300px] lg:-top-[239px] w-full "
            />

            <div className="relative">
              <Membership />
              <HowDoesWork />
            </div>
          </div>
          <DesignService />
          {/* <div className="relative">
            <Price />
          </div> */}
          <div className="relative">
            <div className="relative">
              <Testimonial />
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-[250px] -left-[50px] w-[800px] h-[800px] bg-gradient-to-r opacity-50 rounded-full bg-blend-soft-light from-[#283E7D] to-[#86A6FF] blur-[100px]"></div>
            <div className="relative">
              <Faq />
            </div>
          </div>
          <Schedule />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
