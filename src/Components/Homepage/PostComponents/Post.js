import React from "react";
import Images from "./Images";
import moment from "moment";

const Post = ({ post }) => {
  // get user name by ID
  return (
    <div className="px-5 py-4 w-full">
      <div className="flex mb-4">
        <img
          className="w-12 h-12 rounded-full"
          alt="UserImg"
          src="https://via.placeholder.com/150"
        />
        <div className="ml-2 mt-0.5">
          <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
            user name
          </span>
          <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
            {moment(post.timestamp, "YYYYMMDD").fromNow()}
          </span>
        </div>
      </div>
      <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
        {post.text}
      </p>

      {/* Images */}
      {post.images && <Images images={post.images} />}
      {/* Reactions */}
      {/* <Reactions content={post.content} /> */}
    </div>
  );
};

export default Post;
