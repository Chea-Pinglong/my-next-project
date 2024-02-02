import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}
 
const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full rounded"
        width={50}
        height={50}
        src={imageUrl}
        alt="Image"
      />
      
      <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {title}
          </div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
         
      </div>
    </div>
  );
};

export {Card};
