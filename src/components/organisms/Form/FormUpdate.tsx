import { User } from "@/app/user/page";
import React, { Dispatch, FC, SetStateAction, useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";

interface FormAddProps {
  updateUser: Dispatch<SetStateAction<User[]>>;
  selectedUser: User;
}

const FormUpdate: FC<FormAddProps> = ({updateUser, selectedUser}) => {
  const [user, setUser] = useState({
    username: selectedUser.username,
    profile: selectedUser.profile,
  });

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    updateUser((prevUsers) =>{
      return prevUsers.map((prevUser)=>{
        if(prevUser.id === selectedUser.id){
          return {
            ...prevUser,
            ...user
          }
        }
        return prevUser
      })
    })
  };
  
  // Get the value from the input fields: 
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name] : e.target.value,
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

  const handleRemoveFile = () =>{
     setUser((prevUser) =>{
      return {
        ...prevUser,
        profile: "",
      }
     })
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        className="text-black border rounded-md border-black m-2 focus:ring-2 outline-none px-2"
        type="text"
        id="name"
        name="username"
        defaultValue={selectedUser.username}
        value={user.username}
        onChange={handleOnChange}
      />
      <br />

      <label htmlFor="image">Image:</label>
      {selectedUser.profile ? (
        <div className="relative">
          <Image src={selectedUser.profile} alt={"profile"} width={120} height={120} objectFit="cover" />
          <button className="absolute bg-red-500" onClick={handleRemoveFile}>
            &times;
          </button>
        </div>
      ): (
        <input 
          type="file" 
          className="border rounded-md border-black m-2"
          accept="image/*"
          name="profile"
          onChange={handleOnUploadFile}
          />
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
      <button>Update</button>
    </form>
  );
};

export { FormUpdate };