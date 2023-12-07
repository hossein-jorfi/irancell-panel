import MainLeft from "./Main/MainLeft";
import MainRight from "./Main/MainRight";

const Main = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <div className="w-full lg:w-[65%] xl:w-[70%]">
        <MainRight />
      </div>
      <div className="w-full lg:w-[35%] xl:w-[30%]">
        <MainLeft />
      </div>
    </div>
  );
};

export default Main;
