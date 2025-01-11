import React, { useState } from 'react'
import { hotels } from '../data/hotels'
import HotelFilters from '../components/HotelFilters'
import HotelGrid from '../components/HotelGrid'

function Hotels() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredHotels = selectedFilter === 'all'
    ? hotels
    : hotels.filter(hotel => hotel.category === selectedFilter)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Popular Hotels</h1>
      <HotelFilters
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <HotelGrid hotels={filteredHotels} />
    </div>
  )
}

export default Hotels
