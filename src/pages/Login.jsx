// create login page

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { loginAPI } from "@/services/API/authAPI";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Loading from "@/components/Loading";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateLoginForm = (email, password) => {
    const errors = {};

    if (!email) {
      errors.email = "กรุณาใส่อีเมล์";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "รูปแบบอีเมล์ไม่ถูกต้อง";
    }

    if (!password) {
      errors.password = "กรุณาใส่รหัสผ่าน";
    } else if (password.length < 6) {
      errors.password = "รหัสผ่านต้องมีอย่างน้อย 6 ตัว";
    } 

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { isValid, errors } = validateLoginForm(email, password);
    if (isValid) {
      setErrors({ email: "", password: "" })
      setIsLoading(true);
      try {
        const res = await loginAPI({ email, password });
        setToken(res.userInfo.token);
        navigate("/", { replace: true });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "ไม่สามารถเข้าระบบได้",
          text: "อีเมลล์หรือรหัสผ่านไม่ถูกต้อง ลองใหม่อีกครั้ง",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div
      className="flex justify-center items-center "
      style={{ height: "calc(100vh - 128px)" }}
    >
      {isLoading && <Loading />}
      <div className=" bg-zinc-50 rounded p-8 drop-shadow-xl w-1/3">
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
              id="email"
              type="text"
              placeholder="ใส่อีเมลล์"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
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
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <hr className="my-6" />
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
