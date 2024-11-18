import React from "react";

const Section3 = () => {
  return (
    <section>
      <div className="">
        {/* Container */}
        <div className="relative max-w-[1440px] mx-auto lg:px-10 xl:px-24 p-2 md:p-10 md:py-10">
          {/* Upper Section: Title */}
          <div className="p-2 flex flex-col items-center relative mb-10">
            <h1
              className="max-w-[850px] text-[#210F03] text-center text-xl font-Poppins xl:text-[70px] md:text-3xl font-semibold xs:text-2xl lg:leading-[81px] w-full self-center"
              data-aos="fade-up"
            >
              <span className="text-[#03A651]">Terms &</span> Conditions
            </h1>
          </div>
          <div>
            <div
              data-aos="fade-left"
              className="p-2 flex flex-col  md:gap-10 md:items-start items-center lg:gap-22 xl:gap-30"
            >
              <div className="flex flex-col items-center md:items-start gap-3">
                <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                  DEBT COLLECTION SERVICES AGREEMENT
                </h1>
                <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px]  md:text-start">
                  This Debt Collection Services Agreement ("Agreement") is
                  entered into by and between:
                  <ul className="list-disc pl-6">
                    <li>
                      {" "}
                      Corporate Debt Collection Services, a company duly
                      organized and existing under the laws of Pakistan, with
                      its principal place of business at Rawalpindi, Pakistan
                      ("Service Provider"), and
                    </li>
                    <li>
                      {" "}
                      [Client Name], a [Bank/Commercial Entity/Individual] with
                      its principal place of business or residence at [Client
                      Address], UAE ("Client").
                    </li>
                  </ul>
                  Effective Date: [Insert Date]
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start gap-3">
                <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                  RECITALS
                </h1>
                <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px]  md:text-start mb-10">
                  WHEREAS, the Client seeks to engage the Service Provider to
                  perform debt collection services for certain accounts of the
                  Client, on a "no-fee" basis;
                  <br />
                  WHEREAS, the Service Provider has the necessary experience,
                  resources, and expertise to perform such services;
                  <br />
                  NOW, THEREFORE, in consideration of the mutual covenants and
                  promises set forth herein, the parties agree as follows:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-0 relative">
                <div className="sticky top-32 item  mx-auto lg:px-6 xl:px-12 max-md:p-2 md:p-5 hidden md:block">
                  {/* Sidebar with section titles */}
                  <div className="stticky top-10  p-5 bg-gray-200 rounded-md z-10">
                    <ul className="space-y-5">
                      <li>
                        <a
                          href="#section1"
                          className="text-xl text-[#03A651] font-semibold"
                        >
                          1. SCOPE OF SERVICES
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          className="text-xl text-[#03A651] font-semibold"
                        >
                          2. COMPENSATION AND PAYMENT
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          className="text-xl text-[#03A651] font-semibold"
                        >
                          3. CLIENT RESPONSIBILITIES
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section4"
                          className="text-xl text-[#03A651] font-semibold"
                        >
                          4. SERVICE PROVIDER RESPONSIBILITIES
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section5"
                          className="text-xl text-[#03A651] font-semibold"
                        >
                          5. TERM AND TERMINATION
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section6"
                          className="text-xl text-[#03A651] font-semibold"
                        >
                          6. CONFIDENTIALITY AND DATA PROTECTION
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section7"
                          className="text-xl text-[#03A651] font-semibold"
                        >
                          7. INDEMNITY AND LIABILITY
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section8"
                          className="text-xl text-[#03A651] font-semibold"
                        >
                          8. GOVERNING LAW AND DISPUTE RESOLUTION
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section9"
                          className="text-xl text-[#03A651] font-semibold"
                        >
                          9. MISCELLANEOUS
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item max-w-[1440px]  overflow-auto mx-auto lg:px-6 xl:px-12 max-md:p-2 md:p-5">
                {/* 1. SCOPE OF SERVICES */}
                <div
                  id="section1"
                  className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40"
                >
                  <div className="flex flex-col items-center md:items-start gap-3">
                    <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                      1. SCOPE OF SERVICES
                    </h1>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      1.1 Debt Collection Services:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Service Provider agrees to provide debt collection
                      services for the Client’s accounts, which may include, but
                      are not limited to:
                      <ul className="list-disc pl-6">
                        <li>Locating and contacting debtors;</li>
                        <li>Negotiating payment terms with debtors;</li>
                        <li>
                          Collecting outstanding debts through full payments,
                          settlements, or other arrangements;
                        </li>
                        <li>
                          Providing regular reports to the Client on the status
                          of collections.
                        </li>
                      </ul>
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      1.2 Accounts Covered:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Client shall provide a list of accounts to be referred
                      for collection under this Agreement, including the
                      outstanding balance, debtor details, and any other
                      relevant information.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      1.3 No Fees Agreement:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Service Provider will not charge any upfront or fixed
                      fees for its services. The Service Provider’s compensation
                      will be based on a commission percentage (as detailed in
                      Section 2) of the amounts collected from the Client's
                      referred accounts.
                    </p>
                  </div>
                </div>

                {/* 2. COMPENSATION AND PAYMENT */}
                <div
                  id="section2"
                  className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40"
                >
                  <div className="flex flex-col items-center md:items-start gap-3">
                    <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                      2. COMPENSATION AND PAYMENT
                    </h1>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      2.1 Commission:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Service Provider shall be entitled to a commission on
                      any amounts successfully recovered from the referred
                      accounts. The commission will be calculated as
                      [percentage]% of the total amount recovered from debtors.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      2.2 Payment Terms:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The commission will be payable to the Service Provider
                      upon the Client’s receipt of payment from the debtor(s).
                      Payments to the Service Provider will be due within
                      [insert number] days of the Client’s receipt of recovered
                      funds.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      2.3 Currency:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      All payments under this Agreement shall be made in
                      [USD/AED/other agreed currency] or any other mutually
                      agreed-upon currency. If the recovery involves a currency
                      conversion, the exchange rate at the time of payment will
                      apply.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      2.4 Expenses:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Service Provider shall bear its own operational costs
                      and expenses, including but not limited to travel, legal
                      costs, communication, and other expenses incurred in
                      connection with the debt collection process. The Client
                      will not be liable for any such costs unless otherwise
                      agreed upon in writing.
                    </p>
                  </div>
                </div>

                {/* 3. CLIENT RESPONSIBILITIES */}
                <div
                  id="section3"
                  className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40"
                >
                  <div className="flex flex-col items-center md:items-start gap-3">
                    <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                      3. CLIENT RESPONSIBILITIES
                    </h1>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      3.1 Account Information:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Client agrees to provide the Service Provider with
                      accurate and complete information for each referred
                      account, including debtor contact details, outstanding
                      amounts, payment history, and any prior collection
                      attempts.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      3.2 Cooperation:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Client agrees to cooperate fully with the Service
                      Provider, providing any required documents, approvals, or
                      communication necessary to facilitate the debt collection
                      process.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      3.3 Payments:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Client agrees to pay the Service Provider its due
                      commission within the agreed payment term once funds are
                      received from the debtor.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      3.4 Debtor Communication:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Client agrees not to directly contact debtors
                      regarding any referred account(s) without the prior
                      written consent of the Service Provider, unless otherwise
                      agreed.
                    </p>
                  </div>
                </div>

                {/* 4. SERVICE PROVIDER RESPONSIBILITIES */}
                <div
                  id="section4"
                  className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40"
                >
                  <div className="flex flex-col items-center md:items-start gap-3">
                    <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                      4. SERVICE PROVIDER RESPONSIBILITIES
                    </h1>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      4.1 Collection Efforts:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Service Provider agrees to use commercially reasonable
                      efforts to recover the outstanding debts in compliance
                      with all applicable laws and ethical standards. The
                      Service Provider will undertake all collection actions
                      with professionalism and due diligence.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      4.2 Reporting:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Service Provider will provide the Client with regular
                      updates on the status of the debt collection efforts,
                      including amounts collected, any debtor communications,
                      and other relevant activities.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      4.3 Confidentiality:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Service Provider shall treat all information provided
                      by the Client with the highest level of confidentiality
                      and shall not disclose such information to any third
                      party, except as required by law or as necessary to carry
                      out the debt collection process.
                    </p>
                  </div>
                </div>

                {/* 5. TERM AND TERMINATION */}
                <div
                  id="section5"
                  className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40"
                >
                  <div className="flex flex-col items-center md:items-start gap-3">
                    <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                      5. TERM AND TERMINATION
                    </h1>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      5.1 Term:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      This Agreement shall commence on the Effective Date and
                      shall continue in force until terminated by either party.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      5.2 Termination for Convenience:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      Either party may terminate this Agreement at any time by
                      providing [insert number] days’ written notice to the
                      other party.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      5.3 Termination for Cause:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      Either party may terminate this Agreement immediately upon
                      written notice in the event of a material breach of any
                      provision of this Agreement by the other party, if such
                      breach is not cured within [insert number] days after
                      notice of the breach.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      5.4 Effect of Termination:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      Upon termination of this Agreement, the Service Provider
                      shall be entitled to its commission on any amounts
                      collected before the termination date. The Client shall
                      promptly pay any outstanding amounts due to the Service
                      Provider.
                    </p>
                  </div>
                </div>

                {/* 6. CONFIDENTIALITY AND DATA PROTECTION */}
                <div
                  id="section6"
                  className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40"
                >
                  <div className="flex flex-col items-center md:items-start gap-3">
                    <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                      6. CONFIDENTIALITY AND DATA PROTECTION
                    </h1>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      6.1 Confidentiality:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      Both parties agree to keep all information related to this
                      Agreement, including financial and personal data,
                      confidential and not to disclose it to any third party
                      except as necessary to perform obligations under this
                      Agreement or as required by law.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      6.2 Data Protection:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The parties agree to comply with applicable data
                      protection laws and regulations, including the UAE’s Data
                      Protection Law and Pakistan’s relevant privacy laws. The
                      Service Provider shall handle all personal data provided
                      by the Client in accordance with such laws.
                    </p>
                  </div>
                </div>

                {/* 7. INDEMNITY AND LIABILITY */}
                <div
                  id="section7"
                  className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40"
                >
                  <div className="flex flex-col items-center md:items-start gap-3">
                    <h1
                      className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start
    "
                    >
                      7. INDEMNITY AND LIABILITY
                    </h1>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      7.1 Indemnification:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Client agrees to indemnify and hold harmless the
                      Service Provider against any claims, damages, or
                      liabilities arising from the Client’s failure to provide
                      accurate account information or from the Client’s actions
                      or omissions that violate this Agreement.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      7.2 Limitation of Liability:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      The Service Provider’s liability shall be limited to the
                      amount of commission earned from the accounts involved in
                      the specific claim. The Service Provider will not be
                      liable for any indirect, consequential, or punitive
                      damages arising from the collection process.
                    </p>
                  </div>
                </div>

                {/* 8. GOVERNING LAW AND DISPUTE RESOLUTION */}
                <div
                  id="section8"
                  className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40"
                >
                  <div className="flex flex-col items-center md:items-start gap-3">
                    <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                      8. GOVERNING LAW AND DISPUTE RESOLUTION
                    </h1>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      8.1 Governing Law:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      This Agreement shall be governed by and construed in
                      accordance with the laws of [insert jurisdiction], without
                      regard to its conflict of law principles.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      8.2 Dispute Resolution:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      Any dispute arising out of or relating to this Agreement
                      shall be resolved through [insert method of dispute
                      resolution, e.g., arbitration or mediation] in [insert
                      location], and the decision shall be binding upon both
                      parties.
                    </p>
                  </div>
                </div>

                {/* 9. MISCELLANEOUS */}
                <div
                  id="section9"
                  className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40"
                >
                  <div className="flex flex-col items-center md:items-start gap-3">
                    <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                      9. MISCELLANEOUS
                    </h1>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      9.1 Entire Agreement:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      This Agreement constitutes the entire agreement between
                      the parties with respect to the subject matter hereof and
                      supersedes all prior and contemporaneous agreements,
                      understandings, and communications, whether oral or
                      written, between the parties.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      9.2 Severability:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      If any provision of this Agreement is found to be invalid
                      or unenforceable, the remaining provisions of this
                      Agreement shall remain in full force and effect.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      9.3 Waiver:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      No waiver of any provision of this Agreement shall be
                      deemed a waiver of any other provision or of any
                      subsequent breach of the same or any other provision.
                    </p>
                    <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">
                      9.4 Force Majeure:
                    </h2>
                    <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                      Neither party shall be liable for any delay or failure in
                      performance under this Agreement due to circumstances
                      beyond its reasonable control, including but not limited
                      to acts of God, war, terrorism, labor disputes, and
                      government actions.
                    </p>
                  </div>
                </div>

                {/* Continue with similar blocks for sections 5-9 */}
                {/* ... */}
              </div>
            </div>
          </div>

          <div className="p-2 mt-10 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40">
            <div className="flex flex-col items-center md:items-start gap-3">
              <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                IN WITNESS WHEREOF, the parties have executed this Agreement as
                of the Effective Date.
              </h1>
              <h2 className="font-poppins text-[18px] font-semibold  md:text-start">
                Client:
              </h2>
              <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                By: _________________________ <br />
                Name: _______________________
                <br />
                Title: ________________________
                <br />
                Date: ________________________
                <br />
              </p>
              <h2 className="font-poppins text-[18px] font-semibold  md:text-start">
                Service Provider:
              </h2>
              <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] md:text-start">
                Corporate Debt Collection Services
                <br />
                By: _________________________
                <br />
                Name: _______________________
                <br />
                Title: ________________________
                <br />
                Date: ________________________
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    //     <div>
    //     <div  data-aos="fade-left" className="p-2 flex flex-col  md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40">
    //   <div className="flex flex-col items-center md:items-start gap-3">
    //     <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" >
    //     DEBT COLLECTION SERVICES AGREEMENT
    //     </h1>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //     This Debt Collection Services Agreement ("Agreement") is entered into by and between:
    //       <ul className="list-disc pl-6">
    //         <li>•	Corporate Debt Collection Services, a company duly organized and existing under the laws of Pakistan, with its principal place of business at Rawalpindi, Pakistan ("Service Provider"), and</li>
    //         <li>•	[Client Name], a [Bank/Commercial Entity/Individual] with its principal place of business or residence at [Client Address], UAE ("Client").</li>
    //       </ul>
    //       Effective Date: [Insert Date]
    //     </p>

    //   </div>
    //   <div className="flex flex-col items-center md:items-start gap-3">
    //     <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" >
    //     RECITALS
    //     </h1>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //     WHEREAS, the Client seeks to engage the Service Provider to perform debt collection services for certain accounts of the Client, on a "no-fee" basis;
    //     <br/>
    //     WHEREAS, the Service Provider has the necessary experience, resources, and expertise to perform such services;
    //     <br/>
    // NOW, THEREFORE, in consideration of the mutual covenants and promises set forth herein, the parties agree as follows:
    // ________________________________________

    //     </p>

    //   </div>

    // </div>

    //     <div className="grid grid-cols-2">

    //       <div className="p-10 relative">
    //         <div className="sticky top-32 item max-w-[1440px] mx-auto lg:px-6 xl:px-12 max-md:p-2 md:p-5" >
    //               {/* Sidebar with section titles */}
    //       <div className="stticky top-10  p-5 bg-gray-200 rounded-md z-10">
    //         <ul className="space-y-5">
    //           <li>
    //             <a href="#section1" className="text-xl text-[#03A651] font-semibold">1. SCOPE OF SERVICES</a>
    //           </li>
    //           <li>
    //             <a href="#section2" className="text-xl text-[#03A651] font-semibold">2. COMPENSATION AND PAYMENT</a>
    //           </li>
    //           <li>
    //             <a href="#section3" className="text-xl text-[#03A651] font-semibold">3. CLIENT RESPONSIBILITIES</a>
    //           </li>
    //           <li>
    //             <a href="#section4" className="text-xl text-[#03A651] font-semibold">4. SERVICE PROVIDER RESPONSIBILITIES</a>
    //           </li>
    //           <li>
    //             <a href="#section5" className="text-xl text-[#03A651] font-semibold">5. TERM AND TERMINATION</a>
    //           </li>
    //           <li>
    //             <a href="#section6" className="text-xl text-[#03A651] font-semibold">6. CONFIDENTIALITY AND DATA PROTECTION</a>
    //           </li>
    //           <li>
    //             <a href="#section7" className="text-xl text-[#03A651] font-semibold">7. INDEMNITY AND LIABILITY</a>
    //           </li>
    //           <li>
    //             <a href="#section8" className="text-xl text-[#03A651] font-semibold">8. GOVERNING LAW AND DISPUTE RESOLUTION</a>
    //           </li>
    //           <li>
    //             <a href="#section9" className="text-xl text-[#03A651] font-semibold">9. MISCELLANEOUS</a>
    //           </li>
    //         </ul>
    //       </div>
    //           </div>

    //       </div>
    //       <div className="item max-w-[1440px]  overflow-auto mx-auto lg:px-6 xl:px-12 max-md:p-2 md:p-5">

    // {/* 1. SCOPE OF SERVICES */}
    // <div id="section1" data-aos="fade-left" className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40">
    //   <div className="flex flex-col items-center md:items-start gap-3">
    //     <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" >
    //       1. SCOPE OF SERVICES
    //     </h1>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">1.1 Debt Collection Services:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Service Provider agrees to provide debt collection services for the Client’s accounts, which may include, but are not limited to:
    //       <ul className="list-disc pl-6">
    //         <li>Locating and contacting debtors;</li>
    //         <li>Negotiating payment terms with debtors;</li>
    //         <li>Collecting outstanding debts through full payments, settlements, or other arrangements;</li>
    //         <li>Providing regular reports to the Client on the status of collections.</li>
    //       </ul>
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">1.2 Accounts Covered:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Client shall provide a list of accounts to be referred for collection under this Agreement, including the outstanding balance, debtor details, and any other relevant information.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">1.3 No Fees Agreement:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Service Provider will not charge any upfront or fixed fees for its services. The Service Provider’s compensation will be based on a commission percentage (as detailed in Section 2) of the amounts collected from the Client's referred accounts.
    //     </p>
    //   </div>
    // </div>

    // {/* 2. COMPENSATION AND PAYMENT */}
    // <div id="section2" data-aos="fade-left"  className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40">
    //   <div className="flex flex-col items-center md:items-start gap-3">
    //     <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" >
    //       2. COMPENSATION AND PAYMENT
    //     </h1>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">2.1 Commission:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Service Provider shall be entitled to a commission on any amounts successfully recovered from the referred accounts. The commission will be calculated as [percentage]% of the total amount recovered from debtors.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">2.2 Payment Terms:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The commission will be payable to the Service Provider upon the Client’s receipt of payment from the debtor(s). Payments to the Service Provider will be due within [insert number] days of the Client’s receipt of recovered funds.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">2.3 Currency:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       All payments under this Agreement shall be made in [USD/AED/other agreed currency] or any other mutually agreed-upon currency. If the recovery involves a currency conversion, the exchange rate at the time of payment will apply.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">2.4 Expenses:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Service Provider shall bear its own operational costs and expenses, including but not limited to travel, legal costs, communication, and other expenses incurred in connection with the debt collection process. The Client will not be liable for any such costs unless otherwise agreed upon in writing.
    //     </p>
    //   </div>
    // </div>

    // {/* 3. CLIENT RESPONSIBILITIES */}
    // <div id="section3" data-aos="fade-left"className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40">
    //   <div className="flex flex-col items-center md:items-start gap-3">
    //     <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" >
    //       3. CLIENT RESPONSIBILITIES
    //     </h1>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">3.1 Account Information:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Client agrees to provide the Service Provider with accurate and complete information for each referred account, including debtor contact details, outstanding amounts, payment history, and any prior collection attempts.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">3.2 Cooperation:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Client agrees to cooperate fully with the Service Provider, providing any required documents, approvals, or communication necessary to facilitate the debt collection process.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">3.3 Payments:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Client agrees to pay the Service Provider its due commission within the agreed payment term once funds are received from the debtor.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">3.4 Debtor Communication:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Client agrees not to directly contact debtors regarding any referred account(s) without the prior written consent of the Service Provider, unless otherwise agreed.
    //     </p>
    //   </div>
    // </div>

    //          {/* 4. SERVICE PROVIDER RESPONSIBILITIES */}
    //          <div id="section4" data-aos="fade-left" className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40">
    //   <div className="flex flex-col items-center md:items-start gap-3">
    //     <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" >
    //       4. SERVICE PROVIDER RESPONSIBILITIES
    //     </h1>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">4.1 Collection Efforts:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Service Provider agrees to use commercially reasonable efforts to recover the outstanding debts in compliance with all applicable laws and ethical standards. The Service Provider will undertake all collection actions with professionalism and due diligence.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">4.2 Reporting:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Service Provider will provide the Client with regular updates on the status of the debt collection efforts, including amounts collected, any debtor communications, and other relevant activities.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">4.3 Confidentiality:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Service Provider shall treat all information provided by the Client with the highest level of confidentiality and shall not disclose such information to any third party, except as required by law or as necessary to carry out the debt collection process.
    //     </p>
    //   </div>
    // </div>

    // {/* 5. TERM AND TERMINATION */}
    // <div id="section5" data-aos="fade-left"className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40">
    //   <div className="flex flex-col items-center md:items-start gap-3">
    //     <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" >
    //       5. TERM AND TERMINATION
    //     </h1>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">5.1 Term:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       This Agreement shall commence on the Effective Date and shall continue in force until terminated by either party.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">5.2 Termination for Convenience:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       Either party may terminate this Agreement at any time by providing [insert number] days’ written notice to the other party.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">5.3 Termination for Cause:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       Either party may terminate this Agreement immediately upon written notice in the event of a material breach of any provision of this Agreement by the other party, if such breach is not cured within [insert number] days after notice of the breach.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">5.4 Effect of Termination:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       Upon termination of this Agreement, the Service Provider shall be entitled to its commission on any amounts collected before the termination date. The Client shall promptly pay any outstanding amounts due to the Service Provider.
    //     </p>
    //   </div>
    // </div>

    // {/* 6. CONFIDENTIALITY AND DATA PROTECTION */}
    // <div id="section6" data-aos="fade-left" className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40">
    //   <div className="flex flex-col items-center md:items-start gap-3">
    //     <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" >
    //       6. CONFIDENTIALITY AND DATA PROTECTION
    //     </h1>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">6.1 Confidentiality:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       Both parties agree to keep all information related to this Agreement, including financial and personal data, confidential and not to disclose it to any third party except as necessary to perform obligations under this Agreement or as required by law.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">6.2 Data Protection:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The parties agree to comply with applicable data protection laws and regulations, including the UAE’s Data Protection Law and Pakistan’s relevant privacy laws. The Service Provider shall handle all personal data provided by the Client in accordance with such laws.
    //     </p>
    //   </div>
    // </div>

    // {/* 7. INDEMNITY AND LIABILITY */}
    // <div id="section7" data-aos="fade-left" className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40">
    //   <div className="flex flex-col items-center md:items-start gap-3">
    //     <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start
    //     ">
    //       7. INDEMNITY AND LIABILITY
    //     </h1>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">7.1 Indemnification:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Client agrees to indemnify and hold harmless the Service Provider against any claims, damages, or liabilities arising from the Client’s failure to provide accurate account information or from the Client’s actions or omissions that violate this Agreement.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">7.2 Limitation of Liability:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       The Service Provider’s liability shall be limited to the amount of commission earned from the accounts involved in the specific claim. The Service Provider will not be liable for any indirect, consequential, or punitive damages arising from the collection process.
    //     </p>
    //   </div>
    // </div>

    // {/* 8. GOVERNING LAW AND DISPUTE RESOLUTION */}
    // <div id="section8" data-aos="fade-left" className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40">
    //   <div className="flex flex-col items-center md:items-start gap-3">
    //     <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" >
    //       8. GOVERNING LAW AND DISPUTE RESOLUTION
    //     </h1>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">8.1 Governing Law:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       This Agreement shall be governed by and construed in accordance with the laws of [insert jurisdiction], without regard to its conflict of law principles.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">8.2 Dispute Resolution:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       Any dispute arising out of or relating to this Agreement shall be resolved through [insert method of dispute resolution, e.g., arbitration or mediation] in [insert location], and the decision shall be binding upon both parties.
    //     </p>
    //   </div>
    // </div>

    // {/* 9. MISCELLANEOUS */}
    // <div  id="section9" data-aos="fade-left" className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center lg:gap-32 xl:gap-40">
    //   <div className="flex flex-col items-center md:items-start gap-3">
    //     <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
    //       9. MISCELLANEOUS
    //     </h1>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start" >9.1 Entire Agreement:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior and contemporaneous agreements, understandings, and communications, whether oral or written, between the parties.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">9.2 Severability:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions of this Agreement shall remain in full force and effect.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">9.3 Waiver:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       No waiver of any provision of this Agreement shall be deemed a waiver of any other provision or of any subsequent breach of the same or any other provision.
    //     </p>
    //     <h2 className="font-poppins text-[18px] font-semibold text-[#03A651] md:text-start">9.4 Force Majeure:</h2>
    //     <p className="text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
    //       Neither party shall be liable for any delay or failure in performance under this Agreement due to circumstances beyond its reasonable control, including but not limited to acts of God, war, terrorism, labor disputes, and government actions.
    //     </p>
    //   </div>
    // </div>

    // {/* Continue with similar blocks for sections 5-9 */}
    // {/* ... */}
    // </div>

    //     </div>
    //   </div>
  );
};

export default Section3;
