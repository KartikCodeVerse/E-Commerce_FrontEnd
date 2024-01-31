import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          perferendis id voluptas corporis eligendi ullam quia distinctio.
          Tempora obcaecati aliquid hic atque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
          voluptas debitis.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
