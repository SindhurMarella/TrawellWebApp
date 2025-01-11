import React from 'react'
import { Link } from 'react-router-dom'

function DestinationCard({ destination }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/destinations/${destination.id}`} className="block">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">{destination.name}</h3>
              <p className="text-gray-600">{destination.country}</p>
            </div>
            {destination.rating && (
              <div className="flex items-center bg-primary text-white px-2 py-1 rounded">
                <span className="mr-1">★</span>
                {destination.rating}
              </div>
            )}
          </div>
          {destination.description && (
            <p className="text-gray-700 mb-4">{destination.description}</p>
          )}
          <div className="flex justify-between items-center">
            <p className="text-primary font-bold text-xl">From ${destination.price}</p>
            <span className="btn btn-primary">View Details</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default DestinationCard