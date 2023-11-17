import React, { useState } from "react";
const items = [
    { name: 'Item 1', type: 'A', color: 'red' },
    { name: 'Item 2', type: 'B', color: 'blue' },
    // More items...
  ];

const Multifilter = () => {
  const [filters, setFilters] = useState({
    type: [],
    color: [],
    // Add more filters as needed
  });
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilterChange = (filterType, value) => {
    const updatedFilters = { ...filters, [filterType]: value };
    setFilters(updatedFilters);

    // Perform filtering logic
    let filtered = items;
    Object.keys(updatedFilters).forEach((key) => {
      if (updatedFilters[key].length > 0) {
        filtered = filtered.filter((item) =>
          updatedFilters[key].includes(item[key])
        );
      }
    });
    setFilteredItems(filtered);
  };
  return (
    <div>
      {/* Filter components */}
      <input onChange={(value) => handleFilterChange("type", value)} />
      <input onChange={(value) => handleFilterChange("color", value)} />

      {/* Display filtered items */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Multifilter;
