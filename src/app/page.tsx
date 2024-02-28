import { link } from "fs";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div>
     
        <Link
          href={"/user"}
          className="bg-blue-500 px-4 py-2 rounded font-bold hover:bg-blue-700 text-white text-3xl"
        >
          To user
        </Link>
      </div>
    </div>
  );
};

export default page;
