"use client";
import React from "react";
import { Card } from "./Card";

const CardList = () => {
  const list = [
    {
      src: "assets/image/cambodiaBookFair.svg",

      title: "title 1",
      description: "desc 1",
      date: "15 August 2024",
      location: "Phnom Penh",
    },
    {
      src: "assets/image/cambodiaBookFair.svg",

      title: "title 2",
      description: "desc 2",
      date: "15 August 2024",
      location: "Phnom Penh",
    },
    {
      src: "assets/image/cambodiaBookFair.svg",

      title: "title 3",
      description: "desc 3",
      date: "15 August 2024",
      location: "Phnom Penh",
    },
    {
      src: "assets/image/cambodiaBookFair.svg",

      title: "title 4",
      description: "desc 4",
      date: "15 August 2024",
      location: "Phnom Penh",
    },
    {
      src: "assets/image/cambodiaBookFair.svg",

      title: "title 5",
      description: "desc 5",
      date: "15 August 2024",
      location: "Phnom Penh",
    },
  ];
  return (
    <div className="w-full h-full bg-white">
      {list.map((item, index) => (
        <Card
          key={index}
          src={item.src}
          alt={"alt"}
          title={item.title}
          description={item.description}
          date={item.date}
          location={item.location}
        />
      ))}
    </div>
  );
};

export { CardList };
