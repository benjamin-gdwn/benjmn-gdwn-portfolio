import { useState } from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import FormSubmitted from "./FormSubmitted";
import WhatsApp from "./WhatsApp";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const clickHandler = (e) => {
    setFormSubmitted((prevFormSubmitted) => !prevFormSubmitted);
    console.log(formSubmitted);
  };

  return (
    <section id="contact" className="contact">
      <h5>Lets Get Social</h5>
      <h2>Contact Me</h2>
      {!formSubmitted && (
        <ContactForm
        clickHandler={clickHandler}
          
        />
      )}
      {formSubmitted && <FormSubmitted clickHandler={clickHandler} />}
      <h5>Alternatively</h5>
      <h3>Send a WhatsApp</h3>
      <WhatsApp />
    </section>
  );
};

export default Contact;
