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
    setFormData({...formData, [e.target.name]: e.target.value});
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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

