import React from "react";
import { IoMdSearch, IoIosSettings } from "react-icons/io";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { IoChatboxEllipses, IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="rwd-padding bg-[#2d3436] min-h-[3rem] flex flex-col-reverse sm:flex-row gap-5 py-3 items-center justify-between text-white"
    >
      <div className="flex items-center">
        <FaHome
          className="text-2xl hover:scale-[1.2] transition-all duration-150 cursor-pointer hidden sm:block"
          onClick={() => console.log("navigate homepage")}
        />
        <div className="relative text-[#34495e] sm:mx-5">
          <input
            placeholder="Search..."
            className="py-1 w-full sm:w-[20rem] pl-10 rounded-md focus:outline-blue-500 focus:bg-[#dfe6e9] placeholder-[#2d3436] bg-[#b2bec3]"
          />
          <IoMdSearch className="absolute top-1.5 left-2.5 " size={20} />
        </div>
      </div>
      <div className="flex gap-5 sm:gap-8 text-2xl ">
        <FaHome
          className="hover:scale-[1.2] transition-all duration-150 cursor-pointer block sm:hidden"
          onClick={() => console.log("navigate homepage")}
        />
        <IoPersonCircle
          className="hover:scale-[1.2] transition-all duration-150 cursor-pointer"
          onClick={() => console.log("navigate user profile")}
        />
        <IoChatboxEllipses
          className="hover:scale-[1.2] transition-all duration-150 cursor-pointer"
          onClick={() => console.log("open chat box")}
        />
        <FaUserFriends
          className="hover:scale-[1.2] transition-all duration-150 cursor-pointer"
          onClick={() => console.log("open friends list")}
        />
        <IoIosSettings
          className="hover:scale-[1.2] transition-all duration-150 cursor-pointer"
          onClick={() => console.log("open settings box")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
