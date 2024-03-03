import { User } from "@/app/user/page";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  FormEvent,
  ChangeEvent,
  useContext,
} from "react";
import Image from "next/image";
import { UserContext, UserModel } from "@/Context/UserContext";

// interface FormAddProps {
//   updateUser: Dispatch<SetStateAction<User[]>>;
//   selectedUser: User;
// }

const FormUpdate = () => {
 const {users, selectCard,updateUser} = useContext(UserContext);

 const selectedUser = users.find((user)=>user.id == selectCard) as UserModel;

  const [user, setUser] = useState({
    username: selectedUser.username,
    profile: selectedUser.profile,
  })

 const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // updateUser((prevUsers) => {
    //   return prevUsers.map((prevUser) => {
    //     if (prevUser.id === selectedUser.id) {
    //       return {
    //         ...prevUser,
    //         ...user,
    //       };
    //     }
    //     return prevUser;
    //   });
    // });
    updateUser(user,selectCard);
  };

  // Get the value from the input fields:
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOnUploadFile = (e: FormEvent<HTMLInputElement | HTMLFormElement>) => {
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

  const handleRemoveFile = () => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        profile: "",
      };
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name</label>
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

      <label htmlFor="image">Image</label>
      {selectedUser.profile ? (
        <div className="relative">
          <Image
            src={selectedUser.profile}
            alt={"profile"}
            width={120}
            height={120}
            objectFit="cover"
          />
          <button
            className=" bg-red-500 w-8 h-8 my-5 rounded-full"
            onClick={handleRemoveFile}
          >
            &times;
          </button>
        </div>
      ) : (
        <input
          type="file"
          className="border rounded-md border-black m-2"
          accept="image/*"
          name="profile"
          onChange={handleOnUploadFile}
        />
      )}
      <div className="flex justify-center">
        <button className="w-[100px] h-[40px] text-white bg-cyan-700 rounded-md ml-2">
          Update
        </button>
      </div>
    </form>
  );
};

export { FormUpdate };
