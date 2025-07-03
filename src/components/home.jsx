import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Student Portal!</h1>
      <h3 style={styles.subtitle}>Your hub for student management.</h3>

      <p style={styles.description}>
        Please log in or register to access the full features of the application,
        including managing student records.
      </p>

      <div>
        <Link to="/login" style={styles.button}>Login</Link>
        <Link to="/register" style={{ ...styles.button, marginLeft: '10px' }}>Register</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#212121",
    minHeight: "calc(100vh - 60px)",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#f0f0f0',
  },
  title: {
    fontSize: "3em",
    fontWeight: "bold",
    marginBottom: "15px",
    color: '#61dafb',
  },
  subtitle: {
    fontSize: "1.5em",
    color: "#ccc",
    marginBottom: "30px",
  },
  description: {
    fontSize: "1.1em",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "0 auto 40px auto",
    color: '#e0e0e0',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#61dafb',
    color: '#212121',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
};

export default Home;

