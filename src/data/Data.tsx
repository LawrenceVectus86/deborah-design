import Photoshop from "../assets/svgs/ic-photoshop.svg";
import Illustrator from "../assets/svgs/ic-illustrator.svg";
import AfterEffect from "../assets/svgs/ic-after-effects.svg";
import Figma from "../assets/svgs/ic-figma.svg";
import Dribbble from "../assets/svgs/ic-dribble.svg";
import UI8 from "../assets/svgs/ic-ui8.svg";
import Portfolio1 from "../assets/images/portfolios/portfolio-1.png";
import Portfolio2 from "../assets/images/portfolios/portfolio-2.png";
import Portfolio3 from "../assets/images/portfolios/portfolio-3.png";
import Portfolio4 from "../assets/images/portfolios/portfolio-4.png";
import Portfolio5 from "../assets/images/portfolios/portfolio-5.png";
import Portfolio6 from "../assets/images/portfolios/portfolio-6.png";
import Portfolio7 from "../assets/images/portfolios/portfolio-7.png";
import Portfolio8 from "../assets/images/portfolios/portfolio-8.png";
import IcSupport from "../assets/svgs/ic-support.svg";
import IcOnlineClass from "../assets/svgs/ic-online-class.svg";
import IcDesignCourse from "../assets/svgs/ic-design-course.svg";
import IcBox from "../assets/svgs/ic-box.svg";
import IcDesktop from "../assets/svgs/ic-desktop.svg";
import IcMobile from "../assets/svgs/ic-mobile.svg";
import IcMotionDesign from "../assets/svgs/ic-motion-design.svg";
import IcGraphicDesign from "../assets/svgs/ic-graphic-design.svg";
import IcIllustration from "../assets/svgs/ic-illustration.svg";
import IcLogoDesign from "../assets/svgs/ic-logo-design.svg";
import IcProductDesign from "../assets/svgs/ic-product-design.svg";
import IcIconDesign from "../assets/svgs/ic-icon-design.svg";
import Testi1 from "../assets/images/testimonials/testimonial1.png";
import Testi2 from "../assets/images/testimonials/testimonial2.jpeg";
import Testi3 from "../assets/images/testimonials/testimonial3.png";

export const navbarData = [
  {
    id: 1,
    name: "Work",
    link: "#work",
  },
  {
    id: 2,
    name: "Benefits",
    link: "#benefits",
  },
  {
    id: 3,
    name: "Process",
    link: "#process",
  },
  // {
  //   id: 4,
  //   name: "Pricing",
  //   link: "#pricing",
  // },
];

export const techStack = [
  {
    id: 1,
    name: "Photoshop",
    icon: Photoshop,
  },
  {
    id: 2,
    name: "Illustrator",
    icon: Illustrator,
  },
  {
    id: 2,
    name: "After Effects",
    icon: AfterEffect,
  },
  {
    id: 3,
    name: "Figma",
    icon: Figma,
  },
  {
    id: 4,
    name: "Dribbble",
    icon: Dribbble,
  },
  {
    id: 5,
    name: "UI8",
    icon: UI8,
  },
];

export const portfolioSlide1 = [
  {
    id: 1,
    image: Portfolio1,
  },
  {
    id: 2,
    image: Portfolio2,
  },
  {
    id: 3,
    image: Portfolio3,
  },
  {
    id: 4,
    image: Portfolio4,
  },
];

export const portfolioSlide2 = [
  {
    id: 1,
    image: Portfolio5,
  },
  {
    id: 2,
    image: Portfolio6,
  },
  {
    id: 3,
    image: Portfolio7,
  },
  {
    id: 4,
    image: Portfolio8,
  },
];

export const howDoesWorkItems = [
  {
    id: 1,
    title: "24/7 Design Request",
    description: "Join a plan and submit  the design requests as you'd need.",
    icon: IcSupport,
  },
  {
    id: 2,
    title: "Fast Delivery",
    description: "Get your design in an average of two business days.",
    icon: IcOnlineClass,
  },
  {
    id: 3,
    title: "Unlimited Revisions",
    description:
      "We'll make changes to the designs until you're completely happy.",
    icon: IcDesignCourse,
  },
];

export const designServices = [
  {
    id: 1,
    title: "Social Media Graphic Design",
    description:
      "Increase the visibility of your business on social media by creating expertly crafted posts on sites like YouTube, Twitter, Facebook, and more.",
    icon: IcBox,
  },
  {
    id: 2,
    title: "Website Design",
    description:
      "Revamp your marketing landing page or web app with our web design services. Enhance your web presence and impress your audience with our skilled development talents.",
    icon: IcDesktop,
  },
  {
    id: 3,
    title: "Mobile Design",
    description:
      "Enhance your customers' experience with a beautifully designed mobile app that combines elegance and usability.",
    icon: IcMobile,
  },
  {
    id: 4,
    title: "Motion Design",
    description:
      "Unlock the potential of stunning visuals and videos tailored for you. Get a web design package that inspires visitor engagement.",
    icon: IcMotionDesign,
  },
  {
    id: 5,
    title: "Graphic Design",
    description:
      "Our graphic designer provides unlimited tasks for your brand, including social media, email graphics, and business cards.",
    icon: IcGraphicDesign,
  },
  {
    id: 6,
    title: "Illustration",
    description:
      "Obtain custom illustration services to present your product more clearly to your customers and audience.",
    icon: IcIllustration,
  },
  {
    id: 7,
    title: "Logo Design",
    description:
      "Transform your brand identity with our professional logo design services, creating memorable and impactful logos that resonate with your audience.",
    icon: IcLogoDesign,
  },
  {
    id: 8,
    title: "Products Design",
    description:
      "Bring your product ideas to life with our innovative product design services, combining functionality and aesthetics to meet your unique specifications",
    icon: IcProductDesign,
  },
  {
    id: 9,
    title: "Icon Design",
    description:
      "Enhance your user interface with our custom icon design services, crafting visually appealing and intuitive icons that improve user experience.",
    icon: IcIconDesign,
  },
];

export const pricingItems = [
  {
    id: 1,
    title: "Silver",
    description:
      "Experience the excellence of our services with a handful of small projects.",
    price: "999",
    benefits: [
      "One request at a time",
      "3-4 days businesss delivery",
      "Unlimited  revisions",
      "Up to 1 meeting per week",
      "Dev ready Figma files",
      "Unlimited Stock Photos",
    ],
  },
  {
    id: 2,
    title: "Gold",
    description:
      "Ideal for burgeoning startups seeking continuous design assistance.",
    price: "1,999",
    benefits: [
      "Two request at a time",
      "2-3 business days delivery",
      "Unlimited revisions",
      "Up to 1 meeting per week",
      "Dev ready Figma files",
      "Unlimited Stock Photos",
    ],
  },
  {
    id: 3,
    title: "Diamond",
    description:
      "Ideal for burgeoning startups seeking continuous design assistance.",
    price: "2,499",
    benefits: [
      "Three request at a time",
      "1-2 business days delivery",
      "Unlimited revisions",
      "Flexible weekly meetings",
      "Dev ready Figma files",
      "Unlimited Stock Photos",
    ],
  },
];

export const faqItems = [
  {
    id: 1,
    name: "What sort of design services do y'all provide in here?",
    desc: "Social Media Design, Graphic Design, Website Design, Mobile Application Design, Logo Design, Illustration Design, Icon Design, Presentation Design, and Product Design",
  },
  {
    id: 2,
    name: "Is there a cap on the amount of design requests I can throw your way?",
    desc: "The design of the cap is based on the package you order",
  },
  {
    id: 3,
    name: "When can I expect my designs to be completed?",
    desc: "You can expect your designs to be completed in approximately 2-5 business days depending on the package that you have ordered (weekends excluded).",
  },
  {
    id: 4,
    name: "What software do you use for design?",
    desc: "We use Figma, Adobe Illustrator, After Effects, and Canva for design projects.",
  },
  {
    id: 5,
    name: "How do I get started with service?",
    desc: "Pay and confirm your order via WhatsApp at +6282144234649. We Will then set up a Trello board for you to place your design request.",
  },
  {
    id: 6,
    name: "What if I don’t like my design?",
    desc: "We offer unlimited revisions until you're satisfied with your design.",
  },
  {
    id: 7,
    name: "What if I only need one design request?",
    desc: "If you only need one design, you can purchase the standard subscription and cancel it after the first month.",
  },
  {
    id: 8,
    name: "Can I get a refund if I’m not satisfied with the service?",
    desc: "Yes, we do accept 7 days refund policy. no question asked.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Benjamin Sern (Sng)",
    image: Testi3,
    text: "I've engaged Deborah for a website redesign consultation, and found her responsive, competent and proactive during the short process. It was a pleasure dealing with Deborah. 7/5.",
    rating: 5,
    link: "https://linkedin.com/in/il-w4c/overlay/about-this-profile/",
  },
  {
    id: 2,
    name: "Rasidah Johar",
    image: Testi1,
    text: "They're really professional in designing a good website. Take account of our concerns and brainstroming idea was fun experience for me.Fast and responsive. Thank you and the team. God bless you.😄",
    rating: 5,
    link: "",
  },
  {
    id: 3,
    name: "Andrew Lo",
    image: Testi2,
    text: "Through remarkable speed and efficiency. They are able to deliver well within the agreed-upon timelines, showcasing not only technical capability but a genuine commitment to client satisfaction.",
    rating: 5,
    link: "",
  },
];
