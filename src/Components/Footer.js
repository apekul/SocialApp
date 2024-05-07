import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoServerOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <footer id="footer" className=" bg-[#0F0F0F] text-white flex flex-col">
      <div className="flex w-full flex-col py-10 gap-5 items-center justify-center">
        <span className="text-center">
          <h1 className="text-3xl font-semibold">SocialAPP</h1>
          <p className="w-[40rem] text-lg">
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
      <div className="bg-[#000000] px-20 py-3">
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
