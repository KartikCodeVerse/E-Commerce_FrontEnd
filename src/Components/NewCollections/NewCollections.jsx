import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../helper";
import "./NewCollections.css";
// import new_collections from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  const [new_collections, setNew_Collections] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/newcollections`)
      .then((res) => res.json())
      .then((data) => setNew_Collections(data));
  }, []);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
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

export default NewCollections;
