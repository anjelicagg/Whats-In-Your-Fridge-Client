import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Fridge() {
  const [food, setFood] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: e.target.name.value,
      category: e.target.category.value,
      quantity: e.target.quantity.value,
      expirationDate: e.target.expirationDate.value,
      dateAdded: e.target.dateAdded.value,
      location: e.target.location.value,
      notes: e.target.notes.value,
      isOpened: e.target.isOpened.checked, 
    };

    fetch("http://localhost:8080/api/fridge/create/new", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setFood((prev) => [...prev, result.data]); 
      })
      .catch((error) => console.log("error :>> ", error));
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/fridge/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => setFood(result.data.food))
      .catch((error) => {
        console.log(error);
        setErrorMessage("Failed to fetch fridge data");
      });
  }, []);

  const handleDeleteFood = (foodId) => {
    const confirmDelete = window.confirm("Delete item?");
    if (!confirmDelete) return;

    fetch(`http://localhost:8080/api/fridge/delete/${foodId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setFood((prev) => prev.filter((item) => item._id !== foodId));
      })
      .catch((error) => console.log("error :>> ", error));
  };

  const dateFormat = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <main>
      <div className="form-container">
        <h1>Add Item</h1>
        <form onSubmit={handleSubmit}>
          <div className="addItem">
            <label htmlFor="name">Item:</label>
            <input
              className="input-item"
              type="text"
              placeholder="item name"
              name="name"
              id="name"
            />
          </div>

          <div className="category">
            <label htmlFor="category">Category:</label>
            <select className="Select" name="category">
              <option value="Dairy">Dairy</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Meat">Meat</option>
              <option value="Fruits">Fruits</option>
              <option value="Breads">Breads</option>
              <option value="Condiments&Sauces">Condiments & Sauces</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              placeholder="quantity"
              name="quantity"
              id="quantity"
            />
          </div>

          <div className="expirationDate">
            <label htmlFor="expirationDate">Expiration Date:</label>
            <input
              type="date"
              name="expirationDate"
              id="expirationDate"
            />
          </div>

          <div className="dateAdded">
            <label htmlFor="dateAdded">Date Added:</label>
            <input
              type="date"
              name="dateAdded"
              id="dateAdded"
            />
          </div>

          <div className="location">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              placeholder="location"
              name="location"
              id="location"
            />
          </div>

          <div className="notes">
            <label htmlFor="notes">Notes:</label>
            <input
              type="text"
              placeholder="notes"
              name="notes"
              id="notes"
            />
          </div>

          <div className="isOpened">
            <label htmlFor="isOpened">Opened:</label>
            <input
              type="checkbox"
              name="isOpened"
              id="isOpened"
            />
          </div>

          <input className="submit" type="submit" value="Add Item" />
        </form>
      </div>

      <section className="fridge-preview">
        <h3>Fridge Inventory</h3>
        {errorMessage && <p>{errorMessage}</p>}
        {food.length === 0 ? (
          <p>No items yet. Add something to your fridge!</p>
        ) : (
          food.map((foodItems) => (
            <ul key={foodItems._id} className="food-card">
              <li>Name: {foodItems.name}</li>
              <li>Category: {foodItems.category}</li>
              <li>Quantity: {foodItems.quantity}</li>
              <li>Expiration Date: {dateFormat(foodItems.expirationDate)}</li>
              <li>Date Added: {dateFormat(foodItems.dateAdded)}</li>
              <li>Location: {foodItems.location}</li>
              <li>Notes: {foodItems.notes}</li>
              <li>Opened: {foodItems.isOpened ? "Yes" : "No"}</li>
              <button onClick={() => navigate(`/fridge/${foodItems._id}/update`)}>
                Edit
              </button>
              <button onClick={() => handleDeleteFood(foodItems._id)}>
                Delete
              </button>
            </ul>
          ))
        )}
      </section>
    </main>
  );
}

export default Fridge;
