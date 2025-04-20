import React from "react";
import "./WhatsAppButton.css";
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
    <div className="whats-btn-container">
      <button className="whatsapp-button" type="button" onClick={functionProp}>
        <span>{text}</span><FaWhatsapp className="whatsapp-icon" size={"14px" }  color="white" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
