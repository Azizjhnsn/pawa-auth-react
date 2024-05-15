import React, { useState } from 'react';
import axios from 'axios';

function OTP() {
  const [otp, setOTP] = useState(['', '', '', '']);

  const handleChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const enteredOTP = otp.join('');
      // Send the OTP to your backend endpoint
      const response = await axios.post('/otp-endpoint', { otp: enteredOTP });
      console.log('Response from backend:', response.data);
      // Optionally, reset the OTP input fields after successful submission
      setOTP(['', '', '', '']);
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <>
      <form className="otp-Form" onSubmit={handleSubmit}>
        <span className="mainHeading">Enter OTP</span>
        <p className="otpSubheading">We have sent a verification code to your mobile number</p>
        <div className="inputContainer">
          {otp.map((value, index) => (
            <input
              key={index}
              required
              maxLength="1"
              type="text"
              className="otp-input"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        <button className="verifyButton" type="submit">
          Verify
        </button>
        <p className="resendNote">
          Didn't receive the code? <button className="resendBtn">Resend Code</button>
        </p>
      </form>
    </>
  );
}

export default OTP;
