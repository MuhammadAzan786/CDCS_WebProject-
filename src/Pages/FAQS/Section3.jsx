import React, { useState } from "react";
import Rectangle4 from "../../assets/Images/Rectangle4.png";
import St1 from "../../assets/Images/faq1.png";
import St2 from "../../assets/Images/faq2.png";
import St3 from "../../assets/Images/faq3.png";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Section3 = () => {
  const faqData = [
    {
      question: "How do I know if my case qualifies for debt collection?",
      answer:
        "If you have outstanding debts with identifiable debtors, our team can assess your case and determine the best course of action.",
    },
    {
      question: "What types of debts do you collect?",
      answer:
        "We specialize in collecting both personal and business-related debts, including credit card balances, loans, mortgages, and more.",
    },
    {
      question: "How long does the debt collection process take?",
      answer:
        "The timeline can vary depending on the debtor's cooperation and the complexity of the case. However, we work efficiently to resolve debts as quickly as possible.",
    },
    {
      question: "Are your services legally compliant?",
      answer:
        "Yes, we adhere to all legal and regulatory standards in the UAE, Qatar, and Pakistan to ensure that all recovery efforts are fully compliant with local laws.",
    },
    {
      question: "What makes your company different from others?",
      answer:
        "We combine years of experience, cutting-edge technology, and a client-focused approach to offer the most effective debt recovery solutions available.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section>
      <div className="bg-Artboardlarge  overflow-x-hidden ">
        <div className="max-w-[1440px] mx-auto  lg:px-10  xl:px-24 p-2  md:p-10 md:py-10"></div>
        {/* lower div */}
        <div className="max-w-[1440px] mx-auto  lg:px-6  xl:px-12 max-md:p-2  md:p-5 ">
          <div className=" ">
            <div className="p-2  flex flex-col md:flex-row md:gap-20 md:items-start items-center  justify-center  md:mb-20 xl:gap-28">
              {/* images */}
              <div className="grid grid-cols-2 md:grid-cols-1 max-lg:md:w-[279.5px] max-xl:lg:w-[347.672px] flex-col items-center justify-center   md:flex-col relative  max-md:gap-3  md:mt-16 lg:mt-20 gap-[51px] xl:mt-28 lg:ml-5 xl:gap-[60px] lg:gap-[50px] md:gap-10">
                <div
                  className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]   md:w-[100%] md:h-[100%] "
                  data-aos="fade-right"
                >
                  <img src={St1} alt="" className=" shadow-2xl rounded-3xl" />
                </div>
                {/* <div
                  className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]   md:w-[100%]"
                  data-aos="fade-right"
                >
                  <img
                    src={St2}
                    alt=""
                    className="   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl"
                  />
                </div> */}
                <div
                  className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]  xl:hidden  md:w-[100%]"
                  data-aos="fade-right"
                >
                  <img
                    src={St3}
                    alt=""
                    className="   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl"
                  />
                </div>
              </div>

              <div
                className="faq-container  mx-auto my-10 bg-white shadow-2xl p-6 md:w-[600px] rounded-lg xl:w-[700px]"
                data-aos="fade-left"
              >
                <h1 className="text-2xl md:text-4xl font-bold text-[#03A651] text-center mb-6">
                  FAQs
                </h1>

                {faqData.map((faq, index) => (
                  <div key={index} className="faq-item border-b py-5">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-lg md:text-xl font-medium">
                        {faq.question}
                      </h3>
                      <span>
                        {openIndex === index ? (
                          <FaChevronUp className="text-[#03A651]" />
                        ) : (
                          <FaChevronDown className="text-[#03A651]" />
                        )}
                      </span>
                    </div>
                    {openIndex === index && (
                      <p className="mt-2 text-sm md:text-base text-gray-600">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
