/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';
import { Typography } from "../Typography";
// DisplayFormData.js
export default function DisplayFormData({ formData }) {
    return (
      <div>
      <div>
      <div className="w-[320px] h-[392px] rounded-xl shadow-2xl relative">
        <div className="w-[100%] h-[200px] bg-black rounded-t-xl">
          <img src={URL.createObjectURL(formData.image)} alt="Selected" className='w-[100%] h-[200px] rounded-t-lg object-cover absolute'/> 
          <Image
            src="/fav.svg"
            alt=""
            width={30}
            height={30}
            className="relative float-end right-2 top-2"
          />
        </div>
        <div className="w-[100%] h-[192px] pl-5  text-black space-y-2">
          <Typography fontSize="h4" variant="bold">
            {formData.title}
          </Typography>
          <Typography fontSize="h6">{formData.description}</Typography>
          <div className="flex gap-3 items-center">
            <Image src="/date.svg" alt="" width={30} height={30} className="" />
            <Typography fontSize="h6" color="red">
              {formData.date}
            </Typography>
          </div>
          <div className="flex gap-3 items-center">
            <Image
              src="/location.svg"
              alt=""
              width={30}
              height={30}
              className=""
            />
            <Typography fontSize="h6" color="blue">
              {formData.location}
            </Typography>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  }
