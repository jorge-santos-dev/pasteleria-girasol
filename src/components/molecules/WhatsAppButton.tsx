import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsppButtonProps {
  functionProp?: any;
  text: string;
}

const WhatsAppButton: React.FC<WhatsppButtonProps> = ({
  text,
  functionProp,
}) => {
  return (
      <button 
        className="bg-[#73e63e] hover:bg-[#5bb432] text-white font-bold py-2.5 px-6 text-sm w-[200px] border border-opacity-20 border-[#732088] border-b-[5px] transform -translate-y-[3px] transition-all duration-200 ease-linear rounded-2xl cursor-pointer flex justify-center items-center hover:text-lg hover:border-[#3b7a1d]" 
        type="button" 
        onClick={functionProp}
      >
        <span>{text}</span>
        <FaWhatsapp className="ml-1" size={"14px"} color="white" />
      </button>
  );
};

export default WhatsAppButton;
