"use client";

import React, { SetStateAction, useState } from "react";

const Counter = () => {
  const [title, setTitle] = useState(''); // State to store input value
  const [description, setDescription] = useState('')

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleButtonClick = () => {
    const titleHeading = document.getElementById('titleHeading'); // Get the heading element
    const descHeading = document.getElementById('descHeading'); // Get the heading element
    if (titleHeading && descHeading) {
      titleHeading.innerText = title; // Set the heading text to the input value
      descHeading.innerText = description; // Set the heading text to the input value
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        className="text-black"
        onChange={handleTitle}
        placeholder="Enter text to paste..."
      />
      <input
        type="text"
        value={description}
        className="text-black"
        onChange={handleDescription}
        placeholder="Enter text to paste..."
      />
      <button onClick={handleButtonClick} className="bg-blue-500 rounded-lg p-3">Copy to Heading</button>
      <h1 id="titleHeading">Heading</h1>
      <h1 id="descHeading">Description</h1>
    </div>
  );
};

export { Counter };
