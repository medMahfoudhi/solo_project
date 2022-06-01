import React from "react";

const Login = ({ func }) => {
  return (
    <div className="container" >
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Please Sign In</h2>
        <input className="lolo" type="email" placeholder="email" />
        <input className="lolo" type="password" placeholder="password" />
        <input className="lol" type="submit" onClick={() => func()} />
      </div>
    </div>
  );
};

export default Login;
