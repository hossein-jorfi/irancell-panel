import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import MainLeft from "./Main/MainLeft";
import MainRight from "./Main/MainRight";
import Packages from "./Main/Packages";

const Main = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <MainRight />,
  //   },
  //   {
  //     path: "/packages",
  //     element: <Packages />,
  //   },
  // ]);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <div className="w-full lg:w-[65%] xl:w-[70%]">
        {/* <MainRight /> */}
        {/* <RouterProvider router={router} /> */}
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
