import React from "react";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragragh"; // Preserving typo for exact match with file

const privacyData = [
    {
        title: "Privacy Policy",
        content: "At TDI City Kundli, we are committed to respecting and protecting your privacy and ensuring that any personal information you share with us is handled responsibly, transparently, and securely. This Privacy Policy explains how we collect, use, store, process, and safeguard the information obtained through our website and related communication channels. By accessing or using our website, you agree to the terms outlined in this policy.",
    },
    {
        title: "Information We Collect",
        content: "When you visit our website, submit an enquiry, register your interest, or communicate with us through digital platforms, we may collect personal information such as your name, phone number, email address, residential location, and any other details voluntarily provided by you. In addition to personal information, we may automatically collect certain technical data including your IP address, browser type, device information, pages visited, and browsing behavior through cookies and similar tracking technologies. This information helps us understand user preferences, improve website functionality, and enhance overall user experience.",
    },
    {
        title: "Purpose Of Data Collection & Use",
        content: "The information collected is primarily used to respond to your queries, provide project-related details, schedule site visits, process service requests, and share updates regarding our residential, commercial, or township developments. We may also use your contact details to send promotional communications, newsletters, or information about upcoming launches and offers that may be relevant to your interests. You may opt out of such communications at any time by contacting us or using the unsubscribe options provided in our messages.",
    },
    {
        title: "Data Sharing & Disclosure",
        content: "TDI City Kundli does not sell, rent, or trade your personal information to third parties. However, we may share your information with authorized employees, internal teams, affiliated entities, or trusted service providers who assist us in operating our website, managing customer relationships, marketing communications, or providing technical support. Such sharing is strictly limited to necessary purposes and is carried out under confidentiality obligations. We may also disclose information if required to comply with applicable laws, regulatory requirements, or legal processes.",
    },
    {
        title: "Data Security Measures",
        content: "We implement appropriate administrative, technical, and security measures to safeguard your personal data against unauthorized access, misuse, alteration, or disclosure. While we strive to use commercially acceptable means to protect your information, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
    },
    {
        title: "Third-Party Links",
        content: "Our website may contain links to third-party websites for your convenience or additional information. Please note that we are not responsible for the privacy practices, policies, or content of such external websites, and users are encouraged to review the privacy policies of those sites independently.",
    },
    {
        title: "User Rights & Choices",
        content: "You have the right to request access to the personal information we hold about you, seek correction of inaccurate details, request deletion of your data subject to legal obligations, or withdraw consent for marketing communications. Any such requests can be made by contacting us through the details provided on our website.",
    },
    {
        title: "Policy Updates",
        content: "TDI City Kundli reserves the right to update or modify this Privacy Policy at any time to reflect changes in business practices, legal requirements, or technological advancements. Any updates will be posted on this page, and continued use of the website after such changes constitutes acceptance of the revised policy.",
    },
    {
        title: "Contact Information",
        content: "If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, you may contact TDI Infrastructure / TDI City Kundli through the official contact details provided on our website.",
    },
];

export default function PrivacyPolicySection() {
    return (
        <section className="py-16 md:py-24 px-4 bg-[#F8F9FA]">
            <div className="max-w-[1140px] mx-auto flex flex-col gap-10 md:gap-14">
                {privacyData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Heading
                            as="h2"
                            className="text-center text-[#4B5A79] text-xl md:text-2xl mb-4"
                        >
                            {item.title}
                        </Heading>
                        <Paragraph className="text-center max-w-4xl text-sm md:text-[15px] leading-relaxed text-gray-600/90 [text-wrap:balance]">
                            {item.content}
                        </Paragraph>
                    </div>
                ))}
            </div>
        </section>
    );
}
