import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/auth");
      return;
    }

    const fetchData = async (token) => {
      try {
        const response = await fetch("http://localhost:3000/", {
          headers: {
            Authorization: token,
          },
        });

        if (response.ok) {
          const data = await response.text();
          setResponseData(data);
        } else {
          throw new Error("Unauthorized");
        }
      } catch (error) {
        navigate("/auth");
      }
    };

    fetchData(token);
  }, [navigate]);

  return (
    <div>
      <h1>HomePage</h1>
      {responseData && <div>Response data: {responseData}</div>}
    </div>
  );
};

export default HomePage;
