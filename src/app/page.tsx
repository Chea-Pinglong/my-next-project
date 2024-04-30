import { link } from "fs";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
     
        <Link
          href={"/user"}
          className="bg-blue-500 px-4 py-2 rounded font-bold hover:bg-blue-700 text-white text-3xl"
        >
          To user
        </Link>

        <Link
          href={"/form"}
          className="bg-green-500 px-4 py-2 rounded font-bold  text-white text-3xl"
        >
          To form
        </Link>
      </div>
    </div>
  );
};

export default page;
