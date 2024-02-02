"use client";

import React, { useEffect, useState } from "react";

export default function ClientComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const result = await data.json();
      setData(result);
    }
    fetchData();
  });

  return (
    <div>
      <p>Client Component</p>

      {data.map((item, index) => (
        <ul key={index}>
        <li>{item.id}</li>
      </ul> 
      ))}
    </div>
  );
}
