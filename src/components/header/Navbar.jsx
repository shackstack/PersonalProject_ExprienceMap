import React from 'react';
import Modal from 'components/modal/Modal';
import { useState } from 'react';
import Logo from './Logo';
import KakaoLoginImg from 'assets/KakaoLogin.png';

const Navbar = () => {
  const [modalState, setModalState] = useState(false);
  const onClickModalOpen = () => {
    modalState ? setModalState(false) : setModalState(true);
  };
  return (
    <div>
      <div className="w-full flex justify-end">
        <button
          onClick={() => onClickModalOpen()}
          className="fixed text-xl text-[#a19d9d] py-5 px-10"
        >
          로그인
        </button>
      </div>
      <Logo />
      {modalState && (
        <Modal
          onConfirm={() => setModalState(false)}
          children={
            <div className="">
              <div className="absolute inset-x-0 top-10">
                <Logo></Logo>
              </div>
              <button className="mt-40">
                <img src={KakaoLoginImg} />
              </button>
              <button
                onClick={() => setModalState(false)}
                className="absolute inset-x-0 bottom-5 text-[#a2a1a1]"
              >
                닫기
              </button>
            </div>
          }
        />
      )}
    </div>
  );
};
export default Navbar;
