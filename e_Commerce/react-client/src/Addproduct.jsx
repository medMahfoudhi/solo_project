import React, { useState } from "react";
import axios from "axios";
const Addproduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ref, setRef] = useState("");
  const addProduct = () => {
    axios.post("/api/product", { name, description, price, imageUrl, ref });
  };
  return (
    <center>
      <form className="formAdd">
        <input
          className="formaddin"
          type="text"
          placeholder="name of product"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="formaddin"
          type="text"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          className="formaddin"
          type="text"
          placeholder="ref"
          onChange={(e) => setRef(e.target.value)}
        />
        <br />
        <input
          className="formaddin"
          type="text"
          placeholder="image url"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <br />
        <textarea
          className="formaddin"
          name="description"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input className="formaddin" type="submit" onClick={addProduct} />
      </form>
    </center>
  );
};

export default Addproduct;
