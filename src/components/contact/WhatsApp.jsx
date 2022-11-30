import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.css";
const WhatsApp = () => {
  return (
    <div className="container whatsapp__container">
      <ReactWhatsapp className="whatsapp" number="07504660782">
        <BsWhatsapp className="icon"/>
      </ReactWhatsapp>
    </div>
  );
};

export default WhatsApp;
