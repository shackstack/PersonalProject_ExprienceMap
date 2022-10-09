import LogoImg from 'assets/Logo.png';

const Logo = () => {
  return (
    <div className="flex justify-center items-center p-3">
      <img className="p-2 w-14 h-14" src={LogoImg}></img>
      <div className="text-xl font-bold ">나의 서울 맛집 지도</div>
    </div>
  );
};

export default Logo;
