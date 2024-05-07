import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { FaCalendarAlt, FaBookmark } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const HomePageMenu = () => {
  return (
    <ul>
      <li className="flex text-xl gap-2 items-center cursor-pointer">
        <IoPersonCircle
          className=""
          onClick={() => console.log("navigate user profile")}
        />
        <label>User Name</label>
      </li>
      <li className="flex text-xl gap-2 items-center cursor-pointer">
        <FaBookmark
          className=""
          onClick={() => console.log("display user posts")}
        />
        <label>My posts</label>
      </li>
      <li className="flex text-xl gap-2 items-center cursor-pointer">
        <IoIosNotifications
          className=""
          onClick={() => console.log("display user activity")}
        />
        <label>Activity</label>
      </li>
      <li className="flex text-xl gap-2 items-center cursor-pointer">
        <FaCalendarAlt
          className=""
          onClick={() => console.log("navigate to user calendar")}
        />
        <label>Events</label>
      </li>
    </ul>
  );
};

export default HomePageMenu;
