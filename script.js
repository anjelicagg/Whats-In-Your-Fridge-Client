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
  // script.js

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("add-item-btn").addEventListener("click", function () {
    const newItemInput = document.getElementById("new-item");
    const value = newItemInput.value.trim();

    if (value) {
      const li = document.createElement("li");
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(" " + value));
      li.appendChild(label);

      document.getElementById("checklist").appendChild(li);
      newItemInput.value = "";
    }
  });
});
