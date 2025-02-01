import { useState } from "react";
import "./App.css";
import InputComponent from "./component/InputComponent";

function App() {
  const [userInput, setUserInput] = useState({
    fullName: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (userInput.fullName.trim().length < 10) {
      newErrors.fullName = "Please enter a longer value";
    }

    if (userInput.phone.length !== 10 || isNaN(userInput.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (userInput.password.length < 8) {
      newErrors.password = "Please enter a password with at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid", userInput);
    } else {
      console.log("Form has errors");
    }
  }

  function handleTextChange(e) {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="formValidate-container">
      <div className="heading">
        <h1>Form Validation</h1>
      </div>
      <div className="form-contain">
        <form onSubmit={handleSubmit}>
          <InputComponent
            type="text"
            name="fullName"
            onChange={handleTextChange}
            error={errors.fullName}
          />
          <InputComponent
            type="text"
            name="phone"
            onChange={handleTextChange}
            error={errors.phone}
          />
          <InputComponent
            type="password"
            name="password"
            onChange={handleTextChange}
            error={errors.password}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default App;
