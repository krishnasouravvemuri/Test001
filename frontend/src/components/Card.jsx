import React from "react";
import { ArrowRight } from "lucide-react";
import mandala from "../assets/Mandalalogo1 1.png";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description }) => {
  const navigate = useNavigate();

  return (
    <div className="group p-6 pt-6 pb-15 md:pb-0 rounded-2xl shadow-lg transition-all duration-300 bg-[#E9E8E8] text-black hover:bg-[#0C6478] hover:text-white w-auto lg:h-95 md:h-60 flex flex-col flex-grow-1 flex-1 relative" onClick={() => navigate("/seller_app")}>
      <img className="absolute w-50 transform rotate-90 -bottom-8 group-hover:invert select-none" src={mandala} alt="" />
      <h2 className="text-3xl font-bold font-[Montserrat]">{title}</h2>
      <p className="mt-3 font-[Lato]">{description}</p>
      <button className="mt-4 flex items-center justify-between absolute bottom-3 md:bottom-5 right-5">
        <p className=" font-[Lato] mr-2">See More</p>
        <span className="p-2 bg-white rounded-full shadow-md text-black">
          <ArrowRight className="transform rotate-315" />
        </span>
      </button>
    </div>
  );
};

export default Card;
