"use client";
import React, { useRef, useState } from "react";

const page = () => {
  const textareaRef = useRef(null);
  const [initChars, setInitChars] = useState(300);
  const handleClick = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
    }
  };
  const calcChars = () => {
    if (textareaRef.current) {
      if (initChars <= 0) {
        textareaRef.current.preventDefault();
      }
      setInitChars(30);
      const num = textareaRef.current.value.length;
      setInitChars((prev) => prev - num);
    }
  };
  const handleKeyDown = (event) => {
    if (initChars <= 0) {
      event.preventDefault();
    }
  };
  return (
    <div className="w-[80%] m-auto flex flex-col gap-7 items-center p-5">
      <section className="border-4 border-gray-200 w-[600px] h-[400px] ">
        {/* For Image */}
      </section>
      <section className="flex flex-col items-center justify-center gap-5">
        {/* Title */}
        <input
          type="text"
          placeholder="Title of Post..."
          className="w-[590px] border-b-4 border-gray-200 text-2xl py-2 outline-none focus:border-gray-400 capitalize"
        />
        <div className="w-full flex flex-col gap-3 mt-2 text-gray-500">
          <label className="font-semibold text-2xl italic">
            Short description about your article:
          </label>
          <textarea
            ref={textareaRef}
            onClick={handleClick}
            onChange={calcChars}
            className="bg-gray-100 w-full min-h-[200px] py-3 px-4 text-xl shadow-inner border-2 border-gray-300 outline-gray-500"
          ></textarea>
          <p className="text-gray-600 font-semibold text-sm ml-1">
            {initChars} left
          </p>
        </div>
      </section>
      <section className="w-[600px]">
      <h1 className="italic font-semibold text-2xl text-gray-500 mb-3">Themes</h1>
        <div className="bg-gray-200 p-5 w-full h-[120px]" >
            <input type="text" className="w-full py-2 px-4 text-xl shadow rounded-md"/>
        </div>
      </section>
    </div>
  );
};

export default page;
