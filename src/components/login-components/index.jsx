import React, { useState } from "react";
import UserPage from "../../pages/userPage";
import { Navigate } from "react-router-dom";

const LoginComponents = () => {
  const logg = localStorage.getItem("token");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const login = () => {

    if(email && name){
      localStorage.setItem(
        "token",
        JSON.stringify({
          name: email,
          password: name,
        })
      );
      location.reload()
      }
  };

  return (
    <>
      {logg ? (
          <Navigate to={"/userpage"}/>
      ) : (
        <div className=" flex items-center justify-center h-[90vh] bg-[#242424]">
          <div className="login-container w-[300px] h-[350px] rounded-[10px]  bg-white p-[30px] flex flex-col  items-center justify-between">
            <div className=" flex flex-col gap-5 items-center">
              <h3 className=" font-semibold text-[28px]">Log in</h3>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" outline-none border-[1px] border-[solid] border-[black] rounded-[4px] h-[35px] p-[8px]"
                type="email"
                placeholder="Name..."
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" outline-none border-[1px] border-[solid] border-[black] rounded-[4px] h-[35px] p-[8px]"
                type="password"
                placeholder="password..."
              />
            </div>

            <button
              onClick={login}
              className=" flex items-center justify-center text-[20px] bg-black text-white h-[40px] w-full rounded-[7px]"
            >
              Log in{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginComponents;
