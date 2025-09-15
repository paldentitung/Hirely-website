import React from "react";

const Modal = ({ setOpenModal, openModal, children }) => {
  return (
    <>
      {openModal && (
        <div className="fixed min-h-screen w-full inset-0 z-50 bg-black/50  flex justify-center items-center">
          <div className="text-white w-full max-w-[700px] flex justify-center items-center flex-col gap-5">
            {children}
          </div>
          <button
            onClick={() => setOpenModal(false)}
            className=" absolute top-5 right-5 text-2xl text-white bg-black w-10 h-10  rounded-md transition-all duration-300 hover:scale-110 hover:cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
