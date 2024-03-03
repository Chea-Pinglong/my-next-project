"use client";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

// Define the context type (optional, but recommended for type safety)
export interface UserModel {
  id: string;
  username: string;
  profile: string | null;
}

export interface UserInput {
  username: string;
  profile: string | null;
}

// check
interface UserContextProps {
  users: UserModel[];
  selectCard: string;
  setUsers: Dispatch<SetStateAction<UserModel[]>>;
  setSelectCard: Dispatch<SetStateAction<string>>;
  addNewUser: (user: UserInput) => void;
  updateUser: (user: UserInput, selectCard: string) => void;
  handleDeleteUser: (id: string) => void;
  handleDeleteOther: (id: string)=> void
}
// Create the context with default value
const UserContext = createContext<UserContextProps>({
  users: [],
  selectCard: "",
  setUsers: () => {},
  setSelectCard: () => {},
  addNewUser: () => {},
  updateUser: () => {},
  handleDeleteUser: () => {},
  handleDeleteOther: ()=>{}
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<UserModel[]>([]);

  const [selectCard, setSelectCard] = useState<string>("");

  // Function to add new user in list of users.

  const addNewUser = (user: UserInput) => {
    const newId = Math.random().toString(36).substring(2, 8);
    const newUser = { ...user, id: newId };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  // const handleFormAdd = (add)=>{
  //   const newId = Math.random().toString(36).substring(2,8);
  //   const newUser = {...users, id: newId}
  //   setUsers((pre: any) =>{
  //     return [...pre, newUser];
  //   })
  // }

  // const contextValue = {
  //   users,
  //   setUsers,
  //   handleFormAdd
  // }

  const updateUser = (user: UserInput, selectCard: string) => {
    setUsers((pre) => {
      return pre.map((pre) => {
        if (pre.id === selectCard) {
          return {
            ...pre,
            ...user,
          };
        }
        return pre;
      });
    });
  };

  const handleDeleteUser = (id: string) => {
    const userDelete = users.filter((item) => item.id !== id);

    if (userDelete.length === users.length) {
      return;
    }
    setUsers(userDelete);
  };

  const handleDeleteOther = (id: string)=>{
    const otherDelete = users.filter((item)=> item.id == id);
    setUsers(otherDelete)
  }

  const contextValue = {
    users,
    setUsers,
    addNewUser,
    setSelectCard,
    selectCard,
    updateUser,
    handleDeleteUser,
    handleDeleteOther
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
