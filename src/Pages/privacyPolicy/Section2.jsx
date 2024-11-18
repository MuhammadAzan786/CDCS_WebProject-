const privacyPolicy = [
  {
    title: "Information We Collect",
    content: "We may collect the following types of information:",
    subsections: [
      {
        title: "Personal Information",
        content:
          "Name, email address, phone number, and other contact details provided through forms on our Website.",
      },
      {
        title: "Non-Personal Information",
        content:
          "Browser type, IP address, operating system, referring URLs, and other technical data collected via cookies or analytics tools.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content:
      "The information we collect may be used for the following purposes:",
    subsections: [
      { content: "To respond to your inquiries or requests." },
      { content: "To provide and improve our debt collection services." },
      { content: "To comply with legal obligations and regulations." },
      {
        content: "To enhance Website security and user experience.",
      },
      {
        content:
          "For analytical purposes to understand Website usage patterns.",
      },
    ],
  },
  {
    title: "Sharing of Information",
    content: "We may share your information with:",
    subsections: [
      {
        content:
          "UAE-based banks and financial institutions as part of our debt collection services.",
      },
      {
        content:
          "Third-party service providers assisting us in website management, analytics, or customer support.",
      },
      {
        content: "Legal or regulatory authorities when required by law.",
      },
      {
        content:
          "We do not sell or lease your personal information to third parties.",
      },
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "Our Website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us analyze traffic, remember your preferences, and improve functionality. By using the Website, you consent to the use of cookies. You can manage your cookie preferences through your browser settings.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet can be guaranteed as 100% secure.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your location, you may have the following rights regarding your personal information:",
    subsections: [
      { content: "Right to access and update your information." },
      { content: "Right to request the deletion of your personal data." },
      { content: "Right to object to or restrict processing." },
      {
        content: "Right to lodge a complaint with a supervisory authority.",
      },
      {
        content:
          "To exercise your rights, please contact us at [Insert Contact Email].",
      },
    ],
  },
  {
    title: "Third-Party Links",
    content:
      "Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external websites. We encourage you to read their privacy policies.",
  },
  {
    title: "Changes to This Policy",
    content:
      'We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting on this page, with the updated "Effective Date." We encourage you to review this policy periodically.',
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at:",
    subsections: [
      { content: "Corporate Debt Collection Services" },
      {
        content:
          "H-1, Athar Street, Main Defence Road, New Lalazaar, Rawalpindi-Pakistan",
      },
      {
        content: "ceo@cdcs.com.pk",
      },
      { content: "+92 300 0345000" },
    ],
  },
];

const Section2 = () => {
  return (
    <div className=" bg-white xs:p-6 md:p-20 lg:p-24 xl:p-28 ">
      {/* div for managing size of the content */}
      <div className="p-0 xl:pr-96">
        {/* ======================Header====================== */}
        <div>
          <h1 className="text-4xl font-medium mb-5">Privacy Policy</h1>
          <p className="mb-10 ">
            Effective Date:{" "}
            {new Intl.DateTimeFormat("en-us").format(new Date())}
          </p>
          <p className="text-gray-700">
            Corporate Debt Collection Services (referred to as &quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;) is committed to protecting the
            privacy of visitors to our website [www.cdcs.com.pk] (the
            &quot;Website&quot;). This Privacy Policy outlines how we collect,
            use, disclose, and safeguard your information when you visit our
            Website. Please read this policy carefully.
          </p>
        </div>
        {/* =======================Content============================= */}
        <div>
          <ol className="list-decimal ml-4">
            {privacyPolicy.map((section, index) => (
              <li key={index} className="font-bold text-2xl mt-10">
                <h2 className="font-medium text-2xl mb-3">{section.title}</h2>
                <p className="font-normal text-[17px] text-gray-700">
                  {section.content}
                </p>
                {section.subsections && section.subsections[0].title && (
                  <ol className="list-[lower-alpha] mt-5 ml-4 ">
                    {section.subsections.map((subsections, index) => (
                      <li key={index} className="text-[18px] mb-5 font-medium">
                        <h2 className="mb-2 "> {subsections.title}</h2>
                        <p className="font-normal text-[16px] text-gray-700">
                          {subsections.content}
                        </p>
                      </li>
                    ))}
                  </ol>
                )}

                {/* =====================if list have only content ============*/}
                {section.subsections && !section.subsections[0].title && (
                  <ol className="list-disc mt-5 ml-4">
                    {section.subsections.map((subsections, index) => (
                      <li key={index} className="text-[18px] font-medium  mb-2">
                        {subsections.content.includes("@") && (
                          <p className="font-normal text-[16px] text-gray-700">
                            Email:{" "}
                            <a
                              href={`mailto:${subsections.content}`}
                              className="text-green-400 hover:text-green-700"
                            >
                              {subsections.content}
                            </a>
                          </p>
                        )}

                        {subsections.content.startsWith("+92") && (
                          <p className="font-normal text-[16px] text-gray-700 ">
                            Phone:{" "}
                            <a
                              href={`tel:${subsections.content}`}
                              className="text-green-400 hover:text-green-700"
                            >
                              {subsections.content}
                            </a>
                          </p>
                        )}
                        {!subsections.content.includes("@") &&
                          !subsections.content.startsWith("+92") && (
                            <p className="font-normal text-[16px] text-gray-700">
                              {subsections.content}
                            </p>
                          )}
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Section2;
