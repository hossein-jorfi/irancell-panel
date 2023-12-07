import banner from "../../../assets/images/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img src={banner} alt="banner" className="h-20 md:h-auto" />
        <div className="absolute left-4 top-[30%]">
          <p className="text font-lalezar text-xl xl:text-2xl">
            اینهمه بسته بی سابقست!
          </p>
          <button className="float-left bg-gold-400 p-1 rounded-md text-xs lg:text-sm mt-1 text-white">
            اینجا چه خبره!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
