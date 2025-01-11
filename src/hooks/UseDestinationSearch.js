import { useState, useEffect } from 'react'
import { destinations } from '../data/destinations'

export function useDestinationSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [searchResults, setSearchResults] = useState(destinations)

  useEffect(() => {
    const results = destinations.filter(destination => 
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  return {
    searchTerm,
    setSearchTerm,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    searchResults
  }
}