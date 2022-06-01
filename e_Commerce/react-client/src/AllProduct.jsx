import React from "react";

const AllProduct = ({ items, func }) => {
  return (
    <div>
      <ul className="product-list">
        {items.map((e) => {
          return (
            <div key={e._id}>
              <img
                onClick={() => func(e)}
                className="product-list-item"
                src={e.imageUrl}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AllProduct;
