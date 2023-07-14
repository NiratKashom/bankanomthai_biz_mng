import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "text-red";

  return (
    <nav className="bg-white flex justify-between items-center p-4 drop-shadow-md">
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
          }          >
            บันทึกรายจ่าย
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
