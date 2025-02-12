import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function DestinationGrid({ destinations }) {
  const [selectedDestination, setSelectedDestination] = useState(null)

  const handleToggleDetails = (destination) => {
    setSelectedDestination(prev => (prev?.id === destination.id ? null : destination))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {destinations.map(destination => (
        <div key={destination.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-4">{destination.name}, {destination.country}</h2>
          <p className="text-gray-600">{destination.description}</p>

          <button
            onClick={() => handleToggleDetails(destination)}
            className={`mt-4 py-2 px-4 rounded-md transition ${
              selectedDestination?.id === destination.id
                ? 'bg-blue-500 text-white'
                : 'bg-blue-500 text-white'
            }`}
          >
            {selectedDestination?.id === destination.id ? 'Hide Details' : 'View Details'}
          </button>

          {selectedDestination?.id === destination.id && (
            <div className="mt-4 bg-gray-100 p-4 rounded-md">
              <p>{destination.longDescription}</p>
              <Link to={`/booking/${destination.id}`} className="mt-4 py-2 px-4 bg-green-500 text-white rounded-md block text-center">
                Book Now
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default DestinationGrid
