import React from "react";
import "./ImageCard.css";

const ImageCard = ({ image, alt = "Image", variant = "default" }) => {
  return (
    <div className="card">
      {image && (
        <div className="card-image-container">
          <img 
            src={image} 
            alt={alt} 
            className="card-image"
          />
        </div>
      )}
    </div>
  );
};

export default ImageCard;


