import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/home";
import Feature from "./components/feature";
import User from "./components/user";
import MainLayout from "./components/mainlayout";
import View from "./components/view";
import Register from "./components/register";
import Loginpage from "./components/loginpage";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./components/notfound";

function App() {
  return (

    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Loginpage />} />

      <Route path="/" element={<MainLayout />} />

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/feature"
        element={
          <PrivateRoute>
            <Feature />
          </PrivateRoute>
        }
      />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />
      <Route
        path="/students"
        element={
          <PrivateRoute>
            <View />
          </PrivateRoute>
        }
      />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
