import React from "react";

const TeamCard = ({ name, role, description, image }) => {
  return (
    <div className="flex flex-col">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      )}
      <h3 className="text-lg font-bold text-[#0C6478] mt-4">{name}</h3>
      <p className="font-semibold text-[#0C6478]">{role}</p>
      <p className="text-sm mt-2 max-w-xs">{description}</p>
    </div>
  );
};

export default TeamCard;
