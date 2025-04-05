// import './App.css'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Footer from "./components/Footer";
import slides from "./components/slides";
import items from "./components/items";
import card_items from "./components/card_items";
import Dropdown from "./components/Dropdown";
import Card from "./components/Card";

import ondc_logo from "./assets/images 2.png";
import mandala from "./assets/Mandalalogo1 1.png";
import hero_pic1 from "./assets/Rectangle 419.png";
import hero_pic2 from "./assets/Rectangle 420.png";
import hero_pic3 from "./assets/Rectangle 421.png";
import hero_pic4 from "./assets/Rectangle 422.png";
import slides_pic from "./assets/Rectangle 425.png";
import dropdown_pic from "./assets/Rectangle 426.png";
import contact_pic from "./assets/Rectangle 428.png";

import ComingSoon from "./Coming_soon";
import Team from "./TeamSection";
import Careers from "./Careers";

function HomePage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 1000);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
    }
  };

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <div
          id="home"
          className="pb-10 bg-white flex flex-col items-center text-center p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative w-24 md:w-32 overflow-hidden"
          >
            <motion.img
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1 }}
              className="w-full"
              src={ondc_logo}
            />
          </motion.div>
          <img
            className="absolute right-0 top-15 select-none w-40 md:w-76"
            src={mandala}
            alt=""
          />
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-2xl md:text-7xl font-semibold mt-3 font-[Montaga] font-thin"
          >
            Your Gateway to ONDC <br /> Effortless Selling Starts Here
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-base md:text-xl text-gray-600 mt-6 max-w-xl font-[Montserrat]"
          >
            Sarwam makes selling on ONDC simple and hassle-free. Reach more
            customers and grow your business easily.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end w-full max-w-6xl mt-10">
            <div className="col-span-1 md:col-span-2 flex justify-center">
              <button
                className="px-6 py-2 md:px-9 md:py-2 bg-[#0C6478] text-lg md:text-xl text-white rounded-lg shadow-md hover:bg-teal-800 font-[Montserrat] font-bold"
                onClick={() => navigate("/get_start")}
              >
                Get Start
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -100, y: -100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.5 }}
              className="hidden md:block overflow-hidden row-start-1 row-span-3"
            >
              <img
                src={hero_pic1}
                alt="Art 1"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100, y: -100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.1 }}
              className="hidden md:block overflow-hidden row-start-2 row-span-2"
            >
              <img
                src={hero_pic3}
                alt="Art 2"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, y: -100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.1 }}
              className="hidden md:block overflow-hidden row-start-2 row-span-2"
            >
              <img
                src={hero_pic4}
                alt="Art 3"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, y: -100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.5 }}
              className="hidden md:block overflow-hidden row-span-3"
            >
              <img
                src={hero_pic2}
                alt="Art 4"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Slide Section */}
      <div
        id="about"
        className="flex justify-center items-center min-h-fit bg-[#D0DED8]"
      >
        <div className="bg-white p-4 md:p-8 rounded-4xl shadow-xl flex flex-col md:flex-row max-w-6xl w-full items-center mt-10 mb-10 relative">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <img
              src={slides_pic}
              alt="Vision"
              className="rounded-3xl w-full max-w-xs md:max-w-sm"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 p-4 md:p-10 text-center md:text-left">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction < 0 ? 20 : -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl md:text-4xl font-bold mb-4 font-[Montserrat]">
                  {slides[index].title}
                </h2>
                <p className="text-base md:text-xl font-[Lato]">
                  {slides[index].content}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex justify-center md:justify-end mt-4">
              <button
                onClick={prevSlide}
                className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition mr-2"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Drop Down */}
      <div
        id="features"
        className="flex justify-center items-center min-h-fit bg-white"
      >
        <div className="pt-5 pb-5 rounded-4xl flex flex-col md:flex-row max-w-6xl w-full items-center mt-10 mb-10">
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <img
              src={dropdown_pic}
              alt="Lamp example"
              className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm"
            />
          </div>
          <div className="w-full md:w-2/3 p-4 md:p-10 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-normal mb-4 font-[Montserrat]">
              Why Sarwam?
            </h2>
            <p className="text-lg md:text-xl mb-6 font-[Lato]">
              At Sarwam, we focus on making digital commerce easier for small
              businesses in India's smaller cities.
            </p>
            <Dropdown items={items} />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div
        id="products"
        className="overflow-x-auto flex justify-center items-center min-h-fit bg-white"
      >
        <div className="bg-white p-8 rounded-4xl flex flex-col lg:flex-row max-w-5xl md:max-w-6xl items-center mb-10 gap-10">
          {card_items.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-full lg:w-1/3 p-4">
              <Card title={card.title} description={card.content} />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="relative w-full bg-[#D9EBE4] flex justify-center items-center"
      >
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>

        <div className="relative w-11/12 md:w-3/4 max-w-5xl bg-gray-800 rounded-4xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-cover bg-center hidden md:block">
            <img
              src={contact_pic}
              alt="Contact background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative bg-white p-6 md:p-8 rounded-4xl w-full md:w-1/2 mr-auto ml-auto md:ml-auto md:mr-8 m-0 md:m-8">
            <h2 className="text-xl md:text-2xl font-medium mb-4 font-[Montserrat] text-center md:text-left">
              Contact us
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 flex flex-col items-center"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#D0DED84D] text-sm md:text-base"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail Address"
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#D0DED84D] text-sm md:text-base"
                required
              />
              <textarea
                placeholder="Message"
                onChange={handleChange}
                name="message"
                className="w-full p-3 rounded-md bg-[#D0DED84D] h-24 text-sm md:text-base"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#0C6478] text-white py-2 px-4 md:px-6 rounded-lg shadow-md text-sm md:text-base cursor-pointer"
              >
                Submit
              </button>
              <p>{responseMessage}</p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join_now" element={<ComingSoon />} />
        <Route path="/get_start" element={<ComingSoon />} />
        <Route path="/seller_app" element={<ComingSoon />} />
        <Route path="/buyer_app" element={<ComingSoon />} />
        <Route path="/logistics_app" element={<ComingSoon />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;
