import React from "react";
// import alertIcon from "../assets/warning.png";

export default function Button({ text }) {
  return (
    <>
      <div className="flex items-center mx-2 bg-red-300 w-full rounded px-3 py-2">
        {/* <img src={alertIcon} alt="" className="h-7  w-7" /> */}
        <div className="text-red-600 text-sm font-[600]  ml-4">{text}</div>
      </div>
    </>
  );
}
