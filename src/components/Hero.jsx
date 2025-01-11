import React, { useState } from "react";
import SearchForm from "../components/SearchForm";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <section className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
          <p className="text-xl mb-8">
            Discover amazing places at exclusive deals
          </p>
          <SearchForm
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
