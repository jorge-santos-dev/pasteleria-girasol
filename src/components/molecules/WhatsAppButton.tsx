import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { enviarMensajeWhatsApp } from "../../utils/whatsapp";

interface WhatsAppButtonProps {
  nombreProducto: string;
  precio: number;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  nombreProducto,
  precio,
}) => {
  return (
    <motion.button
      className="bg-[#73e63e] text-white font-bold py-2.5 text-sm w-[160px] border border-opacity-20 border-[#732088] border-b-[5px] rounded-2xl cursor-pointer flex justify-center items-center hover:text-[16px]"
      initial={{ y: 0 }}
      whileHover={{
        backgroundColor: "#5bb432",
        scale: 1.05,
        y: -3,
        borderColor: "#3b7a1d",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      onClick={() => enviarMensajeWhatsApp(nombreProducto, precio)}
    >
      <span className="mr-1">Whatsapp</span>
      <FaWhatsapp size={"14px"} color="white" />
    </motion.button>
  );
};

export default WhatsAppButton;
