import React from "react";
import "./Card.css";

const Card = ({ image, alt = "Card image", title, description }) => {
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
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
    </div>
  );
};

export default Card;
