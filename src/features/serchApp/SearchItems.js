import React from 'react';
import { useMemo, useState } from "react";

const SearchItems = () => {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      const newItems = e.target.add.value;
      setItems((currentItems) => [...currentItems, newItems]);
      e.target.reset();
    };
  
    const filteredItems = useMemo(() => {
      return items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
    }, [query, items]);
    return (
        <div>
                  <h3>Search app</h3>
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
        type="text"
        name=""
        id=""
      />
      <p>Add items</p>
      <form action="" onSubmit={handleSubmit}>
        <input placeholder="Add items" type="text" name="add" id="" />
        <button type="submit">Add</button>
      </form>
      <h4>Items</h4>
      {filteredItems?.map((item, index) => (
        <p key={index}>{item} </p>
      ))}
        </div>
    );
};

export default SearchItems;