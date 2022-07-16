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

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!isValidEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email" && !email | !isValidEmail(email)) {
      setErrorMessage("Please provide a valid email address");
    } else {
      setErrorMessage("");
    }

    if (inputType === "userName" && !userName) {
      setErrorMessage("Please provide your name");
    } else {
      setErrorMessage("");
    }

    if (inputType === "message" && !message) {
      setErrorMessage("Please provide a message");
    } else {
      setErrorMessage("");
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    alert(
      `Thank you for sending me a message, ${userName}! I'll get back to you via email asap! 😊`
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
          type="text"
          placeholder="What is your name?"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
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
