import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import MarqueeSection from "../../Components/MarqueeSection";
import company1 from "../../assets/Images/logo1.jpg";
import company2 from "../../assets/Images/logo2.jpg";
import company3 from "../../assets/Images/logo3.jpg";
import company4 from "../../assets/Images/logo4.jpg";
import company5 from "../../assets/Images/logo5.jpg";
import company6 from "../../assets/Images/logo6.jpg";
import company7 from "../../assets/Images/logo7.jpg";
import company8 from "../../assets/Images/logo8.jpg";
import company9 from "../../assets/Images/logo9.jpg";
import company10 from "../../assets/Images/logo10.jpg";
import company11 from "../../assets/Images/logo11.jpg";
import company12 from "../../assets/Images/logo12.jpg";
import company13 from "../../assets/Images/logo13.jpg";
import IndustriesWeServe from "../../Components/IndustriesWeServe";
import HowItWorks from "../../Components/HowItWorks";
const HomePage = () => {
  const logos = [
    { src: company1, alt: "Company 1" },
    { src: company2, alt: "Company 2" },
    { src: company3, alt: "Company 3" },
    { src: company4, alt: "Company 4" },
    { src: company5, alt: "Company 5" },
    { src: company6, alt: "Company 6" },
    { src: company7, alt: "Company 7" },
    { src: company8, alt: "Company 8" },
    { src: company9, alt: "Company 9" },
    { src: company10, alt: "Company 10" },
    { src: company11, alt: "Company 11" },
    { src: company12, alt: "Company 12" },
    { src: company13, alt: "Company 13" },
  ];

  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <HowItWorks />
      <Section4 />
      <IndustriesWeServe />
      <MarqueeSection logos={logos} />
    </div>
  );
};

export default HomePage;
