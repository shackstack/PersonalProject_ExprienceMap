import Navbar from 'components/navbar/Navbar';
import KakaoMap from 'components/map/KakaoMap';
import { Container, Layout } from 'util/GlobalStyle';
import { useState } from 'react';

const UserPage = () => {
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
  const GuList = [
    '전체',
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ];
  const [guState, setGuState] = useState(new Array(GuList.length));
  return (
    <Layout>
      <Container>
        <Navbar />
        <div className="w-full flex flex-col justify-center ">
          <div className="w-full flex justify-center p-3 text-xl text-[#b1aeae]">
            "마커를 클릭해보세요"
          </div>
          <div className=" px-12 lg:px-16 xl:px-20 2xl:px-24">
            <KakaoMap />
          </div>
          <div className="font-bold mt-5 text-lg py-3 px-12 lg:px-16 xl:px-20 2xl:px-24">
            지역별 카테고리
          </div>
          <div className=" px-12 lg:px-16 xl:px-20 2xl:px-24">
            {GuList.map((item) => {
              return (
                <button className="py-1 px-2 rounded-lg m-1 bg-gray-300 text-white">{item}</button>
              );
            })}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default UserPage;
