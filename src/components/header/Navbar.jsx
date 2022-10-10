import React from 'react';
import Modal from 'components/modal/Modal';
import { useState } from 'react';
import Logo from './Logo';
import KakaoLoginImg from 'assets/KakaoLogin.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [modalState, setModalState] = useState(false);
  const onClickModalOpen = () => {
    modalState ? setModalState(false) : setModalState(true);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Logo />
      <div className="w-full flex justify-end">
        <button onClick={() => navigate('/스윙스/create')} className="text-xl text-[#a19d9d] px-10">
          깃발 꽂기
        </button>
        <button onClick={() => onClickModalOpen()} className="text-xl text-[#a19d9d] px-10">
          로그인
        </button>
      </div>
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
