import { faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="bg-white min-h-full">
      <div className="flex flex-col items-center py-5 px-10">
        {/* Top */}
        <div className="flex items-center flex-row-reverse space-x-2">
          <div className="text-xl font-bold bg-gold-400 p-1.5 rounded-2xl">
            ایرانسل من
          </div>
          <div className="w-10 h-10 border-2 rounded-full"></div>
        </div>
        {/* Top */}

        {/* Search */}
        <div className="mt-14 relative w-full">
          <input
            type="text"
            placeholder="جستوجو"
            className="placeholder-gray-300 w-full text-gray-500 border-2 p-4 rounded-xl outline-none focus:border-gray-400"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute text-gray-300 left-3 top-[22px]"
          />
        </div>
        {/* Search */}
      </div>
      {/* Items */}
      <div className="mt-10 text-lg">
        <div className="flex items-center justify-between border pr-10 md:pr-16">
          <div className="flex">
            <FontAwesomeIcon icon={faHouse} />
            <p>صفحه اصلی</p>
          </div>
          <div className="h-10 w-1 bg-gold-400 rounded-md"></div>
        </div>
      </div>
      {/* Items */}
    </div>
  );
};

export default Sidebar;
