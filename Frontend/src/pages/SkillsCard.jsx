
import React, { useState } from "react";
import { skills } from "../data/skillsData";

const SkillsCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Skill Experts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="bg-white p-4 shadow-lg rounded-xl cursor-pointer hover:bg-gray-100"
          >
            <h3 className="text-xl font-semibold">{item.role}</h3>
            <p className="text-gray-600">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl">
            <h2 className="text-2xl font-bold mb-2">{selectedCard.role}</h2>
            <p><strong>Name:</strong> {selectedCard.name}</p>
            <p><strong>Experience:</strong> {selectedCard.experience}</p>
            <p><strong>Location:</strong> {selectedCard.location}</p>
            <p><strong>Skills:</strong> {selectedCard.skills.join(", ")}</p>

            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsCard;
