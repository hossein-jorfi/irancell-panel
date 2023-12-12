import { Route, Routes, useParams } from "react-router-dom";
import MainLeft from "./Main/MainLeft";
import MainRight from "./Main/MainRight";
import Packages from "./Main/Packages";
import { useUserStore } from "../../store";
import { useEffect } from "react";

const Main = () => {
  const user = useUserStore((state) => state.user);
  const fetchUser = useUserStore((state) => state.fetchUser);
  useEffect(() => {
    fetchUser("token1");
  }, []);
  console.log(user);

  const params = useParams()
  console.log(params)

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <div className="w-full lg:w-[65%] xl:w-[70%]">
        <Routes>
          <Route path="/" element={<MainRight />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </div>
      <div className="w-full lg:w-[35%] xl:w-[30%]">
        <MainLeft />
      </div>
    </div>
  );
};

export default Main;
