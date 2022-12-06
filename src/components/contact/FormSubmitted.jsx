import React from "react";

const FormSubmitted = (props) => {
    const {clickHandler} = props;
    console.log(clickHandler)
   
  return (
    <div className="container message-container">
        <div className="message-border">
      <h2 className="message-header">Thanks</h2>
      <h5 className="message-content">Thanks for sending a message over. I will be in touch shortly!</h5>
      <button onClick={clickHandler} className="btn btn-primary"> Close Message</button>
      </div>
    </div>
  );
};

export default FormSubmitted;
