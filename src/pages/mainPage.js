import SideBar from '../components/sideBar';
import { Outlet } from 'react-router-dom';
const MainPage = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="mt-20 md:mt-0 mx-5 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainPage;
