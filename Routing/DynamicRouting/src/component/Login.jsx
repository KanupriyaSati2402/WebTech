import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate(); // routing hook

  let data = useLoaderData();
  console.log(data);

  let [credentials, setcredentials] = useState({
    userName: "",
    passWord: "",
  });

  let { userName, passWord } = credentials;

  let handlechange = (e) => {
    let { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };

  let handlesubmit = (e) => {
    e.preventDefault();
    //in react default behaviour should be prevent as default bahaviour is refresing
    if (userName == "Seema") {
      if (passWord == "seema@123") {
        toast.success("Login Successfully");
        setTimeout(() => {
          navigate("/product", { state: { credentials, data } }); //while navigating we can transfer any data
        }, 2000);
      }
    }
  };
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <div className="from">
          <label htmlFor="">Username : </label>
          <input type="text" name="userName" id="" onChange={handlechange} />
        </div>

        <div className="pass">
          <label htmlFor="">Password : </label>
          <input
            type="password"
            name="passWord"
            id=""
            onChange={handlechange}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
