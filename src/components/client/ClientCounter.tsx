"use client";

import { useState } from "react";

const ClientCounter = () => {
  const [count, setCount] = useState(0);

  function increase(){
    setCount(count + 1)
  }
  function decrease(){
    setCount(count - 1)
  }
  return (
    <div className="flex flex-col justify-center h-screen items-center ">
      <p className="text-xl font-bold">You clicked {count} times</p>
       
      <div className="flex justify-around w-1/3">
        <button className="bg-red-500 rounded-md px-5 py-2" onClick={decrease}>Decrease</button>
        <button className="bg-green-500 rounded-md px-5 py-2" onClick={increase}>Increase</button>
      </div>
    </div>
  );
};

export default ClientCounter;
