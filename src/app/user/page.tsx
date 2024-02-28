"use client";
import React, { useContext, useState } from "react";
import {
  FormAdd,
  InfoCardList,
  Modal,
  FormUpdate,
  SearchInput,
} from "@/components";
import { ValidationForm } from "@/components";
import { UserProvider } from "@/Context/UserContext";
import { userContext } from "@/Context/UserContext";

export interface User {
  id: string;
  username: string;
  profile: string;
}

export default function Home() {
  // const [users, setUsers] = useState<User[]>([]);
  // const [selectCard, setSelectCard] = useState("");
  // const selectedUser = users.filter((user) => {
  //   if (user.id === selectCard) {
  //     return user;
  //   }
  // });

  // const handleDeleteCard = (id: string) => {
  //   const deleteItem = users.filter((user) => user.id !== id);
  //   setUsers(deleteItem);
  // };
  return (
    // <div className="inline-block items-center justify-center mx-auto w-full ">
    //   <SearchInput />
    //   <InfoCardList
    //     onDeleteCard={handleDeleteCard}
    //     items={users}
    //     selectCard={selectCard}
    //     onSelectCard={setSelectCard}
    //   />
    //   <Modal selectCard={selectCard}>
    //     {selectedUser.length > 0 ? (
    //       <>
    //         <FormUpdate selectedUser={selectedUser[0]} updateUser={setUsers} />
    //       </>
    //     ) : (
    //       <>
    //         <ValidationForm addNewUser={setUsers} />
    //       </>
    //     )}
    //   </Modal>
    // </div>

    <UserProvider>
      <MyComponent />
    </UserProvider>
  );
}

const MyComponent  = () => {
  const {selectCard} = useContext(userContext);

  return(
    <div>
      <SearchInput/>
      <InfoCardList/>
      <Modal>
        {selectCard? <FormUpdate/> : <ValidationForm/>}
      </Modal>
    </div>
  )
}
