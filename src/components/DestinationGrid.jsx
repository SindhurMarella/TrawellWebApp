import React from 'react'
import DestinationCard from './DestinationCard'

function DestinationGrid({ destinations }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  )
}

export default DestinationGrid