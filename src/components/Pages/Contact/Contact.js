import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleOnBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(email, userName, message);
    console.log(errorMessage)

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email" && !email | !isValidEmail(email)) {
      setErrorMessage("Please provide a valid email address");
    } else if (inputType === "email" && email) {
      setErrorMessage("");
    } else if (inputType === "userName" && !userName) {
      setErrorMessage("Please provide your name");
    } else if (inputType === "userName" && userName){
      setErrorMessage("");
    } else if (inputType === "message" && !message) {
      setErrorMessage("Please provide a message");
    } else if (inputType === "message" && message) {
      setErrorMessage("");
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    alert(
      `Thank you for sending me a message, ${userName}! This form actually isn't sending this message anywhere right now. 🤦 But - you can send me an email with the link in the footer below! 😊`
    );

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="email"
          placeholder="What is your email?"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="text"
          placeholder="What is your name?"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="message"
          placeholder="What would you like to tell me?"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
