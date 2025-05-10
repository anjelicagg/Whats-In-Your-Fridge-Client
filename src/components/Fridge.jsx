import React, { useState } from 'react';

function Fridge() {
  const [items, setItems] = useState([
    "Milk", "Eggs", "Cheese", "Lettuce", "Tomatoes", "Yogurt", "Butter"
  ]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

    return (
        <div className="fridge-page">
          <header className="main-header">
            <h1>What's in Your Fridge?</h1>
          </header>
    
          <main className="content-container">
            <h2>Check What You Have</h2>
    
            <form id="fridge-checklist" onSubmit={(e) => e.preventDefault()}>
              <ul id="checklist">
                {items.map((item, index) => (
                  <li key={index}>
                    <label>
                      <input type="checkbox" />
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
    
              <div className="custom-item">
                <label htmlFor="new-item">Add Item:</label>
                <input
                  type="text"
                  id="new-item"
                  placeholder="e.g., Almond Milk"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                />
                <button type="button" onClick={addItem}>Add</button>
              </div>
            </form>
    
            <footer>
              <a href="/about" className="link-btn">Back to Kitchen</a>
            </footer>
          </main>
        </div>
      );
    }
    
    export default Fridge;