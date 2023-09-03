// FilterBar.js
import React, { useState } from 'react';

const FilterBar = ({ onFilterByType, onFilterByAge }) => {
  const [animalType, setAnimalType] = useState('');
  const [animalAge, setAnimalAge] = useState('');

  const handleTypeChange = (event) => {
    setAnimalType(event.target.value);
    onFilterByType(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAnimalAge(event.target.value);
    onFilterByAge(event.target.value);
  };

  return (
    <div className="filter-bar">
      <button onClick={() => onFilterByType('cats')}>Show Cats</button>
      <button onClick={() => onFilterByType('dogs')}>Show Dogs</button>
      <input
        type="number"
        placeholder="Filter by Age"
        value={animalAge}
        onChange={handleAgeChange}
      />
    </div>
  );
};

export default FilterBar;
