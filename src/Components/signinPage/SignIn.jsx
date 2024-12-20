import "./SignIn.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import signin_image from "./signin_image.png"

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    let newErrors = { ...errors };
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // if (name === 'name' && !value.trim()) {
    //   newErrors.name = "Name is required";
    // } else {
    //   delete newErrors.name;
    // }

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

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await fetch("http://localhost:5000/signin", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData), // Convert formData to JSON string
    //   });

    //   const data = await response.json(); // Parse the JSON from the response

    //   if (response.status === 200) {
    //     setMessage(data.message); // If response is OK, show success message
    //     navigate("/");
    //   } else {
    //     setMessage(data.message || "Sign-in failed"); // Handle error responses
    //   }
    // } catch (error) {
    //   setMessage("An error occurred while signing in."); // Handle network errors or other issues
    // }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="sign-in-form">
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

          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>
        <div className="sign-up-link">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>

      {/* <div className="sign-in-image">
        <img
          src={signin_image}
          className="form-image"
        />
      </div> */}
    </div>
  );
}

export default SignIn;
