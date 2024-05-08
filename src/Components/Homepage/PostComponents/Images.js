import React, { useState } from "react";

const Images = ({ images }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const remainingCount = images.length - 3;
  return (
    <div>
      {images.length > 1 ? (
        <div className="grid grid-cols-3 gap-1">
          {showAllImages
            ? images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-full h-auto object-cover object-center rounded"
                />
              ))
            : images
                .slice(0, 3)
                .map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className="w-full h-auto object-cover object-center rounded"
                  />
                ))}
        </div>
      ) : (
        <img
          src={images[0]}
          alt=""
          className="w-full h-auto object-cover object-center rounded"
        />
      )}
      {images.length > 3 && (
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setShowAllImages(!showAllImages)}
        >
          {showAllImages ? "Show less" : `Show more +${remainingCount}`}
        </button>
      )}
    </div>
  );
};

export default Images;
