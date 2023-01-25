import React from "react";

export default function Button({ text, type }) {
  const save ="bg-white w-24 text-gray-400 border shadow font-semibold py-2 px-3 rounded ";
  const cancel ="bg-gradient-to-r from-blue-800 to-blue-500 w-32 text-white font-semibold shadow-md shadow-blue-400 py-2 px-3 rounded ";
  return (
    <div className="mt-2">
      <button className={type === 1 ? save : cancel}>{text}</button>
    </div>
  );
}
