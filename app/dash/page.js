"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const page = () => {
  const { data } = useSession();

  return (
    <div>
      {!data && <p className="text-center text-6xl">Loading...</p>}
      {data && (
        <div className="text-center">
          <div>{data?.user?.name || "no data"}</div>
          <div>{data?.user?._id || "no data"}</div>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default page;
