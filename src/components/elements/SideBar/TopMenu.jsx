import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import myIrancellLogo from "../../../assets/images/myIrancell.png";
import icon from "../../../assets/icons/Message.svg";

const TopMenu = () => {
  return (
    <div className="flex flex-col items-center py-7 px-6">
      <div>
        <div className="flex items-center flex-row-reverse space-x-2">
          <div className="text-xl font-bold bg-gold-400 p-1.5 rounded-2xl">
            ایرانسل من
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={myIrancellLogo} alt="my irancell" />
          </div>
        </div>
      </div>

      {/* Sreach */}
      <div className="mt-14 relative w-full">
        <input
          type="text"
          placeholder="جستوجو"
          className="placeholder-gray-300 w-full text-gray-500 border-2 py-2 px-4 rounded-xl outline-none focus:border-gray-400"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute text-gray-300 left-3 top-[15px]"
        />
      </div>
    </div>
  );
};

export default TopMenu;
