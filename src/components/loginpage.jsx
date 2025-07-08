import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authservice";

export default function Loginpage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData);

    if (result.token) {
      localStorage.setItem("token", result.token);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>Login Form</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            name="email"
            placeholder="Email or Phone"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
}

// Full page style
const pageStyle = {
  height: "100vh",
  width: "100vw",
  backgroundColor: " rgba(2, 119, 108, 0.1)", // full teal background
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 0,
};

// Card box style
const formContainerStyle = {
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
  minWidth: "300px",
};

// Heading style
const titleStyle = {
  marginBottom: "1rem",
  color: "#00695c",
};

// Form layout
const formStyle = {
  display: "flex",
  flexDirection: "column",
};

// Input boxes
const inputStyle = {
  margin: "0.5rem 0",
  padding: "0.75rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

// Submit button
const buttonStyle = {
  marginTop: "1rem",
  padding: "0.75rem",
  backgroundColor: "#00b894",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1rem",
};


