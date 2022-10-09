import Logo from 'components/header/Logo';
import KakaoMap from 'components/KakaoMap';
import { Container, Layout } from 'util/GlobalStyle';

const Home = () => {
  const categoryList = [
    '전체',
    '돈까스',
    '일식',
    '고기',
    '프랜차이즈',
    '중식',
    '양식',
    '파스타',
    '족발',
  ];
  return (
    <Layout>
      <Container>
        <Logo></Logo>
        <div className="w-full flex flex-col justify-center mt-3 ">
          <div className="w-full flex justify-center p-3 text-xl text-[#b1aeae]">
            "마커를 클릭해보세요"
          </div>
          <div className="flex flex-col justify-center outline-2 outline-pink-200 shadow-xl shadow-[#c2b1c2] rounded">
            <KakaoMap />
          </div>
        </div>
        {/* <div className="font-bold mt-5 text-lg px-40">카테고리</div>
        <div className="px-40">
          {categoryList.map((item) => {
            return (
              <button className="py-1 px-2 rounded-lg m-2 bg-gray-300 text-white">{item}</button>
            );
          })}
        </div> */}
      </Container>
    </Layout>
  );
};

export default Home;
