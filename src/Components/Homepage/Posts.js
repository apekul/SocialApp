import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostdata } from "../../Redux/store/thunks/postRoute";
import { useNavigate } from "react-router-dom";

import Post from "./PostComponents/Post";
import Comments from "./PostComponents/Comments";
import CreatePost from "./PostComponents/CreatePost";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { posts, status, error } = useSelector((state) => state.postsRoute);

  useEffect(() => {
    dispatch(fetchPostdata());
  }, [dispatch]);
  useEffect(() => {
    if (error === "Failed to refresh access token") {
      navigate("/auth");
    }
  }, [error, navigate]);
  return (
    <ul className="w-auto flex flex-col  gap-3">
      {/* create post */}
      <CreatePost />
      {!posts && <li>No posts</li>}
      {posts.map((post, index) => (
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
