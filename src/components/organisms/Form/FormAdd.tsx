"use client";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { User } from "@/app/user/page";
import Image from "next/image";
import { Schema } from "@/components/validations";

interface FormAddProps {
  addNewUser: (user: User) => void;
}

const FormAdd: FC<FormAddProps> = ({ addNewUser }) => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    profile: "",
  });
  const [error, setError] = useState({
    username: "",
    profile: "",
  });
  const validateForm = async (name: string, value: any) => {
    try {
      await Schema.validateAt(name, { [name]: value });
      setError((pre) => ({ ...pre, [name]: "" }));
    } catch (error: any) {
      console.log("Error: ", error);
      setError((pre) => ({ ...pre, [name]: error.message }));
    }
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (error.profile) {
      return;
    }

    try {
      await Schema.validate(user, { abortEarly: false });

      const newId = Math.random().toString(36).substring(2, 8);
      const newUser = { ...user, id: newId };
      addNewUser((prevUser: any) => {
        return [...prevUser, newUser];
      });
    } catch (error) {
      console.log("Error: ", error);
      const fieldErrors: any = {};

      error.inner.forEach((err) => {
        fieldErrors[err.path] = err.message;
      });
      setError(fieldErrors);
      return;
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
    validateForm(name, value);
  };

  const handleOnUploadFile = (e: FormEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    validateForm(e.target.name, file);
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
      {error.username && (
        <div className="error-message text-red-500">{error.username}</div>
      )}
      <br />

      <label htmlFor="image">Image</label>
      <input
        className="border rounded-md border-black m-2"
        type="file"
        accept="image/*"
        name="profile"
        onChange={handleOnUploadFile}
      />
      {error.username && (
        <div className="error-message text-red-500">{error.profile}</div>
      )}
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
      <button className=" mt-3 border rounded-md border-slate-700 p-1 bg-slate-300 text-black">
        Submit
      </button>
    </form>
  );
};

export { FormAdd };

