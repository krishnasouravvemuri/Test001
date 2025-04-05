import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ondc_logo from "./assets/images 2.png";
import layer_blur from "./assets/Group 2178.svg";

const ComingSoon = () => {
  const targetDate = new Date("2025-04-14T11:11:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Timer hits zero
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      <img className="absolute right-0 w-64 md:w-250 -z-10" src={layer_blur} alt="" />

      <div className="flex flex-col p-6 md:p-20 text-gray-800">
        <h1 className="text-xl md:text-2xl mb-2 font-[Lato]">
          We Are Almost There
        </h1>
        <h2 className="text-5xl md:text-8xl font-medium mb-4 font-[Montserrat] text-[#0C6478]">
          Coming <br /> Soon
        </h2>
        <p className="text-lg md:text-2xl mb-6 font-[Lato] max-w-md">
          Sarwam will make online selling easy for small businesses. Stay tuned
          for a smarter way to grow. Launching soon! 💙
        </p>

        <div className="flex flex-col md:flex-row md:items-start md:space-x-8 mb-6">
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
            {Object.keys(timeLeft).length > 0 &&
              Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="flex flex-col items-center mb-4 md:mb-0"
                >
                  <div className="flex items-center justify-center bg-[#0C6478] rounded-2xl shadow-lg w-16 h-20 md:w-25 md:h-30">
                    <span className="text-3xl md:text-6xl font-medium text-white font-[Montserrat]">
                      {value}
                    </span>
                  </div>
                  <span className="text-md md:text-xl font-medium capitalize mt-2 font-[Lato]">
                    {unit}
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-4 text-center md:text-left md:mt-8 mb-4 md:mb-4">
          <p className="text-gray-600">Powered By</p>
          <img
            src={ondc_logo}
            alt="ONDC Logo"
            className="w-20 md:w-24 mt-2 mx-auto md:mx-0"
          />
        </div>
      </div>

      <Footer className="z-index-1000"/>
    </>
  );
};

export default ComingSoon;
