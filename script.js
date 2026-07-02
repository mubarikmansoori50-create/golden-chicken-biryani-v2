const menu = [
  {
    name: "Chicken Biryani Quarter",
    price: 100,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600"
  },
  {
    name: "Chicken Biryani Half",
    price: 200,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600"
  },
  {
    name: "Chicken Biryani Full",
    price: 350,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600"
  },
  {
    name: "Chicken Korma Quarter",
    price: 110,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600"
  },
  {
    name: "Chicken Korma Half",
    price: 220,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600"
  },
  {
    name: "Chicken Korma Full",
    price: 400,
    image: "https://images.unsplash.com/photo-1621447509374-24ed974d812d?w=600"
  },
  {
    name: "Chicken Handi Quarter",
    price: 140,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600"
  },
  {
    name: "Chicken Handi Half",
    price: 280,
    image: "https://images.unsplash.com/photo-1618411640018-97170881be0a?w=600"
  },
  {
    name: "Chicken Handi Full",
    price: 480,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600"
  },
  {
    name: "Chicken Achari Quarter",
    price: 140,
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600"
  },
  {
    name: "Chicken Kali Mirch Full",
    price: 480,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600"
  },
  {
    name: "Chicken Do Pyaza Full",
    price: 480,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"
  },
  {
    name: "Chicken Shawarma",
    price: 90,
    image: "https://images.unsplash.com/photo-1649144415518-e2eb882a1548?w=600"
  },
  {
    name: "Chicken Roll",
    price: 90,
    image: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=600"
  },
  {
    name: "Tawa Roti",
    price: 10,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600"
  },
  {
    name: "Naan",
    price: 10,
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Thumbs Up",
    price: 20,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600"
  }
];

let cart = [];

const foodList = document.getElementById("food-list");
const cartBox = document.getElementById("cart");
const total = document.getElementById("total");

function displayFood(list = menu) {
  foodList.innerHTML = "";
  list.forEach((item) => {
    const globalIndex = menu.indexOf(item); 
    
    foodList.innerHTML += `
      <div class="card">
        <img src="${item.image}" alt="${item.name}" style="width:100%; height:200px; object-fit:cover;">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addToCart(${globalIndex})">Add to Cart</button>
      </div>`;
  });
}

displayFood();

function addToCart(index) {
  cart.push(menu[index]);
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
  displayFood(menu.filter(item => item.name.toLowerCase().includes(value)));
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
