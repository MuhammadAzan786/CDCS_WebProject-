// Section.js
import React from "react";
import Section1 from "./Section1";
const Section = ({ id, title, children }) => {
  return (
    <div>
        <Section1/>
        <div id={id} className="my-10">
           {/* Upper Section: Title */}
    <div className="p-2 flex flex-col items-center relative">
      <h1
        className="max-w-[850px] text-[#210F03] text-center text-xl font-Poppins xl:text-[70px] md:text-3xl font-semibold xs:text-2xl lg:leading-[81px] w-full self-center"
        data-aos="fade-up"
      >
        <span className="text-[#03A651]">Terms &</span> Conditions
      </h1>
    </div>
        <div>
        <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold">{title}</h1>
        <div>{children}</div>
        </div>
    
    </div>
        </div>
  
  );
};

export default Section;

// <div className="overflow-x-hidden overflow-y-hidden">
//   {/* Container */}
//   <div className="max-w-[1440px] mx-auto lg:px-10 xl:px-24 p-2 md:p-10 md:py-10">

//     {/* Upper Section: Title */}
//     <div className="p-2 flex flex-col items-center relative">
//       <h1
//         className="max-w-[850px] text-[#210F03] text-center text-xl font-Poppins xl:text-[70px] md:text-3xl font-semibold xs:text-2xl lg:leading-[81px] w-full self-center"
//         data-aos="fade-up"
//       >
//         <span className="text-[#03A651]">Terms &</span> Conditions
//       </h1>
//     </div>

  
//   </div>
// </div>
// </section>