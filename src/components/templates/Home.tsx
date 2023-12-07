import Main from "../modules/Main";
import Sidebar from "../modules/Sidebar";

const Home = () => {
  return (
    <div className="flex justify-between 2xl:container min-h-screen">
      <div className="w-1/3 lg:w-[20%]">
        <Sidebar />
      </div>
      <div className="w-2/3 lg:w-[80%]">
        <Main />
      </div>
    </div>
  );
};

export default Home;
