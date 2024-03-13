import React from "react";
import data from "../data.js";
import Image from "next/image.js";
import heart from "../../public/images/heart.png";
import follow from "../../public/images/follow.png";
import chat from "../../public/images/chat.png";

const post = () => {
  return (
    <div className="w-[800px] h-[210px] bg-gray-100 py-4 px-4 rounded-md shadow-sm hover:shadow-lg transition-all duration-200">
      {/* image */}
      <div className="flex items-center gap-2">
        <div className="border-2 border-gray-400 p-1 rounded-full">
          <p className="w-[64px] h-[64px] bg-orange-100 rounded-full"></p>
        </div>
        <div>
          <p>@Name</p>
          <p className=" text-gray-400 text-sm">Posted at 2020</p>
        </div>
      </div>
      <div className="pt-2">
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text
      </div>
      <div className="text-right flex gap-2 item-center justify-end">
        <Image src={heart} className=" w-[32px] opacity-35 hover:bg-gray-200 hover:opacity-90 p-1 rounded-full cursor-pointer"/>
        <Image src={chat} className=" w-[30px] opacity-35 hover:bg-gray-200 hover:opacity-90 p-1 rounded-full cursor-pointer"/>
        <Image src={follow} className=" w-[32px] opacity-35 hover:bg-gray-200 hover:opacity-90 p-1 rounded-full cursor-pointer"/>
      </div>
    </div>
  );
};

export default post;
