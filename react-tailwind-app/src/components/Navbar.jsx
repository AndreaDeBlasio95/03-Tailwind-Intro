import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="flex w-full text-3xl font-bold text-[#00df98] ">REACT.</h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu size={20} />
      </div>
      <div className="fixed left-0 top-0 w-ª[60%] h-full border-r border-r-gray-900 bg-[#121212]">
        <h1 className="flex w-full text-3xl font-bold text-[#00df98] m-4">
          REACT.
        </h1>
        <ul className="uppercase p-4 ">
          <li className="p-4 border-gray-600">Home</li>
          <li className="p-4 border-gray-600">Company</li>
          <li className="p-4 border-gray-600">Resources</li>
          <li className="p-4 border-gray-600">About</li>
          <li className="p-4 border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
}
