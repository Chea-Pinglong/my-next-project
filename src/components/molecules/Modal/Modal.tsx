import React, { FC, ReactNode, useContext, useState } from "react";
import { motion } from "framer-motion";
import { FloatingButton } from "@/components";
import { UserContext } from "@/Context/UserContext";

interface ModalProps {
  children?: ReactNode;
  selectCard?: string;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { selectCard } = useContext(UserContext);
  return (
    <>
      <FloatingButton
        position="bottom-left"
        onClick={() => setIsShowModal(true)}
      >
        {selectCard ? "Edit" : "Add"}
      </FloatingButton>

      {/* <FloatingButton position="top-left" size="large">
        {selectCard ? "Delete" : ""}
      </FloatingButton> */}

      {selectCard ? (
        <FloatingButton position="top-left">
          Delete all accept this{" "}
        </FloatingButton>
      ) : (
        ""
      )}

      {isShowModal && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="fixed bg-indigo-600 text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5"
          >
            <button
              onClick={() => setIsShowModal((sideBar) => !sideBar)}
              className="bg-white text-red-800 h-8 w-8 block mb-2 mt-5 rounded-full"
            >
              &times;
            </button>
            <div>{children}</div>
          </motion.div>
        </>
      )}
    </>
  );
};

export { Modal };
