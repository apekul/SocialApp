import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoServerOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <footer id="footer" className=" bg-[#0F0F0F] text-white flex flex-col ">
      {/* app description/ links */}
      <div className="flex w-full flex-col py-10 gap-5 items-center justify-center rwd-padding">
        <span className="text-center  w-[15rem] sm:w-[30rem] md:w-[40rem]">
          <h1 className="text-2xl md:text-3xl font-semibold">SocialAPP</h1>
          <p className="text-md md:text-lg ">
            SocialAPP is a frontend social applicatyion with user
            authentication, enabling posting of text and photos for engaging
            interactions.
          </p>
        </span>
        <div className="flex gap-5">
          <a
            href="https://github.com/apekul/SocialApp"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://github.com/apekul/SocialAppBackend"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <IoServerOutline size={30} />
          </a>
        </div>
      </div>
      {/* copyrights */}
      <div className="rwd-padding bg-[#000000] py-3 text-xs md:text-base">
        <p>
          Copyright ©2024{" "}
          <a
            className="font-semibold hover:text-blue-300"
            target="_blank"
            href="https://github.com/apekul"
            rel="noreferrer"
          >
            apekul
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
