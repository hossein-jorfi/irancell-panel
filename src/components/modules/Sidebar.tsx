import TopMenu from "../elements/SideBar/TopMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartPie,
  faChartColumn,
  faBell,
  faList,
  faChartLine,
  faFileLines,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const pathName = useLocation().pathname;
  return (
    <div className="bg-white min-h-full">
      <TopMenu />
      <div className="mt-10 text-lg">
        <div className="flex items-center justify-between pr-10 md:pr-16">
          <div
            className={`flex items-center text-gray-500 font-extralight ${
              pathName === "/" && "text-text-gray-700 font-normal"
            }`}
          >
            <FontAwesomeIcon icon={faHouse} />
            <Link to="/" className="mr-3">
              صفحه اصلی
            </Link>
          </div>
          {pathName === "/" && (
            <div className="h-10 w-1 bg-gold-400 rounded-md"></div>
          )}
        </div>

        {/* SERVICES */}
        <p className="text-sm text-gray-300 pr-10 md:pr-16 mt-7">سرویس‌ها</p>
        <div className="flex items-center justify-between pr-10 md:pr-16">
          <div
            className={`mt-2 flex items-center text-gray-500 font-extralight ${
              pathName === "/packages" && "text-text-gray-700 font-normal"
            }`}
          >
            <FontAwesomeIcon icon={faChartPie} />
            <Link to={"/packages"} className="mr-3">
              بسته های فعال
            </Link>
          </div>
          {pathName === "/packages" && (
            <div className="h-10 w-1 bg-gold-400 rounded-md"></div>
          )}
        </div>

        <div className="flex items-center justify-between pr-10 md:pr-16">
          <div className="mt-2 flex items-center text-gray-500 font-extralight">
            <FontAwesomeIcon icon={faChartColumn} />
            <p className="mr-3">کارکرد و فروش</p>
          </div>
        </div>

        <div className="flex items-center justify-between pr-10 md:pr-16">
          <div className="mt-2 flex items-center text-gray-500 font-extralight">
            <FontAwesomeIcon icon={faBell} />
            <p className="mr-3">خدمات</p>
          </div>
        </div>
        {/* SERVICES */}

        {/* MANAGE */}
        <p className="text-sm text-gray-300 pr-10 md:pr-16 mt-7">مدیریت</p>
        <div className="flex items-center justify-between pr-10 md:pr-16">
          <div className="mt-2 flex items-center text-gray-500 font-extralight">
            <FontAwesomeIcon icon={faList} />
            <p className="mr-3">مدیریت خدمات</p>
          </div>
        </div>

        <div className="flex items-center justify-between pr-10 md:pr-16">
          <div className="mt-2 flex items-center text-gray-500 font-extralight">
            <FontAwesomeIcon icon={faChartLine} />
            <p className="mr-3">مدیریت سیمکارت</p>
          </div>
        </div>
        {/* MANAGE */}

        {/* BOTTOM */}
        <div className="flex items-center justify-between pr-10 md:pr-16 mt-7">
          <div className="mt-2 flex items-center text-gray-500 font-extralight">
            <FontAwesomeIcon icon={faFileLines} />
            <p className="mr-3">سوالات متداول</p>
          </div>
        </div>

        <div className="flex items-center justify-between pr-10 md:pr-16">
          <div className="mt-2 flex items-center text-gray-500 font-extralight">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="mr-3">ارتباط با ما</p>
          </div>
        </div>
        {/* BOTTOM */}
      </div>
    </div>
  );
};

export default Sidebar;
