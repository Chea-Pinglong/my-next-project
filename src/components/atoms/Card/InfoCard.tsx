"use client";
import React, { Dispatch, useEffect, SetStateAction, FC, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { userContext } from "@/Context/UserContext";

interface InfoCardProps {
  id: string;
  image: string;
  name: string;
  // selectCard: string | null;
  // onSelectCard: Dispatch<SetStateAction<string>>;
  // onDeleteCard: Dispatch<SetStateAction<string>>;
}

const InfoCard: FC<InfoCardProps> = ({
  id,
  name,
  image,
  // selectCard,
  // onSelectCard,
  // onDeleteCard,
}: InfoCardProps) => {
  const {selectCard, setSelectCard, handleDeleteUser} = useContext(userContext);

  console.log("selected card: ", selectCard)
  return (
    //Card
    <div
      onClick={() => {
        // Unselect Card
        if (selectCard == id) {
          setSelectCard("");
        } else {
          // Select Card
          setSelectCard(id);
        }
      }}
      className={
        selectCard == id
          ? "flex justify-between items-start w-[620px] bg-blue-400 text-white m-auto mt-5 p-2 border border-[#d6c2e7] rounded-lg "
          : "flex justify-between items-start w-[620px]  m-auto mt-5 p-2 border border-[#d6c2e7] rounded-lg hover:bg-gray-200"
      }
    >
      <div className="flex flex-row justify-center gap-5 ml-3">
        <div>
          <Image
            src={image}
            width={50}
            height={50}
            className="border rounded-full"
            alt="User's Photo"
          />
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-base text-[#33363F] font-sans capitalize">
            {name}
          </p>
          <Link
            href={`/user/${name}`}
            className="text-xs text-[#33363E] font-sans p-1 "
          >
            Preview
          </Link>
        </div>
      </div>
      <div>
        <button
          className="bg-red-500 px-2 py-1 rounded-md text-white "
          onClick={(e) => {
            handleDeleteUser(id);
            e.stopPropagation();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export { InfoCard };
