import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../helper";
import "./Popular.css";

import Item from "../Item/Item";

const Popular = () => {
  const [data_product, setData_Product] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/popularinwomen`)
      .then((res) => res.json())
      .then((data) => setData_Product(data));
  }, []);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              pro_id={item.id}
              img={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
