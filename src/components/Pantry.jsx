import React,{useState} from "react";

function Pantry() {

    const [items, setItems] = useState([
      "Peanut Butter", "Chips", "Cereal", "Rice", 
    ]);
    const [newItem, setNewItem] = useState("");
  
    const addItem = () => {
      if (newItem.trim() !== "") {
        setItems([...items, newItem.trim()]);
        setNewItem("");
      }
    };
  
      return (
          <div className="pantry-page">
            <header className="main-header">
              <h1>What's in Your Pantry?</h1>
            </header>
      
            <main className="content-container">
              <h2>Check What You Have</h2>
      
              <form id="pantry-checklist" onSubmit={(e) => e.preventDefault()}>
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
                    placeholder="e.g., Almond butter"
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
      
      export default Pantry;