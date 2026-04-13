import React from "react";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragragh";

const disclaimerData = [
    {
        title: "General Information",
        content: "The information provided on this website is for general informational purposes only and is intended to offer an overview of TDI City Kundli, its projects, plans, and related developments. While every effort is made to ensure accuracy and reliability, the content, visuals, specifications, designs, layouts, amenities, and other details displayed are subject to change without prior notice.",
    },
    {
        title: "Project Information & Marketing Material",
        content: "The information provided on this website is for general informational purposes only and is intended to offer an overview of TDI City Kundli, its projects, plans, and related developments. While every effort is made to ensure accuracy and reliability, the content, visuals, specifications, designs, layouts, amenities, and other details displayed are subject to change without prior notice.",
    },
    {
        title: "Regulatory Approvals",
        content: "Project approvals, licenses, and statutory clearances are obtained from relevant authorities as applicable. Interested individuals are advised to independently verify project details, approvals, specifications, and documentation before making any booking or investment decision.",
    },
];

export default function DisclaimerSection() {
    return (
        <section className="py-16 md:py-24 px-4 bg-[#F8F9FA]">
            <div className="max-w-[1140px] mx-auto  flex flex-col gap-10 ">
                {disclaimerData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Heading
                            as="h2"
                            className="text-center text-[#4B5A79] text-xl md:text-2xl mb-4"
                        >
                            {item.title}
                        </Heading>
                        <Paragraph className="text-center text-sm md:text-base leading-relaxed text-[#424242] "> {/* [text-wrap:balance] */}
                            {item.content}
                        </Paragraph>
                    </div>
                ))}
            </div>
        </section>
    );
}
