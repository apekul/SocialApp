import React from "react";

const Comments = (post) => {
  // fetch comments for specific post
  return (
    <div className="text-white px-5 pb-5">
      <div>
        <input
          className="w-full rounded-lg px-2 py-1"
          placeholder="Comment.."
        />
      </div>
      {/* {post.content.comments.map((comm, i) => (
        <div key={comm.id} className="flex gap-2 mt-2">
          <p>user id: {comm.userID}</p>
          <p>{comm.text}</p>
          <p>{comm.timestamp}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Comments;
