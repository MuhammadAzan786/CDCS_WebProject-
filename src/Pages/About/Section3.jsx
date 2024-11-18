import React from "react";
import Rectangle4 from "../../assets/Images/Rectangle4.png";
import St1 from "../../assets/Images/abt1.png";
import St2 from "../../assets/Images/abt2.png";
import { Box } from "@mui/material";
const Section3 = () => {
  return (
    <section>
      <div className="bg-Artboardlarge  overflow-x-hidden ">
        <div className="max-w-[1440px] mx-auto  lg:px-10  xl:px-24 p-2  md:p-10 md:py-10">
          <div className=" ">
            {/* upper div */}

            <div className="p-2 flex flex-col items-center relative">
              <h1
                className=" text-[#210F03] whitespace-nowrap text-xl font-Poppins xl:text-[70px] md:text-3xl font-semibold xs:text-2xl lg:leading-[81px] w-full self-center  text-center"
                data-aos="fade-left"
              >
                About <span className="text-[#03A651]">Us</span>
              </h1>
              <img
                src={Rectangle4}
                alt=""
                className="md:mt-20 mt-5"
                data-aos="fade-left"
              />
              <div
                className="max-w-[1110px] max-h-[440px] flex items-center justify-center flex-col  px-5 h-[370px] xs:h-[450px] bg-[#F9FDFF] rounded-[16px]  shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] xs:top-[12rem] absolute top-40 sm:top-[18rem] md:top-[50.417vw] w-[83.333vw] md:h-[240px] lg:h-[280px] xl:h-[250px] xl:top-[575.796px] "
                data-aos="fade-left"
              >
                {/*  */}
                <p className="max-w-[1095px]   text-[#210F03] text-center font-Poppins lg:text-[18px]  lg:leading-[30px] xl:leading-[37px] font-light   text-sm xs:text-base">
                  Corporate Debt Collection Services is a team of legal
                  professionals and former bank executives specializing in
                  recovering delinquent loans. They collaborate with clients to
                  reduce debts, improve cash flow, and lower costs, while being
                  registered with <span className="text-[#03A651]">PSEB</span>{" "}
                  and <span className="text-[#03A651]">FBR</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* lower div */}
        <div className="max-w-[1440px] mx-auto  lg:px-6  xl:px-12 max-md:p-2  md:p-5 ">
          <div className=" ">
            <div className="p-2 mt-96 md:mt-48 flex flex-col md:flex-row md:gap-20 md:items-start items-center  justify-center  lg:mt-44  xl:mt-28 md:mb-20 xl:gap-28">
              {/* images */}
              <div className="grid grid-cols-2 md:grid-cols-1 max-lg:md:w-[279.5px] max-xl:lg:w-[347.672px] flex-col items-center justify-center mt-20  md:flex-col relative  max-md:gap-3 md:mt-32  lg:mt-52 xl:mt-60  gap-[51px] lg:ml-5 xl:gap-[60px] lg:gap-[50px] md:gap-10">
                <div
                  className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]   md:w-[100%] md:h-[100%] "
                  data-aos="fade-right"
                >
                  <img src={St1} alt="" className=" shadow-2xl rounded-3xl" />
                </div>
              </div>

              <div className="mt-10 md:mt-0 lg:mt-10 xl:mt-20 flex flex-col items-center md:items-start gap-3  max-md:mb-10">
                <h1
                  className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start"
                  data-aos="fade-left"
                >
                CDCS
                </h1>
                <p
                  className="max-w-[497px] text-[#333] font-Poppins text-lg lg:text-[32px] text-center font-semibold leading-normal md:text-start"
                  data-aos="fade-left"
                >
                  About us
                </p>
                {/* <p className="text-[#03A651] font-bold font-Poppins text-xs mt-[-15px] cursor-pointer ">Click The <span className="text-black">Strategy</span> To Explore</p> */}
                <span className="font-semibold" data-aos="fade-left">
                  The CDCS will provide the following services to its clients:{" "}
                </span>
                <Box className="text-[#210F03] font-Poppins lg:text-[18px] lg:leading-[30px] xl:leading-[37px] font-light  md:text-start list-disc flex flex-col gap-10   max-md:ml-7 text-sm  sm:text-base  md:leading-[30px] md:gap-[5vw]  lg:gap-[4vw] xl:gap-[80px] md:mt-5  max-w-[647px] max-lg:md:w-[376.5px] max-xl:lg:w-[559.406px]">
                  <p>
                    Corporate Debt Collection Services comprises a team of
                    distinguished legal professionals and former executives from
                    banks and development finance institutions, all of whom
                    possess a demonstrated track record in the recovery of
                    delinquent and non-performing loans. This organization is
                    officially registered with the <span className="text-[#03A651]">Pakistan Software Export
                    Board (PSEB) and the Federal Board of Revenue (FBR)  </span>of the
                    Government of Pakistan. The primary aim of Corporate Debt
                    Collection Services is to establish a collaborative
                    partnership with clients to formulate strategies that will
                    minimize both short-term and long-term debts, enhance cash
                    flow, and lower associated costs.
                  </p>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
