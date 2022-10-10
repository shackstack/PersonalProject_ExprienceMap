import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = ({ onConfirm }) => {
  return (
    <div className="z-50 w-full h-full fixed top-0 left-0 bg-modalBackground" onClick={onConfirm} />
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div
      className={`z-50 w-1/3 h-3/5 xl:w-1/4 xl:h-1/2 rounded-lg bg-white top-1/2 left-1/2 fixed translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center p-5`}
    >
      {children}
    </div>
  );
};

const Modal = ({ children, onConfirm }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;
