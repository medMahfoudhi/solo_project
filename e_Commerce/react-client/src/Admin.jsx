import React from "react";
import axios from "axios";
const Admin = ({ items, func1 }) => {
  const deleteFunc = (p) => {
    console.log(p);
    axios.delete(`/api/product${p}`);
  };
  return (
    <div>
      <div>
        {items.map((e) => {
          return (
            <div className="one" key={e._id}>
              <img
                // onClick={() => func(e)}
                className="product-list-item"
                src={e.imageUrl}
              />
              <button value={e._id} onClick={(e) => deleteFunc(e.target.value)}>
                Delete
              </button>
              <button onClick={() => func1(e)}>Update</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
