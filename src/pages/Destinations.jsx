import React, { useState } from 'react'
import { destinations } from '../data/destinations'
import DestinationFilters from '../components/DestinationFilters'
import DestinationGrid from '../components/DestinationGrid'

function Destinations() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredDestinations = selectedFilter === 'all'
    ? destinations
    : destinations.filter(dest => dest.category === selectedFilter)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Popular Destinations</h1>
      <DestinationFilters
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <DestinationGrid destinations={filteredDestinations} />
    </div>
  )
}

export default Destinations