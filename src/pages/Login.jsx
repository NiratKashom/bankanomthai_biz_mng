// create login page

import React from "react";

const Login = () => {


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.username.value)
    console.log(e.target.password.value)
  }

  return (
    <div
      className="flex justify-center items-center "
      style={{ height: "calc(100vh - 128px)" }}
    >
      <div className="bg-white rounded p-8 shadow-lg w-1/3">
        <h2 className="text-2xl text-center font-bold mb-4">ลงชื่อเข้าใช้</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              อีเมลล์
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="ใส่อีเมลล์"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              รหัสผ่าน
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="ใส่รหัสผ่าน"
            />
          </div>
          <hr className="my-6"/>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 w-4/5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              ลงชื่อเข้าใช้
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
