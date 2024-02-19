import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { User } from "@/app/user";
import { Schema } from "@/components/validations";
import { InputForm } from "./InputForm";
import { Input } from "./Input";

interface ValidationFormProps {
  addNewUser: (user: User) => void;
}

const ValidationForm = ({ addNewUser }: ValidationFormProps) => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    profile: null,
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
      console.log("error: ", error);
      const fieldError = {};

      error.inner.forEach((e) => {
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
    <InputForm className="px-10 py-5 bg-white" onSubmit={handleOnSubmit}>
      <Input
        className="text-black border rounded-md border-balck m-2 focus:tring-2 outline-none px-5 [y-2"
        type="text"
        name="username"
        value={user.username}
        placeholder="username"
        onChange={handleOnChange}
        label="username"
        error={error.username}
      />

      <Input
        className="text-black"
        type="file"
        name="profile"
        placeholder="profile"
        onChange={handleOnUploadFile}
        label="profile"
        error={error.profile}
      />
      <button
        className="px-10 py-1 bg-green-500 rounded-full mt-5"
        type="submit"
      >
        Submit
      </button>
    </InputForm>
  );
};

export { ValidationForm };
