import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Footer from "../components/footer";
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
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
      const response = await axios.post("/your-backend-endpoint", formData);
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
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Log In</p>
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
        <button type="submit" className="submit">
          Log In
        </button>
        <p className="signin">
          Don't have an account? <Link to="/signup">Sign up</Link>{" "}
        </p>
      </form>
      <Footer/>
    </>
  );
};

export default LogIn;
