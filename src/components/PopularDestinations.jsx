import React from 'react'
import { destinations } from '../data/destinations'
import DestinationCard from './DestinationCard'

function PopularDestinations() {
  const popularDestinations = destinations.slice(0, 3)

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularDestinations.map((destination) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDestinations