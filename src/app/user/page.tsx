"use client";
import React, { useState } from "react";
import {
  FormAdd,
  InfoCardList,
  Modal,
  FormUpdate,
  SearchInput,
} from "@/components";

export interface User {
  id: string;
  username: string;
  profile: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectCard, setSelectCard] = useState("");
  const selectedUser = users.filter((user) => {
    if (user.id === selectCard) {
      return user;
    }
  });

  const handleDeleteCard = (id: string) => {
    const deleteItem = users.filter((user) => user.id !== id);
    setUsers(deleteItem);
  };
  return (
    <div className="inline-block items-center justify-center mx-auto w-full ">
      <SearchInput />
      <InfoCardList
        onDeleteCard={handleDeleteCard}
        items={users}
        selectCard={selectCard}
        onSelectCard={setSelectCard}
      />
      <Modal selectCard={selectCard}>
        {selectedUser.length > 0 ? (
          <>
            <FormUpdate selectedUser={selectedUser[0]} updateUser={setUsers} />
          </>
        ) : (
          <>
            <FormAdd addNewUser={setUsers} />
          </>
        )}
      </Modal>
    </div>
  );
}
