import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Section2 = () => {
  return (
    <section>
      <div className="bg-black h-[1300px] md:h-[880px] lg:h-[780px] overflow-x-hidden overflow-y-hidden">
        <div className="max-w-[1440px] mx-auto overflow-x-hidden overflow-y-hidden lg:px-10  xl:px-12 ">
          <div className="flex flex-col items-center gap-10 lg:gap-10 md:gap-10 absolute px-5 top-[49rem] xs:top-[55rem] md:top-[36rem] lg:top-[46rem] overflow-x-hidden overflow-y-hidden">
            <div className="max-w-[923px]">
              <h1
                className="text-white text-center text-xl font-poppins lg:text-[50px] font-semibold lg:leading-[60px] md:leading-[40px] md:text-[35px]  capitalize md:px-40 lg:px-0"
                data-aos="fade-up"
              >
                Reliable Partner in Collecting Debts
                <br />
                <span className="text-[#03A651]">
                  Bringing Your Finances Back
                </span>
              </h1>
            </div>
            <div className="max-w-[849px]">
              <p
                className=" text-white text-center font-poppins lg:text-[24px] font-normal lg:leading-[35px] capitalize md:px-20"
                data-aos="fade-left"
              >
                Our primary emphasis lies in the collection of commercial
                accounts receivable and the management of delinquent debts, in
                addition to offering pre-collection outsourcing services and
                various other recovery solutions.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-28 lg:gap-5 lg:grid-cols-3 md:grid  md:grid-cols-2 md:gap-10 xl:gap-8">
              <div
                className="w-[270px] max-lg:xs:w-[320px] h-[242px] max-w-[382px] xl:w-[28.281vw] lg:w-[26.367vw] rounded-[16px] border-[3px] border-[#03A651] bg-white flex flex-col items-center justify-center relative
                             xs:px-4"
                data-aos="fade-left"
              >
                <div className="w-[80px] h-[80px]  rounded-full bg-gradient-to-r from-[#03A651] to-[#0D502D] [background-position:299deg] flex items-center justify-center absolute top-[-50px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M39.5203 12.5914L24.4615 4.12085C24.1749 3.95972 23.8251 3.95972 23.5385 4.12085L8.47972 12.5914C8.18344 12.7581 8 13.0717 8 13.4118V27.5294C8 36.3518 15.1776 43.5294 24 43.5294C32.8224 43.5294 40 36.3518 40 27.5294V13.4118C40.0001 13.0717 39.8168 12.7582 39.5203 12.5914ZM38.1177 27.5294C38.1177 35.3139 31.7846 41.6471 24.0001 41.6471C16.2156 41.6471 9.88245 35.3139 9.88245 27.5294V13.9623L24.0001 6.02108L38.1177 13.9623V27.5294Z"
                      fill="white"
                    />
                    <path
                      d="M18.8235 20.4704V22.8234H16.9412C16.4214 22.8234 16 23.2448 16 23.7645V27.9998C16 32.411 19.5888 35.9998 24 35.9998C28.4112 35.9998 32 32.411 32 27.9998V23.7645C32 23.2448 31.5785 22.8234 31.0588 22.8234H29.1765V20.4704C29.1765 19.0876 28.638 17.7878 27.6603 16.8101C26.6826 15.8324 25.3828 15.2939 24 15.2939C21.1457 15.2939 18.8235 17.6161 18.8235 20.4704ZM30.1176 27.9998C30.1176 31.3731 27.3733 34.1175 24 34.1175C20.6267 34.1175 17.8824 31.3731 17.8824 27.9998V24.7057H30.1176V27.9998ZM27.2941 20.4704V22.8234H20.7059V20.4704C20.7059 18.654 22.1836 17.1763 24 17.1763C24.8799 17.1763 25.7072 17.519 26.3293 18.1411C26.9514 18.7632 27.2941 19.5905 27.2941 20.4704Z"
                      fill="white"
                    />
                    <path
                      d="M23.9998 26.5879C23.48 26.5879 23.0586 27.0093 23.0586 27.5291V30.3526C23.0586 30.8723 23.48 31.2938 23.9998 31.2938C24.5196 31.2938 24.9409 30.8723 24.9409 30.3526V27.5291C24.9409 27.0093 24.5196 26.5879 23.9998 26.5879Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <p className="text-[#03A651] text-center font-titillium text-[24px] xs:text-[28px] font-semibold leading-[32px] mt-10">
                  Debt Collection
                </p>
                <p className="text-black text-center font-poppins text-[16px] font-normal leading-[25px] [font-feature-settings:'liga'_off,'clig'_off] mt-6">
                  Corporate Debt Collection Services (CDCS) is a leading agency
                  in debt recovery.
                </p>
              </div>
              <div
                className="w-[270px] max-lg:xs:w-[320px] h-[242px] lg:w-[26.367vw] max-w-[382px] xl:w-[28.281vw] rounded-[16px] border-[3px]  bg-white flex flex-col items-center justify-center relative
                             xs:px-4"
                data-aos="fade-right"
              >
                <div className="w-[80px] h-[80px]  rounded-full bg-[#03A651] [background-position:299deg] flex items-center justify-center absolute top-[-50px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M23.8478 27.7698C25.8801 27.7698 27.5276 26.1223 27.5276 24.09C27.5276 22.0577 25.8801 20.4102 23.8478 20.4102C21.8155 20.4102 20.168 22.0577 20.168 24.09C20.168 26.1223 21.8155 27.7698 23.8478 27.7698Z"
                      fill="white"
                    />
                    <path
                      d="M23.8468 25.4778C24.6133 25.4778 25.2346 24.8564 25.2346 24.09C25.2346 23.3235 24.6133 22.7021 23.8468 22.7021C23.0803 22.7021 22.459 23.3235 22.459 24.09C22.459 24.8564 23.0803 25.4778 23.8468 25.4778Z"
                      fill="#171717"
                    />
                    <path
                      d="M4.80765 35.0977C5.58594 35.0977 6.21687 34.4668 6.21687 33.6885C6.21687 32.9102 5.58594 32.2793 4.80765 32.2793C4.02937 32.2793 3.39844 32.9102 3.39844 33.6885C3.39844 34.4668 4.02937 35.0977 4.80765 35.0977Z"
                      fill="white"
                    />
                    <path
                      d="M44.4932 24.0899C45.0568 24.0899 45.5137 23.633 45.5137 23.0693C45.5137 22.5057 45.0568 22.0488 44.4932 22.0488C43.9296 22.0488 43.4727 22.5057 43.4727 23.0693C43.4727 23.633 43.9296 24.0899 44.4932 24.0899Z"
                      fill="white"
                    />
                    <path
                      d="M15.2471 4.92776C15.8107 4.92776 16.2676 4.47086 16.2676 3.90724C16.2676 3.34362 15.8107 2.88672 15.2471 2.88672C14.6835 2.88672 14.2266 3.34362 14.2266 3.90724C14.2266 4.47086 14.6835 4.92776 15.2471 4.92776Z"
                      fill="white"
                    />
                    <path
                      d="M20.1475 45.1133C20.7111 45.1133 21.168 44.6564 21.168 44.0928C21.168 43.5292 20.7111 43.0723 20.1475 43.0723C19.5839 43.0723 19.127 43.5292 19.127 44.0928C19.127 44.6564 19.5839 45.1133 20.1475 45.1133Z"
                      fill="white"
                    />
                    <path
                      d="M29.885 29.6992C34.8925 27.9459 38.3765 24.656 38.5732 24.4673C38.6759 24.369 38.7338 24.233 38.7338 24.0908C38.7338 23.9487 38.6759 23.8126 38.5732 23.7143C38.3775 23.5266 34.9278 20.2685 29.9608 18.5087L33.2353 15.2342C33.3677 15.1018 33.3677 14.8873 33.2353 14.7548C33.1028 14.6223 32.8881 14.6223 32.7556 14.7548L29.2621 18.2483C29.2927 18.2613 29.3164 18.2853 29.3456 18.3011C27.6517 17.7585 25.7989 17.4012 23.8481 17.4012C21.9369 17.4012 20.1202 17.7448 18.4545 18.2688L14.9406 14.7548C14.8081 14.6223 14.5933 14.6223 14.4609 14.7548C14.3285 14.8873 14.3285 15.1018 14.4609 15.2342L17.7353 18.5087C12.7684 20.2685 9.31874 23.5266 9.12309 23.7143C9.02042 23.8126 8.96247 23.9487 8.96247 24.0908C8.96247 24.233 9.02042 24.369 9.12309 24.4673C9.31976 24.656 12.8037 27.9459 17.8111 29.6992L14.4609 33.0495C14.3285 33.182 14.3285 33.3965 14.4609 33.529C14.5933 33.6615 14.8081 33.6615 14.9406 33.529L18.5325 29.9371C20.1769 30.4473 21.9666 30.7804 23.8481 30.7804C25.7296 30.7804 27.5192 30.4473 29.1637 29.9371L32.7556 33.529C32.8881 33.6615 33.1028 33.6615 33.2353 33.529C33.3676 33.3965 33.3676 33.182 33.2353 33.0495L29.885 29.6992ZM28.0043 29.1606C29.4703 27.9567 30.4074 26.1314 30.4074 24.0908C30.4074 22.0455 29.4654 20.2168 27.9936 19.013C32.6019 20.2257 36.2297 23.0644 37.4276 24.0908C36.2309 25.1162 32.6068 27.9466 28.0043 29.1606ZM23.8481 18.3142C27.0334 18.3142 29.6248 20.9056 29.6248 24.0908C29.6248 27.276 27.0334 29.8674 23.8481 29.8674C20.6629 29.8674 18.0715 27.276 18.0715 24.0908C18.0715 20.9056 20.6629 18.3142 23.8481 18.3142ZM19.7117 19.0063C18.2348 20.2099 17.2889 22.0414 17.2889 24.0908C17.2889 26.1384 18.233 27.9686 19.7077 29.1724C15.0956 27.9616 11.4671 25.1177 10.2687 24.0908C11.4673 23.0636 15.0982 20.2177 19.7117 19.0063ZM7.4133 13.5159H13.3225C13.5097 13.5159 13.6616 13.3641 13.6616 13.1768V7.26779C13.6616 7.08054 13.5097 6.92871 13.3225 6.92871H7.4133C7.22605 6.92871 7.07422 7.08055 7.07422 7.26779V13.1768C7.07422 13.3641 7.22605 13.5159 7.4133 13.5159ZM7.75238 7.60687H12.9834V12.8378H7.75238V7.60687ZM40.6965 6.92871H34.7873C34.6 6.92871 34.4482 7.08055 34.4482 7.26779V13.1768C34.4482 13.3641 34.6 13.5159 34.7873 13.5159H40.6965C40.8837 13.5159 41.0355 13.3641 41.0355 13.1768V7.26779C41.0355 7.08054 40.8837 6.92871 40.6965 6.92871ZM40.3574 12.8378H35.1264V7.60687H40.3574V12.8378ZM13.3225 34.4107H7.4133C7.22605 34.4107 7.07422 34.5625 7.07422 34.7498V40.6591C7.07422 40.8463 7.22605 40.9982 7.4133 40.9982H13.3225C13.5097 40.9982 13.6616 40.8463 13.6616 40.6591V34.7498C13.6616 34.5625 13.5097 34.4107 13.3225 34.4107ZM12.9834 40.32H7.75238V35.0889H12.9834L12.9834 40.32ZM40.6965 34.4107H34.7873C34.6 34.4107 34.4482 34.5625 34.4482 34.7498V40.6591C34.4482 40.8463 34.6 40.9982 34.7873 40.9982H40.6965C40.8837 40.9982 41.0355 40.8463 41.0355 40.6591V34.7498C41.0355 34.5625 40.8837 34.4107 40.6965 34.4107ZM40.3574 40.32H35.1264V35.0889H40.3574V40.32Z"
                      fill="white"
                    />
                    <path
                      d="M23.6106 15.5316C23.6769 15.5978 23.7635 15.6307 23.8502 15.6307C23.937 15.6307 24.0239 15.5976 24.0901 15.5313L26.391 13.2304C26.5234 13.0979 26.5234 12.8834 26.391 12.7509C26.2586 12.6184 26.0438 12.6184 25.9113 12.7509L23.85 14.8121L21.7838 12.7507C21.6511 12.6179 21.4363 12.6184 21.3041 12.7512C21.1719 12.8836 21.1721 13.0984 21.3046 13.2306L23.6106 15.5316ZM24.0847 32.6501C23.9523 32.5176 23.7378 32.5179 23.6053 32.6504L21.3043 34.9513C21.172 35.0838 21.172 35.2983 21.3043 35.4308C21.4368 35.5633 21.6516 35.5633 21.784 35.4308L23.8454 33.3696L25.9116 35.431C26.0439 35.5634 26.2592 35.5632 26.3913 35.4305C26.5235 35.2981 26.5233 35.0833 26.3908 34.9511L24.0847 32.6501Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <p className="text-[#03A651] text-center font-titillium text-[24px] xs:text-[28px] font-semibold leading-[32px] mt-10">
                  Skip Tracing
                </p>
                <p className="text-black text-center font-poppins text-[16px] font-normal leading-[25px] [font-feature-settings:'liga'_off,'clig'_off] mt-6">
                  We can help locate 'gone away' cases and reduce written-off
                  accounts.
                </p>
              </div>
              <div
                className="w-[270px] max-lg:xs:w-[320px] h-[242px] lg:w-[26.367vw] max-w-[382px] xl:w-[28.281vw] rounded-[16px] border-[3px]  bg-white md:mt-10 lg:mt-0 flex flex-col items-center justify-center relative
                             xs:px-4"
                data-aos="fade-right"
              >
                <div className="w-[80px] h-[80px]  rounded-full  bg-[#03A651] [background-position:299deg] flex items-center justify-center absolute top-[-50px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2_106)">
                      <path
                        d="M10.68 3.06934L5.787 14.5833L18.195 16.0773L16.695 13.4763L15.405 11.2443C18.8478 9.36622 22.8101 8.66491 26.6884 9.24722C30.5667 9.82954 34.1484 11.6636 36.8878 14.4699C39.6272 17.2763 41.3743 20.9012 41.8628 24.7924C42.3514 28.6836 41.5547 32.6279 39.594 36.0243C37.6141 39.458 34.5558 42.1418 30.8941 43.6591C27.2325 45.1764 23.1723 45.4422 19.344 44.4153C15.5146 43.3915 12.1306 41.1316 9.71755 37.9868C7.30454 34.8419 5.99768 30.9882 6 27.0243H3C3.003 31.6473 4.53012 36.1404 7.34488 39.8077C10.1596 43.475 14.105 46.112 18.57 47.3103C27.741 49.7673 37.44 45.7503 42.186 37.5243C44.4954 33.52 45.4198 28.8659 44.8162 24.283C44.2125 19.7001 42.1145 15.4441 38.847 12.1743C35.5799 8.90615 31.3242 6.80941 26.742 6.21034C22.3115 5.63519 17.813 6.48968 13.902 8.64934L10.683 3.06934H10.68ZM24 18.0243V27.0363H15V30.0363H27V18.0243H24Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_106">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <p className="text-[#03A651] text-center font-titillium text-[24px] xs:text-[28px] font-semibold leading-[32px] mt-10">
                  Asset Tracing
                </p>
                <p className="text-black text-center font-poppins text-[16px] font-normal leading-[25px] [font-feature-settings:'liga'_off,'clig'_off] mt-6">
                Debt recovery in Pakistan involves legal procedures, financial analysis, and negotiation to secure debtor assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
