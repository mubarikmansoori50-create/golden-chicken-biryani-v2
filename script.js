// Organized by base categories so you have a single main image per dish type
const menuCategories = [
  {
    dishName: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600",
    options: [
      { name: "Chicken Biryani Quarter", price: 100 },
      { name: "Chicken Biryani Half", price: 200 },
      { name: "Chicken Biryani Full", price: 350 }
    ]
  },
  {
    dishName: "Chicken Korma",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    options: [
      { name: "Chicken Korma Quarter", price: 110 },
      { name: "Chicken Korma Half", price: 220 },
      { name: "Chicken Korma Full", price: 400 }
    ]
  },
  {
    dishName: "Chicken Handi",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600",
    options: [
      { name: "Chicken Handi Quarter", price: 140 },
      { name: "Chicken Handi Half", price: 280 },
      { name: "Chicken Handi Full", price: 480 }
    ]
  },
  {
    dishName: "Chicken Achari",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600",
    options: [
      { name: "Chicken Achari Quarter", price: 140 }
    ]
  },
  {
    dishName: "Chicken Kali Mirch",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600",
    options: [
      { name: "Chicken Kali Mirch Full", price: 480 }
    ]
  },
  {
    dishName: "Chicken Do Pyaza",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    options: [
      { name: "Chicken Do Pyaza Full", price: 480 }
    ]
  },
  {
    dishName: "Snacks & Wraps",
    image: "https://images.unsplash.com/photo-1649144415518-e2eb882a1548?w=600",
    options: [
      { name: "Chicken Shawarma", price: 90 },
      { name: "Chicken Roll", price: 90 }
    ]
  },
  {
    dishName: "Breads",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600",
    options: [
      { name: "Tawa Roti", price: 10 },
      { name: "Naan", price: 10 }
    ]
  },
  {
    dishName: "Drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600",
    options: [
      { name: "Thumbs Up", price: 20 }
    ]
  }
];

let cart = [];

const foodList = document.getElementById("food-list");
const cartBox = document.getElementById("cart");
const total = document.getElementById("total");

function displayFood(list = menuCategories) {
  foodList.innerHTML = "";
  
  list.forEach((category, catIndex) => {
    // Generate radio buttons/selectable table row for each size/price choice
    let optionsHtml = "";
    category.options.forEach((opt, optIndex) => {
      const isChecked = optIndex === 0 ? "checked" : ""; // Selects the first option by default
      optionsHtml += `
        <label class="price-option" style="display: block; margin: 8px 0; cursor: pointer;">
          <input type="radio" name="prod-${catIndex}" value="${optIndex}" ${isChecked}>
          <span>${opt.name} - <strong>₹${opt.price}</strong></span>
        </label>
      `;
    });

    foodList.innerHTML += `
      <div class="card" style="margin-bottom: 25px; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <img src="${category.image}" alt="${category.dishName}" style="width:100%; height:220px; object-fit:cover; border-radius: 6px;">
        <h3 style="margin: 10px 0 5px 0;">${category.dishName}</h3>
        
        <div class="options-container" style="background: #fdfdfd; padding: 5px 10px; border-radius: 4px; margin-bottom: 10px;">
          ${optionsHtml}
        </div>
        
        <button onclick="addSelectedToCart(${catIndex})" style="width: 100%; padding: 10px; cursor: pointer;">Add to Cart</button>
      </div>`;
  });
}

// Initial Rendering
displayFood();

function addSelectedToCart(catIndex) {
  // Find which variant/price radio option the user clicked
  const selectedRadio = document.querySelector(`input[name="prod-${catIndex}"]:checked`);
  if (!selectedRadio) return;

  const optionIndex = selectedRadio.value;
  const chosenItem = menuCategories[catIndex].options[optionIndex];

  cart.push(chosenItem);
  updateCart();
}

function updateCart() {
  cartBox.innerHTML = "";
  let sum = 0;
  cart.forEach((item, i) => {
    sum += item.price;
    cartBox.innerHTML += `
      <p>${item.name} - ₹${item.price}
        <button onclick="removeItem(${i})">❌</button>
      </p>`;
  });
  total.innerHTML = sum;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function searchFood() {
  let value = document.getElementById("search").value.toLowerCase();
  const filtered = menuCategories.filter(cat => 
    cat.dishName.toLowerCase().includes(value) || 
    cat.options.some(opt => opt.name.toLowerCase().includes(value))
  );
  displayFood(filtered);
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }
  let msg = "🍗 Golden Chicken Biryani Order%0A%0A";
  let amount = 0;
  cart.forEach(item => {
    msg += item.name + " - ₹" + item.price + "%0A";
    amount += item.price;
  });
  msg += "%0ATotal = ₹" + amount;
  msg += "%0A%0AAddress:";
  window.open("https://wa.me/917827724514?text=" + msg, "_blank");
}
