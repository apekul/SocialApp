import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getNewAccessToken } from "../utils/refreshToken";

const HomePage = () => {
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        // try tyo generate new access token, if fails then throw error
        if (!accessToken) {
          try {
            await getNewAccessToken();
            return fetchData(); // Retry fetching data after refreshing the access token
          } catch (error) {
            throw new Error("Failed to refresh access token");
          }
        }

        const response = await fetch("http://localhost:3000/", {
          headers: {
            Authorization: accessToken,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setResponseData(data.message); // set data if fetch was correct
        } else if (response.status === 401) {
          try {
            await getNewAccessToken(); // Refresh the access token
            return fetchData(); // Retry fetching data after refreshing the access token
          } catch (error) {
            throw new Error("Failed to refresh access token"); // failed to refresh access
          }
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.message !== "Failed to fetch data") {
          navigate("/auth");
        }
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <h1>HomePage</h1>
      {responseData && <div>Response data: {responseData}</div>}
    </div>
  );
};

export default HomePage;
