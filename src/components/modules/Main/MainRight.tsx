import Banner from "../../elements/Main/Banner";
import Suggests from "../../elements/Main/Suggests";
import UserChart from "../../elements/Main/UserChart";

const MainRight = () => {
  return (
    <div className="py-10 px-5 lg:pl-0">
      <div className="font-lalezar text-3xl">صفحه اصلی</div>
      <div className="mt-10">
        <Banner />
        <UserChart />
        <Suggests />
      </div>
    </div>
  );
};

export default MainRight;
