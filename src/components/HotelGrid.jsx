import React from "react";

function HotelGrid({ hotels }) {
  if (hotels.length === 0) {
    return <p className="text-center text-gray-500">No hotels found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
            <p className="text-gray-600">{hotel.location}</p>
            <p className="text-gray-500 mt-1">Category: {hotel.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelGrid;
