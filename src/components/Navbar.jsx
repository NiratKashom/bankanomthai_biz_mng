import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center p-4 drop-shadow-md">
      <Link to="/" className="text-gray-700 text-base font-semibold">
        ระบบบันทึกรายรับ-รายจ่าย บ้านขนมถ้วยฟู
      </Link>
      <ul className="flex space-x-2">
        <li>
          <Link to="/storefront" className="text-gray-700 text-base">
            บันทึกของที่นำไปขาย
          </Link>
        </li>
        <li>
          <Link to="/expense" className="text-gray-700 text-base">
            บันทึกรายจ่าย
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
