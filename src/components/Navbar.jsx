import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { clearToken, token } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken(); // Clear the authentication token
    navigate("/login", { replace: true });
  };

  return (
    <nav className="bg-white flex justify-between items-center p-4 drop-shadow-md fixed top-0 w-full z-10">
      <Link to="/" className="text-gray-700 text-base font-semibold">
        ระบบบันทึกรายรับ-รายจ่าย บ้านขนมถ้วยฟู
      </Link>
      <ul className="flex space-x-2">
        <li className="h-full">
          <NavLink
            to="/storefront"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-gray-700 text-base"
                : isActive
                ? "text-blue-700 text-bold border-b-2 border-blue-700"
                : ""
            }
          >
            บันทึกของที่นำไปขาย
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/expense"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-gray-700 text-base"
                : isActive
                ? "text-blue-700 text-bold border-b-2 border-blue-700"
                : ""
            }
          >
            บันทึกรายจ่าย
          </NavLink>
        </li>
        {token && (
            <li>
            <button
              type="button"
              className="text-red-500 border-red-500 px-1 rounded border-2 
                hover:text-white hover:bg-red-500"
              onClick={handleLogout}
            >
              ออกจากระบบ
            </button>
          </li>
        )}
      
      </ul>
    </nav>
  );
};

export default Navbar;
