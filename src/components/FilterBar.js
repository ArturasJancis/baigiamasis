// FilterBar.js

import React, { useState } from 'react';

const FilterBar = ({ onFilterByType, onFilterByAge, onShowAllAnimals }) => {
  // Initialize state to manage filters
  const [filters, setFilters] = useState({ animalType: '', animalAge: '' });

  // Handle input changes for both type and age filters
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the corresponding filter in the state
    setFilters({ ...filters, [name]: value });

    // Call the appropriate filter function based on the input's name
    if (name === 'animalType') {
      onFilterByType(value); // Trigger type filter
    } else if (name === 'animalAge') {
      onFilterByAge(value); // Trigger age filter
    }
  };

  return (
    <div className="filter-bar">
      {/* Button to filter by cat type */}
      <button onClick={() => onFilterByType('cats')}>Show Cats</button>

      {/* Button to filter by dog type */}
      <button onClick={() => onFilterByType('dogs')}>Show Dogs</button>

      {/* Input for filtering by age */}
      <input
        type="number"
        name="animalAge" // Use 'name' attribute to identify the age filter
        placeholder="Filter by Age"
        value={filters.animalAge}
        onChange={handleInputChange} // Call the input change handler
      />

      {/* Button to show all animals */}
      <button onClick={onShowAllAnimals}>Show All Animals</button>
    </div>
  );
};

export default FilterBar;
