import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip, Button } from "@mantine/core";

export default function InputLov() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="">
        <div className="flex items-center mb-1">
          <div className="text-sm text-gray-400 font-semibold ">RFC</div>
          <div className="relative w-full ml-1">
            <Tooltip
              label="jhjhkshjsdsjhsjkdhsdksjh"
              withArrow
              transition="slide-down"
              opened={show}
              arrowSize={7}
              position="bottom"
              color={"cyan"}
              style={{ color: "red !important" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
                onClick={() => {
                  setShow(!show);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </Tooltip>
          </div>
        </div>
        <input
          type="text"
          className="h-9 w-64 focus:outline-none rounded border border-gray-600 px-3 focus:outline-blue-500 focus:outline-[3px] focus:border-blue-200 focus:border"
        />
      </div>
    </>
  );
}
