import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import sarwam_logo from "../assets/Group 12.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-[170px] shadow-md font-[Montserrat] w-full bg-opacity-80">
      <div className="container mx-auto px-4 lg:px-15 flex justify-between items-center font-[Montserrat] text-xl">
        <div className="text-2xl font-bold">
          <img onClick={() => navigate("/")} className="w-30 cursor-pointer" src={sarwam_logo} alt="" />
        </div>
        <nav className="hidden lg:flex space-x-10 font-medium cursor-pointer">
          <Link to="home" smooth={true} duration={500} className="hover:text-gray-600" onClick={() => navigate("/")}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-gray-600" onClick={() => navigate("/")}>
            About us
          </Link>
          <Link to="features" smooth={true} duration={500} className="hover:text-gray-600" onClick={() => navigate("/")}>
            Features
          </Link>
          <Link to="products" smooth={true} duration={500} className="hover:text-gray-600" onClick={() => navigate("/")}>
            Products
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-gray-600" onClick={() => navigate("/")}>
            Contact us
          </Link>
        </nav>
        <button className="hidden lg:block bg-[#0C6478] text-white px-4 py-2 rounded-xl hover:bg-[#0C6478] text-lg" onClick={() => navigate("/join_now")}>
          Join Now
        </button>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <Link to="home" smooth={true} duration={500} className="hover:text-gray-600" onClick={() => navigate("/")}>
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="hover:text-gray-600" onClick={() => navigate("/")}>
              About us
            </Link>
            <Link to="features" smooth={true} duration={500} className="hover:text-gray-600" onClick={() => navigate("/")}>
              Features
            </Link>
            <Link to="products" smooth={true} duration={500} className="hover:text-gray-600" onClick={() => navigate("/")}>
              Products
            </Link>
            <Link to="contact" smooth={true} duration={500} className="hover:text-gray-600" onClick={() => navigate("/")}>
              Contact us
            </Link>
            <button className="bg-[#0C6478] text-white px-4 py-2 rounded hover:bg-[#0C6478] w-full" onClick={() => navigate("/join_now")}>
              Join Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
