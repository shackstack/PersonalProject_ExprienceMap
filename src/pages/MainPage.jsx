import UserCard from 'components/card/UserCard';
import Moon from 'assets/스윙스.jpg';
import Navbar from 'components/header/Navbar';
import { Container, Layout } from 'util/GlobalStyle';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <Layout>
      <Container>
        <Navbar />
        <div className="w-full flex justify-center p-3 text-xl text-[#b1aeae]">
          "나의 맛집 기록해 보세요"
        </div>
        <div className="grid grid-cols-4">
          <Link to="/스윙스">
            <UserCard img={Moon} name={'스윙스'} />
          </Link>
          <Link to="/스윙스">
            <UserCard img={Moon} name={'스윙스'} />
          </Link>
          <Link to="/스윙스">
            <UserCard img={Moon} name={'스윙스'} />
          </Link>
          <Link to="/스윙스">
            <UserCard img={Moon} name={'스윙스'} />
          </Link>
          <Link to="/스윙스">
            <UserCard img={Moon} name={'스윙스'} />
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default MainPage;
