import React, { Dispatch, useContext } from "react";
import { InfoCard } from "./InfoCard";
import { User } from "@/app/user/page";
import { userContext } from "@/Context/UserContext";

// interface InfoCardListProps {
//   items: User[];
//   selectCard: string;
//   onSelectCard: Dispatch<React.SetStateAction<string>>;
//   // onDeleteCard: (id: string) => void;
//   onDeleteCard: Dispatch<React.SetStateAction<string>>;
// }

const InfoCardList = (
//   {
//   items,
//   selectCard,
//   onSelectCard,
//   onDeleteCard,
// }: 
// InfoCardListProps
) => {
  const {users} = useContext(userContext)
  return (
    <div>
      {users.map((item, index) => (
        <InfoCard
          id={item.id}
          name={item.username}
          key={item.id || index}
          image={item.profile}
          // onSelectCard={onSelectCard}
          // selectCard={selectCard}
          // onDeleteCard={onDeleteCard}
        />
      ))}
    </div>
  );
};

export { InfoCardList };
