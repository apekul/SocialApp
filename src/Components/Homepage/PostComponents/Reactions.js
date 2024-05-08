import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Reactions = ({ content }) => {
  const [showUsers, setShowUsers] = useState("");

  const updateShowUsers = (e) => {
    const { id } = e.target;
    if (showUsers === id) return setShowUsers("");
    setShowUsers(id);
  };

  return (
    <ul
      id="reactions"
      className="flex justify-between items-center mt-5 select-none"
    >
      <li className="flex items-center gap-3">
        {/* Heart */}
        <div className="flex text-white items-center relative">
          <FaHeart className="hover:text-red-500 cursor-pointer text-xl" />
          <span
            id="heart"
            className="ml-2 text-gray-500 dark:text-gray-400 font-light cursor-pointer"
            onClick={(e) => updateShowUsers(e)}
          >
            {content.likedBy.length}
          </span>
          <div
            className={`absolute bg-white text-black bottom-5 left-10 p-2 ${
              showUsers === "heart" ? "block" : "hidden"
            }`}
          >
            {content.likedBy.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </div>
        {/* Like */}
        <div className="flex text-white items-center relative">
          <AiFillLike className="hover:text-blue-400 cursor-pointer text-xl" />
          <span
            id="like"
            className="ml-2 text-gray-500 dark:text-gray-400 font-light cursor-pointer"
            onClick={(e) => updateShowUsers(e)}
          >
            {content.likedBy.length}
          </span>
          <div
            className={`absolute bg-white text-black bottom-5 left-10 p-2 ${
              showUsers === "like" ? "block" : "hidden"
            }`}
          >
            {content.likedBy.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </div>
        {/* Dislike */}
        <div className="flex text-white items-center relative">
          <AiFillDislike className="hover:text-blue-400 cursor-pointer text-xl" />
          <span
            id="dislike"
            className="ml-2 text-gray-500 dark:text-gray-400 font-light cursor-pointer"
            onClick={(e) => updateShowUsers(e)}
          >
            {content.likedBy.length}
          </span>
          <div
            className={`absolute bg-white text-black bottom-5 left-10 p-2 ${
              showUsers === "dislike" ? "block" : "hidden"
            }`}
          >
            {content.likedBy.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </div>
      </li>
      <li className="ml-1 text-gray-500 dark:text-gray-400 font-light cursor-pointer hover:text-gray-200">
        {content.comments.length} comments
      </li>
    </ul>
  );
};

export default Reactions;
