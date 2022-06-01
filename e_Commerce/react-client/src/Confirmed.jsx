import React, { useEffect, useState } from "react";
import axios from "axios";
const Confirmed = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("/api/commande/confirmed").then((result) => {
      setdata(result.data);
    });
  }, [data]);
  const deleteCmdconfirmed = (p) => {
    console.log(p);
    axios.delete(`/api/commande/${p}`);
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
            <button
              value={e._id}
              onClick={(e) => {
                deleteCmdconfirmed(e.target.value);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Confirmed;
