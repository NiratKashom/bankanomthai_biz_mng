import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="bg-gray-300 flex justify-between items-center p-4">
      <Link to="/" className="text-gray-700 text-base font-semibold">
        ระบบบันทึกรายรับ-รายจ่าย บ้านขนมถ้วยฟู
      </Link>
      <ul className="flex space-x-2">
        <li>
            <Link to="/expense" className="text-gray-700 text-base">
              expense
            </Link>
        </li>
        <li>
          <Link to="/storefront" className="text-gray-700 text-base">
            storefront
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
