import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostdata } from "../../Redux/store/thunks/getPostsRoute";
import { useNavigate } from "react-router-dom";

import Post from "./PostComponents/Post";
import Comments from "./PostComponents/Comments";
import CreatePost from "./PostComponents/CreatePost";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { posts, status, error } = useSelector((state) => state.allPosts);

  useEffect(() => {
    dispatch(fetchPostdata());
  }, [dispatch]);

  useEffect(() => {
    if (error === "Failed to refresh access token") {
      navigate("/auth");
    }
  }, [error, navigate]);
  return (
    <ul className="flex flex-col  gap-3 w-[30rem] lg:w-[50rem]">
      {/* create post */}
      <CreatePost />
      {!posts && <li>No posts</li>}
      {posts &&
        posts.length !== 0 &&
        posts.map((post, index) => (
          <li
            key={post._id}
            className="rounded-md bg-white dark:bg-gray-800 shadow"
          >
            <Post post={post} />
            <Comments post={post} />
          </li>
        ))}
    </ul>
  );
};

export default Posts;
