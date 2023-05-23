import React from "react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameWasTouched, setNameWasTouched] = useState(false);

  const nameIsValid = name.trim() !== "" && nameWasTouched;
  const formIsValid = nameIsValid;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setName("");
    setNameWasTouched(false);
  };

  const onNameTouchedHandler = () => {
    setNameWasTouched(true);
  };

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const nameInputClass =
    !nameIsValid && nameWasTouched ? "form-control invalid" : "form-control";

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
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={onSubmitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
