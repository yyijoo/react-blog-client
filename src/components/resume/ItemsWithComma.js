import React from "react";

const ItemsWithComma = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <span>
          {item}
          {items.length - 1 === index ? "" : ",  "}
        </span>
      ))}
    </div>
  );
};
export default ItemsWithComma;
