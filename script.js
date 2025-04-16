document.addEventListener("DOMContentLoaded", () => {
    // Fridge
    const fridgeBtn = document.getElementById("add-item-btn");
    const fridgeInput = document.getElementById("new-item");
    const fridgeList = document.getElementById("checklist");
  
    if (fridgeBtn && fridgeInput && fridgeList) {
      fridgeBtn.addEventListener("click", () => {
        const item = fridgeInput.value.trim();
        if (item !== "") {
          const li = document.createElement("li");
          li.innerHTML = `<label><input type="checkbox"> ${item}</label>`;
          fridgeList.appendChild(li);
          fridgeInput.value = "";
        }
      });
    }
  
    // Pantry
    const pantryBtn = document.getElementById("add-pantry-item-btn");
    const pantryInput = document.getElementById("new-pantry-item");
    const pantryList = document.getElementById("pantry-list");
  
    if (pantryBtn && pantryInput && pantryList) {
      pantryBtn.addEventListener("click", () => {
        const item = pantryInput.value.trim();
        if (item !== "") {
          const li = document.createElement("li");
          li.innerHTML = `<label><input type="checkbox"> ${item}</label>`;
          pantryList.appendChild(li);
          pantryInput.value = "";
        }
      });
    }
  });