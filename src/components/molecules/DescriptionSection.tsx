import React from "react";
import { FaCakeCandles } from "react-icons/fa6";

interface DescriptionSectionProps {
    title: string;
    description: string;
}

const DescriptionSection:React.FC<DescriptionSectionProps> = ({title, description}) => {
    return(
        <section className="bg-gradient-to-r from-[#11bc9d] to-[#37e6a5] p-10 w-[90%] rounded-md">
                 <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <h1 style={{ color: "rgb(154 86 159)"}} className="title text-center">{title}</h1>
                    <FaCakeCandles size={60} color="rgb(154 86 159)" />
                 </div>
                  <h2 className="subtitle">{description}</h2>
        </section>
    )
}

export default DescriptionSection;
