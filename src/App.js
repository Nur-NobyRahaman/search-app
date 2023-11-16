import logo from "./logo.svg";
import "./App.css";
import { useMemo, useState } from "react";

function App() {
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
    <div className="App">
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
}

export default App;
