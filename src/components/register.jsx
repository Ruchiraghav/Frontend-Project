import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/authservice";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(formData);

    if (result.token) {
      localStorage.setItem("token", result.token);
      alert("Registered and logged in!");
      navigate("/home");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <br />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
