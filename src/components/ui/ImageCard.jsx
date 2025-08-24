import React from "react";
import "./ImageCard.css";

const ImageCard = ({ image, alt = "Image", variant = "default" }) => {
  const getCardClassName = () => {
    let className = "image-card";
    if (variant !== "default") {
      className += ` ${variant}`;
    }
    return className;
  };

  return (
    <div className={getCardClassName()}>
      {image && (
        <div className="image-card-container">
          <img 
            src={image} 
            alt={alt} 
            className="image-card-img"
          />
        </div>
      )}
    </div>
  );
};

export default ImageCard;
