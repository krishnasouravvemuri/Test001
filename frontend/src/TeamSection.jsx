import Header from "./components/Header";
import Footer from "./components/Footer";
import teamMembers from "./components/teamData";
import TeamCard from "./components/TeamCard";

const TeamSection = () => {
  return (
    <>
      <Header />

      <section className="py-10 px-4 font-[Montserrat]">
        <div className="text-center">
          <h2 className="text-5xl font-semibold text-[#0C6478]">
            We are the people who
          </h2>
          <h2 className="text-5xl font-semibold text-[#0C6478] mb-4">
            Building Sarwam
          </h2>
          <p className="max-w-2xl text-lg mx-auto mb-8">
            Our philosophy is simple: make a team of great people and give them
            the resources and support to do their best work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-xs md:max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TeamSection;
