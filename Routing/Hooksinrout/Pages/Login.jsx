import React from "react";

const Login = () => {
  return (
    <section className="login">
      <div className="log">
        <div>
          <label className="label">Username :</label><br/>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label className="label">Password : </label><br/>
          <input type="password" name="" id="" />
        </div>
        <button>Submit</button>
      </div>
    </section>
  );
};

export default Login;
