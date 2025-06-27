import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Axios error:", error));
  }, []);

  return (
    <div>
      <h1>Students List</h1>

      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/feature">FEATURE</Link>
        </li>
        <li>
          <Link to="/user">ABOUT</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;

function Home() {
  return (
    <div>
      <h2>Welcome to Home</h2>
    </div>
  );
}

function Feature() {
  return (
    <div>
      <h2>Here are some Features</h2>
    </div>
  );
}

function User() {
  return (
    <div>
      <h2>User Page</h2>
      <p>This page is under development 👩‍💻</p>
    </div>
  );
}
