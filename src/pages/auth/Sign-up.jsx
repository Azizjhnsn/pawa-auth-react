import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    typeOfID: "",
    idNumber: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to your backend endpoint
      const response = await axios.post("/signup-endpoint", formData);
      console.log("Response from backend:", response.data);
      // Optionally, reset the form after successful submission
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        typeOfID: "",
        idNumber: "",
        agreeTerms: false,
      });
      console.log(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register</p>
        <p className="message">
          Signup now and get full access to our app.
        </p>
        <div className="flex">
          <label>
            <input
              required
              placeholder="First Name"
              type="text"
              className="input"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <span></span>
          </label>
          <label>
            <input
              required
              placeholder="Middle Name"
              type="text"
              className="input"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
            <span></span>
          </label>
        </div>
        <label>
          <input
            required
            placeholder="Last Name"
            type="text"
            className="input"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label>
          <input
            required
            placeholder="Email"
            type="email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label>
          <input
            required
            placeholder="Mobile number"
            type="number"
            className="input"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          <span></span>
        </label>
        <div className="flex">
          <Form.Select aria-label="Default select example"
                          required
                          placeholder=""
                          type="text"
                          className="input"
                          name="typeOfID"
                          value={formData.typeOfID}
                          onChange={handleChange}>
            <option>Type Of ID</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <label>
            <input
              required
              placeholder="ID Number"
              type="text"
              className="input"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
            />
            <span></span>
          </label>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <label
              className="form-check-label form-label"
              htmlFor="agreeTerms"
            >
              I Agree to terms and conditions
            </label>
          </div>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
        <p className="signin">
          Already have an account? <a href="/login">Sign in</a>{" "}
        </p>
      </form>
    </>
  );
};

export default Signup;
