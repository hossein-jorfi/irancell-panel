import { CSSProperties } from "react";
import profileImage from "../../../assets/images/profile.png";

// Icon
import messageIcon from "../../../assets/icons/Message.svg";
import internetIcon from "../../../assets/icons/Internet Icon.svg";
import myIrancellLogo from "../../../assets/images/myIrancell.png";

const MainLeft = () => {
  // Chart
  const normalizedProgress = Math.min(Math.max(75, 0), 100);
  const outerRingStyles = {
    backgroundImage: `conic-gradient(#E4EBEC 0% ${
      100 - normalizedProgress
    }%, #fdc816 ${100 - normalizedProgress}% 100%)`,
  };
  const innerCircleStyles = {
    backgroundColor: "#fffcef",
    width: "80%", // Adjust the inner circle size as needed
    height: "80%",
    position: "absolute",
    top: "10%",
    left: "10%",
    borderRadius: "50%",
  };
  // Chart

  return (
    <div className="p-5 font-lalezar min-h-full flex flex-col">
      {/* Top Box */}
      <div className="bg-white rounded-2xl p-5 flex justify-start items-center">
        <div className="w-16 h-16 border-[5px] border-gold-400 rounded-full">
          <img src={profileImage} alt="profile image" />
        </div>
        <div className="flex flex-col mr-5 text-text-gray-700">
          <p>سلام، حسین جرفی</p>
          <p className="font-vazir" dir="ltr">
            +۹۸ ۹۰۱۵۳۰۴۹۱۲
          </p>
        </div>
      </div>
      {/* Top Box */}

      <div className="bg-gold-50 rounded-2xl flex flex-col items-center mt-6 p-5">
        <p className="text-xl">شارژ باقی مانده سیمکارت</p>
        {/* Ring */}
        <div className="w-40 h-40 relative mt-8">
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full"
            style={outerRingStyles}
          />
          <div style={innerCircleStyles as CSSProperties}></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-gold-50 flex items-center justify-center">
            <span className="text-xl font-vazir font-bold text-[#00a3ff]">
              ۶۰۰۰ تومان
            </span>
          </div>
        </div>
        <p
          className="text-lg cursor-pointer text-white bg-gold-400 px-2 py-1 rounded-xl mt-6"
          style={{
            boxShadow: "0 0 10px rgba(255, 215, 0, 0.7)",
          }}
        >
          سیمکارتت رو شارژ کن!
        </p>
        {/* Ring */}

        <div className="w-5/6 mt-10">
          <p className="mb-7">خدمات فعال</p>

          <div className="flex flex-col space-y-9">
            <div className="flex items-center font-vazir font-bold text-sm text-text-gray-700">
              <img
                src={messageIcon}
                alt="icon"
                className="w-[38px] h-[38px] rounded-xl bg-gold-400 bg-opacity-20 p-2"
              />
              <div className="flex flex-col justify-evenly mr-4">
                <p>بسته پیامک هفتگی</p>
                <p>تا تاریخ 31 خرداد 1400</p>
              </div>
            </div>
            <div className="flex items-center font-vazir font-bold text-sm text-text-gray-700">
              <img
                src={internetIcon}
                alt="icon"
                className="w-[38px] h-[38px] rounded-xl bg-gold-400 bg-opacity-20 p-2"
              />
              <div className="flex flex-col justify-evenly mr-4">
                <p>بسته اینترنت ماهانه</p>
                <p>تا تاریخ 12 خرداد 1400</p>
              </div>
            </div>
          </div>
        </div>

        {/* Downlaod */}
        <div className="w-full bg-white flex justify-between items-center rounded-xl p-5 mt-32">
          <p>اپلیکیشن ما رو دانلود کن!</p>
          <img src={myIrancellLogo} className="w-[50px]" alt="myIrancellLogo" />
        </div>
        {/* Downlaod */}
      </div>
    </div>
  );
};

export default MainLeft;
