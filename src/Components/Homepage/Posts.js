import React from "react";

import { posts } from "../../fakeData";
import Post from "./PostComponents/Post";
import CreatePost from "./PostComponents/CreatePost";

const Posts = () => {
  // fetch posts from database
  return (
    <ul className="w-auto flex flex-col  gap-3">
      {/* create post */}
      <CreatePost />
      {posts.map((post, index) => (
        <li key={post.id} className="rounded-md bg-white dark:bg-gray-800">
          <Post post={post} />
          <div className="text-white px-5 pb-5">
            <div>
              <input
                className="w-full rounded-lg px-2 py-1"
                placeholder="Comment.."
              />
            </div>
            {post.content.comments.map((comm, i) => (
              <div key={comm.id} className="flex gap-2 mt-2">
                <p>user id: {comm.userID}</p>
                <p>{comm.text}</p>
                <p>{comm.timestamp}</p>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
