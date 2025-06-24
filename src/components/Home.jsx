import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [food, setFood] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/fridge/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => setFood(result.data.food))
      .catch((error) => {
        console.log(error);
        setErrorMessage("Failed to fetch fridge data");
      });
  }, []);

  const handleDeleteFood = (foodId) => {
    const confirm = window.confirm("Delete item?");
    if (!confirm) {
      return;
    }

    fetch(`http://localhost:8080/api/fridge/delete/${foodId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Deleted:", result);
        setFood((prev) => prev.filter((item) => item._id !== foodId));
      })
      .catch((error) => console.log("error :>> ", error));
  };

  const dateFormat = (date) => {
    const myDate = new Date(date).toLocaleDateString();
    return myDate;
  };

  return (
    <div className="home-container">
      <div className="kitchen">
        <main className="main-content">
          <section className="intro-text">
            <h2>Your Kitchen, Organized</h2>
            <p>Track your food, reduce waste, and support your routine with ease.</p>
          </section>

          <div className="dopamine-kitchen">
            <img src="/Images/dopamine-decor-kitchen.jpeg" alt="Bright colored Kitchen" />
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
      </div>
    </div>
  );
}

export default Home;
