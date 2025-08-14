import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
  { id: 1, title: "Dance", description: "Show your moves and set the stage on fire.", icon: "💃" },
  { id: 2, title: "Singing", description: "Let your voice be the music that captures hearts.", icon: "🎤" },
  { id: 3, title: "Drama", description: "Bring characters to life with your acting skills.", icon: "🎭" },
  { id: 4, title: "Fashion Show", description: "Walk the runway and showcase your style.", icon: "👗" },
  { id: 5, title: "Mr. & Miss", description: "The ultimate talent and personality competition.", icon: "👑" },
];

export default function StudentDashboard() {
  const navigate = useNavigate();

  const handleCardClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const Card = ({ event }) => (
    <div
      onClick={() => handleCardClick(event.id)}
      className="bg-gradient-to-br from-[#2c003e] via-[#3b0a58] to-[#1a1a1a] p-4 rounded-lg shadow-md cursor-pointer w-48 h-48 flex flex-col items-center justify-center
                  hover:shadow-[0_0_20px_rgba(236,72,153,0.7)]
                 transition-all duration-300 ease-out"
    >
      <div className="text-3xl mb-2">{event.icon}</div>
      <h2 className="text-lg  mb-1 text-center">{event.title}</h2>
      <p className="text-sm text-gray-300 text-center">{event.description}</p>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0B1F] text-black font-baskerville">
      {/* Sticky Header */}
      <div className="sticky top-0 w-full bg-gradient-to-br from-[#2c003e] via-[#3b0a58] to-[#1a1a1a] text-heading  p-4 text-center  font-cormorant font-medium text-3xl z-50 shadow-lg">
        Student Information
      </div>
      

      {/* Cards Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-white p-6 gap-6">
        {/* First row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event) => (
            <Card key={event.id} event={event} />
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 lg:flex lg:justify-center">
          {events.slice(3, 5).map((event) => (
            <Card key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}