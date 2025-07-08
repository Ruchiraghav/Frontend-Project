// src/components/MainLayout.jsx
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "80px" }}></div>
      <Outlet />
    </>
  );
}

export default MainLayout;

