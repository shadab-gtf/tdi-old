import React from "react";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragragh";

const termsData = [
    {
        title: "Overview",
        content: "These Terms & Conditions govern your access to and use of the TDI City Kundli website. By visiting or using this website, you agree to comply with these terms. If you do not agree, you should refrain from using the website.",
    },
    {
        title: "Purpose Of The Website",
        content: "This website is intended to provide general information about TDI City Kundli, its residential, commercial, and institutional developments, and related services. The content is for informational and marketing purposes only.",
    },
    {
        title: "Use Of Content",
        content: "All materials on this website, including text, images, graphics, logos, layouts, and design elements, are the intellectual property of TDI Infrastructure or its affiliates. You may not copy, reproduce, distribute, modify, or use any content without prior written permission.",
    },
    {
        title: "Third-Party Links",
        content: "The website may contain links to external websites for convenience. TDI Infrastructure does not control or endorse such websites and is not responsible for their content or practices.",
    },
    {
        title: "Limitation Of Liability",
        content: "TDI Infrastructure shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.",
    },
    {
        title: "Revisions",
        content: "We reserve the right to update, modify, or revise these Terms & Conditions at any time without prior notice. Continued use of the website after changes are posted constitutes acceptance of the updated terms.",
    },
];

export default function TermsSection() {
    return (
        <section className="py-16 md:py-24 px-4 bg-[#F8F9FA]">
            <div className="max-w-[1140px] mx-auto flex flex-col gap-10 ">
                {termsData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Heading
                            as="h2"
                            className="text-center text-[#4B5A79] text-xl md:text-2xl mb-4"
                        >
                            {item.title}
                        </Heading>
                        <Paragraph className="text-center text-sm md:text-base leading-relaxed text-[#424242]">
                            {item.content}
                        </Paragraph>
                    </div>
                ))}
            </div>
        </section>
    );
}
