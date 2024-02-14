import React from "react";
import { InfoCard } from "./InfoCard";
import { User } from "@/app/user/page";
import Link from "next/link";

interface InfoCardListProps {
  items: User[];
  selectCard: string;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
  onDeleteCard: (id: string) =>void
}

const InfoCardList = ({
  items,
  selectCard,
  onSelectCard,
  onDeleteCard
}: InfoCardListProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <InfoCard
          id={item.id}
          name={item.username}
          key={item.id || index}
          image={item.profile}
          onSelectCard={onSelectCard}
          selectCard={selectCard}
          onDeleteCard={onDeleteCard}
        />
      ))}
    </div>
  );
};

export { InfoCardList };
