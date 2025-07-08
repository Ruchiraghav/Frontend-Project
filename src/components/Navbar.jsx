// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>MyApp</div>
      <div style={linkContainerStyle}>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/feature" style={linkStyle}>Feature</Link>
        <Link to="/user" style={linkStyle}>Users</Link>
        <Link to="/students" style={linkStyle}>Students</Link>
         <Link to="/register" style={linkStyle}>Register</Link>
      </div>
    </nav>
  );
}

const navStyle = {
  background: "#008080",
  padding: "1rem 2rem",
  width: "99vw",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box", 
  margin: 0,
  position: "fixed",     
  top: 0,
  left: 0,
  zIndex: 1000,
};

const logoStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "1.5rem",
};

const linkContainerStyle = {
  display: "flex",
  gap: "2rem",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1rem",
  margin:'1rem'
};

export default Navbar;

