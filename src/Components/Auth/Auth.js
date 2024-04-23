import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
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
