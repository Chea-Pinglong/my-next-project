import React, { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { User } from "@/app/user/page";
import { Schema } from "@/validations/Schema";
import { InputForm } from "./InputForm";
import { Input } from "./Input";
import Image from "next/image";
import { UserContext, UserModel } from "@/Context/UserContext";
import { validate } from "@/validations/validations";

interface FormAddProps {
  addNewUser: (user: UserModel) => "";
}

const ValidationForm = () => {
  const { addNewUser } = useContext(UserContext);
  const [user, setUser] = useState({
    username: "",
    profile: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    profile: "",
  });

  // const validateForm = async (name: string, value: string) => {
  //   try {
  //     await Schema.validateAt(name, { [name]: value });
  //     setError((prev) => ({ ...prev, [name]: "" }));
  //   } catch (error) {
  //     console.log("Error: ", error);
  //     setError((prev) => ({ ...prev, [name]: error.message }));
  //   }
  // };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (errors.profile) {
      return;
    }

    try {
      await validate(Schema, user);
      addNewUser(user);
    } catch (error: any) {
      console.log("Error: ", error);
      setErrors(error);
    }
  };

  // get value from input
  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
    try {
      await validate(Schema, user);
    } catch (error: any) {
      setErrors(error);
    }
  };

  const handleOnUploadFile = (
    e: FormEvent<HTMLInputElement | HTMLFormElement>
  ) => {
    const file = e.target.files[0];

    validate(e.target.name, file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prevUser: any) => {
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
        error={errors.username}
      />
      <br />
      <Input
        className="text-black m-2 border border-black"
        type="file"
        name="profile"
        onChange={handleOnUploadFile}
        label="profile"
        error={errors.profile}
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
