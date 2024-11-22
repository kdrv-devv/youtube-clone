import React, { useState } from "react";

const LoginComponents = () => {
  const logg = localStorage.getItem("token");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const login = () => {
    localStorage.setItem(
      "token",
      JSON.stringify({
        name: name,
        Email: email,
      })
    );
    location.reload()
  };

  return (
    <>
      {logg ? (
        <div className="  w-[100%]  h-[673px] flex items-center justify-center bg-green-500 text-red-600 ">
          <h1 className="text-[40px] text-white">
            Demak siz kompyuterni bilasiz ...
          </h1>
        </div>
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
                placeholder="Email..."
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" outline-none border-[1px] border-[solid] border-[black] rounded-[4px] h-[35px] p-[8px]"
                type="text"
                placeholder="Name..."
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
