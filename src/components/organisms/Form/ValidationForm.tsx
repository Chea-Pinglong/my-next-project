import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { User } from "@/app/user/page";
import { Schema } from "@/validations";
import { InputForm } from "./InputForm";
import { Input } from "./Input";
import Image from "next/image";

interface ValidationFormProps {
  addNewUser: (user: User) => "";
}

const ValidationForm = ({ addNewUser }: ValidationFormProps) => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    profile: "",
  });
  const [error, setError] = useState({
    username: "",
    profile: "",
  });

  const validateForm = async (name: string, value: string) => {
    try {
      await Schema.validateAt(name, { [name]: value });
      setError((prev) => ({ ...prev, [name]: "" }));
    } catch (error) {
      console.log("Error: ", error);
      setError((prev) => ({ ...prev, [name]: error.message }));
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
      addNewUser((prevUsers: any) => {
        return [...prevUsers, newUser];
      });
    } catch (error) {
      console.log("Error: ", error);
      const fieldError = {};

      error.inner.forEach((e: any) => {
        fieldError[e.path] = e.message;
      });
      setError(fieldError);
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
    <InputForm onSubmit={handleOnSubmit}>
      <Input
        className="text-black border rounded-md border-black m-2 outline-none px-2 "
        type="text"
        name="username"
        value={user.username}
        onChange={handleOnChange}
        label="username"
        error={error.username}
      />
      <br />
      <Input
        className="text-black m-2 border border-black"
        type="file"
        name="profile"
        onChange={handleOnUploadFile}
        label="profile"
        error={error.profile}
      />

      {user.profile != "" ? (
        <>
          <div className="flex text-black">Profile</div>
          <Image
            className="rounded-md"
            src={user.profile}
            alt={""}
            width={150}
            height={150}
          />
        </>
      ) : (
        <></>
      )}

      <button
        className=" mt-3 border rounded-md border-slate-700 py-2 px-4 bg-slate-300 text-black"
        type="submit"
      >
        Submit
      </button>
    </InputForm>
  );
};

export { ValidationForm };
