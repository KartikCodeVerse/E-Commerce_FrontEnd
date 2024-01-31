import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ pro_id, img, name, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${pro_id}`}>
        <img src={img} alt="" onClick={window.scrollTo(0, 0)} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
};

export default Item;
