import React, { useState } from "react";
import { Link } from "react-router-dom";

function HotelGrid({ hotels }) {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleToggleDetails = (hotel) => {
    setSelectedHotel((prev) => (prev?.id === hotel.id ? null : hotel));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-4">{hotel.name}</h2>
          <p className="text-gray-600">{hotel.description}</p>

          <button
            onClick={() => handleToggleDetails(hotel)}
            className={`mt-4 py-2 px-4 rounded-md transition ${
              selectedHotel?.id === hotel.id
                ? "bg-red-500 text-white" // Change to red when active
                : "bg-blue-500 text-white" // Default blue when inactive
            }`}
          >
            {selectedHotel?.id === hotel.id ? "Hide Details" : "View Details"}
          </button>

          {selectedHotel?.id === hotel.id && (
            <div className="mt-4 bg-gray-100 p-4 rounded-md">
              <p>{hotel.longDescription}</p>
              <Link
                to={`/hotel-booking/${hotel.id}`}
                className="mt-4 py-2 px-4 bg-green-500 text-white rounded-md block text-center"
              >
                Book Now
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default HotelGrid;
