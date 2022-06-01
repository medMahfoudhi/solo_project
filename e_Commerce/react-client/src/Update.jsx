import React from "react";
import axios from "axios";
import { useState } from "react";
const Update = ({ upItem }) => {
  const [name, setName] = useState("");
  const [ref, setRef] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const updateProduct = () => {
    axios.put(`/api/product/${upItem._id}`, { name, ref, price, description });
  };
  return (
    <div>
      <div className="post">
        <img src={upItem.imageUrl} className="post-image" />
        <form>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="ref"
            onChange={(e) => setRef(e.target.value)}
          />
          <input
            type="text"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button value={upItem._id} onClick={updateProduct}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
