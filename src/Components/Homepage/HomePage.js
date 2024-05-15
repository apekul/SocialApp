import React from "react";

import HomePageMenu from "./HomePageMenu";
import Posts from "./Posts";
import FriendList from "./FriendList";

const HomePage = () => {
  return (
    <div id="homepage" className="rwd-padding min-h-screen">
      <div className="flex min-h-screen justify-between mb-10 my-5">
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
