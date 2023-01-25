import React from "react";
import alertIcon from "../assets/warning.png";

export default function Button({ text, type }) {
  const save =
    "bg-gray-200 w-24 text-gray-700 font-semibold py-2 px-3 rounded ";
  const cancel =
    "bg-gradient-to-r from-blue-800 to-blue-500 w-32 text-white font-semibold shadow-md shadow-blue-400 py-2 px-3 rounded ";
  return (
    <>
      <div className="flex items-center mx-2 bg-red-300 w-full rounded px-3 py-2">
        <img src={alertIcon} alt="" className="h-7  w-7" />
        <div className="text-red-600 text-sm font-[600]  ml-4">
          charley charley MBHBYD
        </div>
      </div>
    </>
  );
}
