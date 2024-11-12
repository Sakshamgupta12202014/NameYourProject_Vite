import "./SignUp.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  signup_image from "./signup_image.webp"

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    let newErrors = { ...errors };

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'name' && !value.trim()) {
      newErrors.name = "Name is required";
    } else {
      delete newErrors.name;
    }

    if (name === 'email' && !value.includes('@')) {
      newErrors.email = "Valid email required";
    } else {
      delete newErrors.email;
    }

    if (name === 'password' && value.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else {
      delete newErrors.password;
    }

    if (name === 'confirmPassword' && value !== formData.password) {
      newErrors.confirmPass = "Password does not match";
    } else {
      delete newErrors.confirmPass;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Submitted data: ", formData);
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="sign-up-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
             {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
            {errors.confirmPass && <p style={{ color: 'red' }}>{errors.confirmPass}</p>}
          </div>
          <button type="submit" className="sign-up-btn">
            Sign Up
          </button>
        </form>
        <div className="sign-in-link">
          <p>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>

      {/* <div className="sign-in-image">
        <img src={signup_image} className="form-image1"/>
      </div> */}
    </div>
  );
}

export default SignUp;
