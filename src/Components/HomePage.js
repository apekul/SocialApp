import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const HomePage = () => {
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => {
        if (response.ok) {
          return response.text(); // Parse the response body as text
        } else {
          throw new Error("Failed to fetch"); // Throw error for non-successful responses
        }
      })
      .then((data) => {
        setResponseData(data); // Set response data
      })
      .catch(() => {
        navigate("/auth"); // Redirect to login page if request fails
      });
  }, [navigate]);

  return (
    <div>
      <h1>HomePage</h1>
      {responseData && <div>Response data: {responseData}</div>}
    </div>
  );
};

export default HomePage;
