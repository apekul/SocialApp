import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { posts } from "../../fakeData";

const Posts = () => {
  return (
    <ul className="w-1/2 bg-gray-100 flex flex-col gap-3 p-2">
      {posts.map((post, index) => (
        <li
          key={post.id}
          className="bg-gray-300 w-full flex flex-col gap-2 rounded-md p-2"
        >
          {/* User and post date */}
          <div className="flex justify-between">
            <div className="flex gap-3">
              <IoPersonCircle
                className="text-2xl"
                onClick={() => console.log("navigate user profile")}
              />
              <p>User Name</p>
            </div>
            <p>date posted</p>
          </div>
          {/* Post content */}
          <div className="px-3">
            <p>{post.content.text}</p>
            <div className="w-full h-auto bg-red-200 flex gap-1">
              {post.content.image.map((image, i) => (
                <img
                  className={`object-cover ${
                    post.content.image.length > 1
                      ? "h-1/4 w-1/4"
                      : "w-full h-[25rem]"
                  }`}
                  src="https://via.placeholder.com/150"
                  alt="Placeholder"
                />
              ))}
            </div>
          </div>
          {/* Reaction panel */}
          <div className="px-3 flex gap-3 text-2xl align-center justify-end">
            <FaHeart className="cursor-pointer text-red-500 opacity-50 hover:opacity-100 duration-150" />
            <AiFillLike className="cursor-pointer text-gray-500 opacity-50 hover:opacity-100 duration-150" />
            <AiFillDislike className="cursor-pointer text-gray-500 opacity-50 hover:opacity-100 duration-150" />
          </div>
          {/* Comments */}
          <div>
            <input
              placeholder="Comment..."
              className="w-full rounded-md px-3 py-1"
            />
            <p>Latest Comment</p>
            <button className="bg-gray-200 w-full flex items-center justify-center gap-1">
              <span>More Comments</span>
              <IoMdArrowDropdown size={20} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
