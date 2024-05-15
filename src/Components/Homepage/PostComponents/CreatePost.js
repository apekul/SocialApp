import React, { useState, useRef, useEffect } from "react";
import { BiImageAdd } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const fileInputRef = useRef(null);
  const textAreaRef = useRef(null);

  const handleImageAddClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const deleteImage = (i) => {
    const newImages = images.filter((v, index) => index !== i);
    setImages(newImages);
  };

  useEffect(() => {
    const textarea = textAreaRef.current;
    textarea.style.height = "auto"; // Reset the height
    textarea.style.height = textarea.scrollHeight + "px"; // Set height to scrollHeight
  }, [text]);

  return (
    <div className="flex flex-col gap-2 border-b-2 pb-5">
      <textarea
        ref={textAreaRef}
        className="w-full bg-gray-200 border rounded-lg px-3 py-1 resize-none"
        placeholder="Post Text.."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ minHeight: "40px", maxHeight: "200px" }}
      />
      {/* display added images */}
      <ul className="flex flex-wrap gap-2">
        {images.map((image, index) => (
          <li key={index} className="relative">
            <img
              src={image}
              alt={`Upload ${index}`}
              className="w-20 h-20 object-cover object-top rounded-lg"
            />
            <TiDelete
              className="text-red-600 absolute top-0.5 right-0.5 text-xl cursor-pointer hover:text-red-500"
              onClick={() => deleteImage(index)}
            />
          </li>
        ))}
      </ul>
      <div className="flex w-full justify-between ">
        <BiImageAdd
          size={40}
          className="text-green-500 cursor-pointer hover:bg-gray-200 rounded-md p-1"
          onClick={handleImageAddClick}
        />
        <input
          type="file"
          id="fileInput"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          accept="image/*"
        />
        <button className="bg-green-500 rounded-md px-2 text-white hover:bg-green-600">
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
