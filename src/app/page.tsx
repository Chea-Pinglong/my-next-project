import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-row justify-center items-center text-5xl w-full h-screen hover:text-blue-500">
      <Link href={"/user"}>To User</Link>
    </div>
  );
};

export default page;
