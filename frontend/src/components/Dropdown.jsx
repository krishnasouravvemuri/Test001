import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden ">
          <button
            onClick={() => toggleDropdown(index)}
            className="w-full flex justify-between items-center p-3 text-left font-normal hover:bg-gray-200 text-lg"
          >
            {item.title}
            <motion.span
              className="inline-block text-4xl"
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  opacity: { duration: 0.3 },
                  height: { duration: 0.4, ease: "easeInOut" },
                }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  exit={{ y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="p-4 bg-white text-gray-600"
                >
                  {item.content}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
