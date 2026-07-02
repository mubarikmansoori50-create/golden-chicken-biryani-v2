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
    image: "/images/hq720.jpg",
    options: [
      { name: "Chicken Korma Quarter", price: 110 },
      { name: "Chicken Korma Half", price: 220 },
      { name: "Chicken Korma Full", price: 380 }
    ]
  },
  {
    dishName: "Chicken Handi",
image: "images/images.jpeg",
    options: [
      { name: "Chicken Handi Quarter", price: 140 },
      { name: "Chicken Handi Half", price: 280 },
      { name: "Chicken Handi Full", price: 480 }
    ]
  },
  {
    dishName: "Chicken Achari",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600",
    options: [
      { name: "Chicken Achari Quarter", price: 140 }
    ]
  },
  {
  dishName: "Chicken Kali Mirch",
  image: "/images/Chicken-Kali-Mirch-2-3-500x500.jpg",
  options: [
      { name: "Chicken Kali Mirch Quarter", price: 140 },
      { name: "Chicken Kali Mirch Half", price: 280 },
      { name: "Chicken Kali Mirch Full", price: 480 }
    ]
  },
  {
  dishName: "Chicken Do Pyaza",
  image: "/images/cd1.jpg",
  options: [
      { name: "Chicken Do Pyaza Quarter", price: 140 },
      { name: "Chicken Do Pyaza Half", price: 280 },
      { name: "Chicken Do Pyaza Full", price: 480 }
   ]
  },
  {
    dishName: "Chicken Shawarma",
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600",
    options: [
      { name: "Chicken Shawarma", price: 90 }
    ]
  },
  {
    dishName: "Chicken Roll",
    image: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=600",
    options: [
      { name: "Chicken Roll", price: 90 }
    ]
  },
  {
    dishName: "Tawa Roti",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600",
    options: [
      { name: "Tawa Roti", price: 10 }
    ]
  },
  {
    dishName: "Naan",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600",
    options: [
      { name: "Naan", price: 10 }
    ]
  },
  {
    dishName: "Beverages",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600",
    options: [
      { name: "Thumbs Up", price: 20 }
    ]
  }
];

let cart = [];

const foodList = document.getElementById("food-list");
const cartBox = document.getElementById("cart");
const total = document.getElementById("total");

// Create floating/accessible 'See Cart' button container elements dynamically
const viewCartBtn = document.createElement("button");
viewCartBtn.id = "see-cart-btn";
viewCartBtn.innerHTML = "🛒 See Cart (0)";
viewCartBtn.style.cssText = "position:fixed; bottom:20px; right:20px; padding:12px 20px; background-color:#d32f2f; color:white; border:none; border-radius:50px; font-weight:bold; font-size:16px; box-shadow:0 4px 10px rgba(0,0,0,0.3); z-index:1000; cursor:pointer;";
viewCartBtn.onclick = toggleCartView;
document.body.appendChild(viewCartBtn);

function displayFood(list = menuCategories) {
  foodList.innerHTML = "";
  
  list.forEach((category, catIndex) => {
    let optionsHtml = "";
    category.options.forEach((opt, optIndex) => {
      const isChecked = optIndex === 0 ? "checked" : ""; 
      optionsHtml += `
        <label class="price-option" style="display: block; margin: 8px 0; cursor: pointer; font-size: 14px;">
          <input type="radio" name="prod-${catIndex}" value="${optIndex}" ${isChecked}>
          <span>${opt.name} - <strong>₹${opt.price}</strong></span>
        </label>
      `;
    });

    foodList.innerHTML += `
      <div class="card" style="margin-bottom: 25px; background: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.08);">
        <img src="${category.image}" alt="${category.dishName}" style="width:100%; height:220px; object-fit:cover; border-radius: 6px;">
        <h3 style="margin: 12px 0 6px 0; font-size: 18px; color: #222;">${category.dishName}</h3>
        
        <div class="options-container" style="background: #fafafa; padding: 6px 12px; border-radius: 4px; margin-bottom: 12px; border: 1px solid #eee;">
          ${optionsHtml}
        </div>
        
        <button onclick="addSelectedToCart(${catIndex})" style="width: 100%; padding: 10px; background-color: #8b0000; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">Add to Cart</button>
      </div>`;
  });
}

displayFood();

function addSelectedToCart(catIndex) {
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
      <p style="margin: 5px 0;">${item.name} - ₹${item.price}
        <button onclick="removeItem(${i})" style="background:none; border:none; cursor:pointer; margin-left:5px;">❌</button>
      </p>`;
  });
  total.innerHTML = sum;
  
  // Updates the item counter display inside the 'See Cart' button bubble
  viewCartBtn.innerHTML = `🛒 See Cart (${cart.length})`;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCartView() {
  const cartContainer = document.getElementById("cart-container") || cartBox.parentElement;
  if (cartContainer) {
    cartContainer.scrollIntoView({ behavior: 'smooth' });
    
    // Add visual flash effect so user notices where the cart is
    cartContainer.style.outline = "2px solid #8b0000";
    setTimeout(() => cartContainer.style.outline = "none", 1200);
  }
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
  msg += "%0A%0A💳 Pay via UPI to: mubarikmansoori501@ybl";
  msg += "%0A%0AAddress:";
  window.open("https://wa.me/917827724514?text=" + msg, "_blank");
}
