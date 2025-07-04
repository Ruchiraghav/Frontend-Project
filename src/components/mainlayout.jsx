import React from "react";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <h1>Students List</h1>
      <ul>
        <li><a href="/home" target="_blank">HOME</a></li>
        <li><Link to="/feature">FEATURE</Link></li>
        <li><Link to="/user">ABOUT</Link></li>
        <li>
         <a href="/students" target="_blank">VIEW STUDENT</a></li>
        <li><Link to="/register">REGISTER</Link></li> 
        <li><Link to="/login">LOGIN</Link></li>
      
      </ul>
    </div>
  );
}

export default MainLayout;
