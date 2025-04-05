import React, { useState } from "react";
import jobs from "./components/jobs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import layer_blur from "./assets/Group 2178.svg";

const categories = [
  "All",
  "Development",
  "Design",
  "Marketing",
  "Management",
  "Finance",
];

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  return (
    <>
      <Header />

      <img
        className="absolute right-0 w-64 md:w-150 -z-10"
        src={layer_blur}
        alt=""
      />
      <div className="px-6 py-10 md:px-0 md:py-15 max-w-3xl mx-auto">
        <button className="border border-3 border-[#0C6478] px-4 py-1 rounded-2xl  font-semibold font-[Lato]">
          We're Hiring!
        </button>
        <h2 className="text-4xl font-semibold mt-4 font-[Montserrat]">
          Be part of our mission
        </h2>
        <p className="mt-2 font-[Lato] max-w-xl">
          We are looking for passionate people to join us on our mission. We
          value flat hierarchies, clear communication, and full ownership and
          responsibility.
        </p>

        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1 border border-2 border-[#0C6478] font-[Lato] rounded-full ${
                selectedCategory === category ? "bg-[#0C6478] text-white" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-7 space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div
                key={index}
                className="border-b pb-4 flex justify-between items-center"
              >
                <div className="font-[Montserrat]">
                  <h3 className="text-lg font-semibold text-[#0C6478]">
                    {job.title}
                  </h3>
                  <p className="">{job.description}</p>
                </div>
                <button
                  className="bg-[#0C6478] text-white px-4 py-2 rounded-full font-[Lato]"
                  onClick={() =>
                    window.open(
                      "https://forms.zohopublic.in/pratikpandeysar1/form/JobApplication/formperma/th_cmWGt3Pt8FHt10a2WwLxFXgxwyiOl1Z344qsMoU8"
                    )
                  }
                >
                  <span className="block md:hidden">Apply</span>
                  <span className="hidden md:block">Apply Now</span>
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 mt-4">No Vacancies Available</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Careers;
