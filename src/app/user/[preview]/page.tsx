"use client";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
  const route = useParams();
  return (
    <div>
      <h1>This is the blog post: {route.preview}</h1>
    </div>
  );
};

export default page;
