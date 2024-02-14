"use client";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { User } from "@/app/user/page";
import Image from "next/image";

interface FormAddProps {
  addNewUser: (user: User) => void;
}

const FormAdd: FC<FormAddProps> = ({ addNewUser }) => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    profile: "",
  });

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = Math.random().toString(16).substring(2,8);
    const newUser = { ...user, id: newId };
    addNewUser((prevUsers: any) => {
      return [...prevUsers, newUser];
    });
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Event ", e);
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOnUploadFile = (e: FormEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prevUser) => {
        return {
          ...prevUser,
          profile: imageUrl,
        };
      });
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className="text-blue-500 border rounded-md border-black m-2 focus:ring-2 outline-none px-2"
        type="text"
        id="name"
        name="username"
        value={user.username}
        onChange={handleOnChange}
      />
      <br />

      <label htmlFor="image">Image</label>
      <input
        className="border rounded-md border-black m-2"
        type="file"
        accept="image/*"
        name="profile"
        onChange={handleOnUploadFile}
      />
      <br />
      
      <label htmlFor="preview">Image Preview</label>
      <Image
        src={user.profile}
        alt="Profile Image"
        height={120}
        width={120}
        className="ml-4 rounded-2xl"
      />
      <br />
      <button className="bg-green-500 px-3 py-2 rounded-2xl">Submit</button>
    </form>
  );
};

export { FormAdd };
