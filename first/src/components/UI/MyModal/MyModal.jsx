import React, { Component } from "react";
import modal from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [modal.myModal];
  if (visible) {
    rootClasses.push(modal.active);
  }

  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={modal.myModalContent}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
