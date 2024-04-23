import React, { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showLogin, setShowLogin] = useState(false);
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    if (isAuthenticated) {
      // If user is authenticated, redirect to home page
      return navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className=" flex items-center h-[100vh]">
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <Register setShowLogin={setShowLogin} />
      )}
    </div>
  );
};

export default Auth;
