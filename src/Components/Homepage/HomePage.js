import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchSampleData } from "../../Redux/store/thunks/sampleRoute";
import { useNavigate } from "react-router-dom";

import HomePageMenu from "./HomePageMenu";
import Posts from "./Posts";
import FriendList from "./FriendList";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, status, error } = useSelector((state) => state.sampleRoute);

  useEffect(() => {
    dispatch(fetchSampleData());
  }, [dispatch, navigate]);

  useEffect(() => {
    if (error === "Failed to refresh access token") {
      navigate("/auth");
    }
  }, [error, navigate]);
  return (
    <div id="homepage" className="rwd-padding min-h-screen">
      <div>Response data: {message}</div>

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
