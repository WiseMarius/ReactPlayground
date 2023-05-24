import React from "react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameWasTouched, setNameWasTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailWasTouched, setEmailWasTouched] = useState(false);

  const nameIsValid = name.trim() !== "" && nameWasTouched;
  const emailIsValid = email.includes("@") && emailWasTouched;
  const formIsValid = nameIsValid && emailIsValid;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setName("");
    setEmail("");
    setNameWasTouched(false);
    setEmailWasTouched(false);
  };

  const onNameTouchedHandler = () => {
    setNameWasTouched(true);
  };

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onEmailTouchedHandler = () => {
    setEmailWasTouched(true);
  };

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const nameInputClass =
    !nameIsValid && nameWasTouched ? "form-control invalid" : "form-control";
  const emailInputClass =
    !emailIsValid && emailWasTouched ? "form-control invalid" : "form-control";

  return (
    <form>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onNameChangeHandler}
          onBlur={onNameTouchedHandler}
          value={name}
        />
        {!nameIsValid && nameWasTouched && (
          <p className="error-text">Name is not valid!</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="name"
          onChange={onEmailChangeHandler}
          onBlur={onEmailTouchedHandler}
          value={email}
        />
        {!emailIsValid && emailWasTouched && (
          <p className="error-text">Email is not valid!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={onSubmitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
