import { Typography } from "@/components";
import Image from "next/image";
import React, { useState } from "react";

interface CardProps {
  id?: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

const Card: React.FC<CardProps> = ({
  src,
  alt,
  title,
  description,
  date,
  location,
}) => {



  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="h-[375px] w-[320px] space-y-2 rounded-[10px]  shadow-lg relative">
        <Image
          className="rounded-t-[10px]"
          src={src}
          alt={alt}
          width={320}
          height={200}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute top-0 right-2 fill-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>

        <div className="px-[10px] space-y-2">
          <Typography fontSize="h5" variant="bold">
            {title}
          </Typography>
          <Typography fontSize="h6" className="line-clamp-2 ">
            {description}
          </Typography>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M15 23C19.4 23 23 19.4 23 15C23 10.6 19.4 7 15 7C10.6 7 7 10.6 7 15C7 19.4 10.6 23 15 23ZM15 5C20.5 5 25 9.5 25 15C25 20.5 20.5 25 15 25C9.5 25 5 20.5 5 15C5 9.5 9.5 5 15 5ZM20 14.5V16H14V10H15.5V14.5H20Z"
                fill="#828282"
              />
            </svg>
            <Typography fontSize="h6" color="blue" className="pl-[5px]">
              {date}
            </Typography>
          </div>
          <div className="flex items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 9.5C15.7578 9.5 16.4845 9.76339 17.0203 10.2322C17.5561 10.7011 17.8571 11.337 17.8571 12C17.8571 12.3283 17.7832 12.6534 17.6397 12.9567C17.4961 13.26 17.2856 13.5356 17.0203 13.7678C16.755 13.9999 16.44 14.1841 16.0934 14.3097C15.7467 14.4353 15.3752 14.5 15 14.5C14.2422 14.5 13.5155 14.2366 12.9797 13.7678C12.4439 13.2989 12.1429 12.663 12.1429 12C12.1429 11.337 12.4439 10.7011 12.9797 10.2322C13.5155 9.76339 14.2422 9.5 15 9.5ZM15 5C17.1217 5 19.1566 5.7375 20.6569 7.05025C22.1571 8.36301 23 10.1435 23 12C23 17.25 15 25 15 25C15 25 7 17.25 7 12C7 10.1435 7.84285 8.36301 9.34315 7.05025C10.8434 5.7375 12.8783 5 15 5ZM15 7C13.4845 7 12.031 7.52678 10.9594 8.46447C9.88775 9.40215 9.28571 10.6739 9.28571 12C9.28571 13 9.28571 15 15 21.71C20.7143 15 20.7143 13 20.7143 12C20.7143 10.6739 20.1122 9.40215 19.0406 8.46447C17.969 7.52678 16.5155 7 15 7Z"
                fill="#828282"
              />
            </svg>
            <Typography fontSize="h6" color="red" className="pl-[5px]">
              {location}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Card}
