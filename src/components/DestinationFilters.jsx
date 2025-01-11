import React from 'react'
import FilterButton from './FilterButton'

function DestinationFilters({ selectedFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'europe', label: 'Europe' },
    { id: 'asia', label: 'Asia' }
  ]

  return (
    <div className="flex space-x-4 mb-8">
      {filters.map(filter => (
        <FilterButton
          key={filter.id}
          selected={selectedFilter === filter.id}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </FilterButton>
      ))}
    </div>
  )
}

export default DestinationFilters