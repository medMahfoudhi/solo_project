import axios from "axios";
import { useState } from "react";
import React from "react";
const OneProduct = ({ item, func }) => {
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [quantity, setquantity] = useState(null);
  const passCommande = () => {
    axios.post("/api/commande", { name, lastName, phoneNumber, quantity });
  };
  return (
    <div className="post">
      <img src={item.imageUrl} className="post-image" />

      <h2 className="post-title"> {item.name}</h2>
      <h3 className="post-title">Reference:{item.ref}</h3>
      <div className="post-byline">
        <h3 className="post-byline-author">{item.price}</h3>
      </div>
      <h4 className="feed-list-item-lede">{item.description}</h4>
      <h5>Place a purchase order:</h5>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => setlastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        onChange={(e) => setphoneNumber(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        onChange={(e) => setquantity(e.target.value)}
      />
      <button
        onClick={() => {
          func(), passCommande();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default OneProduct;
