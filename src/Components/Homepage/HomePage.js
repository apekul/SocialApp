import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getNewAccessToken } from "../../utils/refreshToken";

import HomePageMenu from "./HomePageMenu";
import Posts from "./Posts";
import FriendList from "./FriendList";

const HomePage = () => {
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          await refreshTokenAndFetchData();
        } else {
          fetchDataWithToken(accessToken);
        }
      } catch (error) {
        handleError(error);
      }
    };

    const refreshTokenAndFetchData = async () => {
      try {
        await getNewAccessToken();
        await fetchData();
      } catch (error) {
        throw new Error("Failed to refresh acess token");
      }
    };

    const fetchDataWithToken = async (accessToken) => {
      try {
        const response = await fetch("http://localhost:3000/", {
          headers: {
            Authorization: accessToken,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setResponseData(data.message);
        } else if (response.status === 401) {
          await refreshTokenAndFetchData();
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        throw error;
      }
    };

    const handleError = (error) => {
      console.log("Error fetching data:", error);
      if (error.message !== "Failed to fetch data") {
        navigate("/auth");
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div id="homepage" className="rwd-padding min-h-screen">
      {responseData && <div>Response data: {responseData}</div>}

      <div className="flex min-h-screen justify-between mb-10">
        {/* Left additional navigation */}
        <HomePageMenu />
        {/* Display posts */}
        <Posts />
        {/* Friend list menu */}
        <FriendList />
      </div>
    </div>
  );
};

export default HomePage;
