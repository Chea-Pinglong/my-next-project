import React from "react";
import { useState } from "react";
const ShowModal = (props) => {
  return (
    <>
      <div className="absolute top-10 center bg-green-400 w-[400px] h-[200px]">
        <button
          className="w-[200px] h-[50px] border-2 bg-red-600 fix left-0 text-black"
          onClick={() => props.setIsModal(false)}
        >
          Close me now
        </button>
      </div>
    </>
  );
};

export { ShowModal };
