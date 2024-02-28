'use client'
import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

// Define the context type (optional, but recommended for type safety)
export interface UserModel{
  id: string;
  username: string;
  profile: string
}

interface UserContextProps{
  users: UserModel[];
  setUsers: Dispatch<SetStateAction<UserModel[]>>
}
// Create the context with default value
const userContext = createContext<UserContextProps>({
  users: [],
  setUsers: () => {},
})

const UserProvider = ({children}: {children: ReactNode})=>{
  const [users, setUsers] = useState<UserModel[]>([{
    id:"",
    username: "",
    profile: "",
  }])

  const handleFormAdd = (add)=>{
    const newId = Math.random().toString(36).substring(2,8);
    const newUser = {...users, id: newId}
    setUsers((pre: any) =>{
      return [...pre, newUser];
    })
  }

  const contextValue = {
    users,
    setUsers,
    handleFormAdd
  }

  return(
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  )
}

export {userContext, UserProvider}


