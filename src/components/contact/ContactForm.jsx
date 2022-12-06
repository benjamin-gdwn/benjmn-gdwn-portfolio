import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const ContactForm = (props) => {
  const form = useRef();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [formIsValid, setFormIsValid] = useState(null);
  const [nameBlurred, setNameBlurred] = useState(true);
  const [emailBlurred, setEmailBlurred] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_jrb55zp";
    const templateId = "template_2rrglnm";
    const userId = "zWw61X03ypouWhVqD";
    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    props.clickHandler();
    setEmailInput("");
    setNameInput("");
    setMessageInput("");
  };

  const nameBlurHandler = (e) => {
    setNameInput(e.target.value);
    if (nameInput.trim().length < 2) {
      setNameBlurred(false);
    } else {
      setNameBlurred(true);
    }
  };
  const emailBlurHandler = (e) => {
    setEmailInput(e.target.value);
    if (!emailInput.includes("@")) {
      setEmailBlurred(false);
    } else {
      setEmailBlurred(true);
    }
  };
  const nameChangeHandler = (e) => {
    setNameInput(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmailInput(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessageInput(e.target.value);
    if (nameBlurred && emailBlurred) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };
  const emailMessage = <p className="warning">Please enter a valid email address</p>;
  const nameMessage = <p className="warning">Please enter a name</p>;

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        type="text"
        name="user_name"
        value={nameInput}
      />
      {!nameBlurred && nameMessage}
      <label>Email</label>
      <input
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        type="email"
        name="user_email"
        value={emailInput}
      />
      {!emailBlurred && emailMessage}

      <label>Message</label>
      <textarea
        onChange={messageChangeHandler}
        name="message"
        value={messageInput}
      />
      {formIsValid && (
        <input className="btn btn-primary center" type="submit" value="Send" />
      )}
    </form>
  );
};

export default ContactForm;
