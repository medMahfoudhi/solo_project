import React, { useEffect, useState } from "react";
import axios from "axios";
const ListCommande = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("/api/commande/").then((result) => {
      setdata(result.data);
    });
  }, [data]);
  const deleteFunc = (px) => {
    console.log(px);
    axios.delete(`/api/commande/${px}`);
  };
  const confirmCmd = (p) => {
    axios.put(`/api/commande/${p}`, { status: "confirmed" });
  };
  return (
    <div>
      {data.map((e, index) => {
        return (
          <div key={index} className="post-list-entry">
            <div>
              {e.name} {e.lastName}
            </div>
            <div>{e.phoneNumber}</div>
            <div>{e.ref}</div>
            <div>{e.quantity}</div>
            <button value={e._id} onClick={(e) => deleteFunc(e.target.value)}>
              delete
            </button>
            <button value={e._id} onClick={(e) => confirmCmd(e.target.value)}>
              Confim
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ListCommande;
