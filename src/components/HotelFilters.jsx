import React from "react";

function HotelFilters({ selectedFilter, onFilterChange }) {
  const filters = ["all", "luxury", "budget", "family", "romantic"]; // Example categories

  return (
    <div className="flex space-x-4 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full ${
            selectedFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default HotelFilters;
