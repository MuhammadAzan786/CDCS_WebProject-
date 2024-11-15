import React from "react";
import Rectangle4 from "../../assets/Images/Rectangle4.png";
import St1 from "../../assets/Images/ct1.png";
import St2 from "../../assets/Images/ct2.png";
import St3 from "../../assets/Images/ct3.png";
import St4 from "../../assets/Images/ct4.png";
const Section3 = () => {
  return (
    <section>
      <div className="bg-Artboardlarge  overflow-x-hidden ">
        <div className="max-w-[1440px] mx-auto  lg:px-10  xl:px-24 p-2  md:p-10 md:py-10">
          <div className=" ">
            {/* upper div */}

            {/* <div className="p-2 flex flex-col items-center relative">
              <h1 className=" text-[#210F03] xs:whitespace-nowrap text-xl font-Poppins xl:text-[70px] md:text-3xl font-semibold xs:text-2xl lg:leading-[81px] w-full self-center  text-center">

                Welcome to <span className="text-[#03A651]">Our</span>  Outsourcing
              </h1>
              <img src={Rectangle4} alt="" className='md:mt-20 mt-5' />
              <div className="max-w-[1110px] max-h-[240px] flex items-center justify-center flex-col  px-5 h-[180px]  rounded-[16px] bg-[#F9FDFF] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] xs:top-[12rem] absolute top-40 sm:top-[18rem] md:top-[50.417vw] w-[83.333vw] lg:h-[240px] xl:top-[575.796px]">
                <p className="max-w-[1095px] max-h-[149.14px]  text-[#210F03] text-center font-Poppins xl:text-[30px] lg:text-2xl font-light  xl:leading-[45px] text-sm xs:text-base">
                  <span className="text-[#03A651] font-bold">Our Services</span>, We offer expert financial solutions, including receivables collection, bad debt recovery, and IT services. Trust us for effective management of non-performing loans and diverse loan types
                </p>
              </div>


            </div> */}
          </div>
        </div>
        {/* lower div */}
        <div className="max-w-[1440px] mx-auto  lg:px-6  xl:px-12 max-md:p-2  md:p-5 ">
          <div className=" ">
            <div className="p-2  flex flex-col md:flex-row md:gap-20 md:items-start items-center  justify-center  md:mb-20 xl:gap-28">
              {/* images */}
              <div className="grid grid-cols-2 md:grid-cols-1 max-lg:md:w-[279.5px] max-xl:lg:w-[347.672px] flex-col items-center justify-center   md:flex-col relative  max-md:gap-3  md:mt-16 lg:mt-20 gap-[51px] xl:mt-28 lg:ml-5 xl:gap-[60px] lg:gap-[50px] md:gap-10">
                <div
                  className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]   md:w-[100%] md:h-[100%] "
                  // data-aos="fade-right"
                >
                  <img src={St1} alt="" className=" shadow-2xl rounded-3xl" />
                </div>
              </div>

              <div className="mt-10 md:mt-0  flex flex-col items-center md:items-start gap-3  max-md:mb-10">
                <h1
                  className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start"
                  data-aos="fade-left"
                >
                  Get In Touch !
                </h1>
                <p
                  className="max-w-[497px] text-[#333] font-Poppins text-lg lg:text-[32px] text-center font-semibold leading-normal md:text-start"
                  data-aos="fade-left"
                >
                  Contact Us
                </p>

                <ul className="text-[#210F03] font-Poppins lg:text-[18px] lg:leading-[30px] xl:leading-[37px] font-light md:text-start list-disc flex flex-col  max-md:ml-7 text-sm sm:text-base md:leading-[30px]  md:mt-5 max-w-[647px] max-lg:md:w-[376.5px] max-xl:lg:w-[559.406px]">
                  <li className="md:mt-10 xl:mt-0">
                    <span className="font-semibold">Phone:</span>
                    <br />
                    +92 51 8899014 / +92 300 034 5000 / +92 345 856 8888
                  </li>
                  <li className="md:mt-10 xl:mt-0">
                    <span className="font-semibold">Email:</span>
                    <br />
                    info@cdcs.com.pk / ceo@cdcs.com.pk
                  </li>
                  <li className="md:mt-10 xl:mt-0">
                    <span className="font-semibold">Address:</span>
                    <br />
                    H-1, Athar Street Main Defence Road, New Lalazaar,
                    Rawalpindi-Pakistan
                  </li>
                  <li className="md:mt-10 xl:mt-0">
                    <span className="font-semibold">Business Hours:</span>
                    <br />
                    9:00 A.M to 6:00 P.M
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
