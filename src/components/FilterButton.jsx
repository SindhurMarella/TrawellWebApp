import React from 'react'

function FilterButton({ selected, onClick, children }) {
  return (
    <button
      className={`btn ${selected ? 'btn-primary' : 'bg-gray-200'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default FilterButton