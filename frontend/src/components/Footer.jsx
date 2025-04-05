import React from "react";
import sarwam_logo from "../assets/Group 12.png";
import sarwam from "../assets/Sarwam.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-[#D9EBE4] text-black pt-6 md:pt-15 max-w-8xl">
      <div className="flex flex-col gap-6 lg:flex-row md:flex-wrap md:justify-between md:gap-4 lg:flex-nowrap px-10 md:px-30">
        {/* Left Section - Logo & Description */}
        <div className="col-span-1 max-w-lg text-center md:text-left mx-auto md:mx-0">
          <img src={sarwam_logo} alt="Sarwam Logo" className="select-none mx-auto md:mx-0 mb-4" />
          <p className="mt-4 font-[Lato] text-sm md:text-base max-w-md mx-auto md:mx-0">
            Made in India, for India to simplify shopping, bill
            payments, travel, food, entertainment, and seamless selling for
            businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left mx-auto md:mx-0">
          <h3 className="font-bold mb-3 text-lg md:text-xl font-[Lato]">Quick Links</h3>
          <ul className="space-y-2 font-[Lato] text-sm md:text-base cursor-pointer">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/")}>About us</li>
            <li onClick={() => navigate("/")}>Products</li>
            <li onClick={() => navigate("/")}>Features</li>
            <li onClick={() => navigate("/team")}>Team</li>
            <li onClick={() => navigate("/careers")}>Careers</li>
          </ul>
        </div>

        {/* Download App */}
        <div className="text-center md:text-left mx-auto md:mx-0">
          <h3 className="font-bold mb-3 text-lg md:text-xl font-[Lato]">Download App</h3>
          <ul className="space-y-2 font-[Lato] text-sm md:text-base cursor-pointer">
            <li onClick={() => navigate("/seller_app")}>Sarwam Partner App</li>
            <li onClick={() => navigate("/seller_app")}>Sarwam Buyer App</li>
            <li onClick={() => navigate("/seller_app")}>Sarwam Seller App</li>
          </ul>
        </div>

        {/* Connect */}
        <div className="text-center md:text-left mx-auto md:mx-0">
          <h3 className="font-bold mb-3 text-lg md:text-xl font-[Lato]">Connect</h3>
          <ul className="space-y-2 font-[Lato] text-sm md:text-base cursor-pointer">
            <li onClick={() => window.open("https://www.instagram.com/sarwamofficial/")}>Instagram</li>
            <li onClick={() => window.open("https://x.com/sarwamofficial")}>X</li>
            <li onClick={() => window.open("https://www.linkedin.com/company/sarwam-technology/")}>LinkedIn</li>
            <li>support@sarwam.live</li>
          </ul>
        </div>
      </div>

      {/* Large "Sarwam" Background Text */}
      <h1 className="px-5 pt-[5vmin] flex items-center justify-center">
        <img src={sarwam} alt="Sarwam" />
      </h1>

      {/* Copyright Section */}
      <div className="bg-[#0C6478] text-white flex justify-center py-3 text-sm font-[Montserrat] text-center">
        Copyright © 2025 Sarwam Technologies Private Limited All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
