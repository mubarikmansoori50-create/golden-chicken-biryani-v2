const menu = [
{name:"Chicken Biryani Quarter",price:100,image:"images/biryani.jpg"},
{name:"Chicken Biryani Half",price:200,image:"images/biryani.jpg"},
{name:"Chicken Biryani Full",price:350,image:"images/biryani.jpg"},

{name:"Chicken Korma Quarter",price:110,image:"images/korma.jpg"},
{name:"Chicken Korma Half",price:220,image:"images/korma.jpg"},
{name:"Chicken Korma Full",price:400,image:"images/korma.jpg"},

{name:"Chicken Handi Quarter",price:140,image:"images/handi.jpg"},
{name:"Chicken Handi Half",price:280,image:"images/handi.jpg"},
{name:"Chicken Handi Full",price:480,image:"images/handi.jpg"},

{name:"Chicken Achari Quarter",price:140,image:"images/achari.jpg"},
{name:"Chicken Achari Half",price:280,image:"images/achari.jpg"},
{name:"Chicken Achari Full",price:500,image:"images/achari.jpg"},

{name:"Chicken Kali Mirch Quarter",price:150,image:"images/kali-mirch.jpg"},
{name:"Chicken Kali Mirch Half",price:270,image:"images/kali-mirch.jpg"},
{name:"Chicken Kali Mirch Full",price:480,image:"images/kali-mirch.jpg"},

{name:"Chicken Do Pyaza Quarter",price:150,image:"images/do-pyaza.jpg"},
{name:"Chicken Do Pyaza Half",price:270,image:"images/do-pyaza.jpg"},
{name:"Chicken Do Pyaza Full",price:480,image:"images/do-pyaza.jpg"},

{name:"Chicken Shawarma",price:90,image:"images/shawarma.jpg"},
{name:"Chicken Roll",price:90,image:"images/roll.jpg"},
{name:"Tawa Roti",price:10,image:"images/tawa-roti.jpg"},
{name:"Naan",price:10,image:"images/naan.jpg"},
{name:"Thumbs Up",price:20,image:"images/thumbsup.jpg"}
];

let cart=[];

const foodList=document.getElementById("food-list");
const cartBox=document.getElementById("cart");
const total=document.getElementById("total");

function displayFood(list=menu){

foodList.innerHTML="";

list.forEach((item,index)=>{

foodList.innerHTML+=`

<div class="card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="addToCart(${index})">

Add to Cart

</button>

</div>

`;

});

}

displayFood();

function addToCart(index){

cart.push(menu[index]);

updateCart();

}

function updateCart(){

cartBox.innerHTML="";

let sum=0;

cart.forEach((item,i)=>{

sum+=item.price;

cartBox.innerHTML+=`

<p>

${item.name}

- ₹${item.price}

<button onclick="removeItem(${i})">

❌

</button>

</p>

`;

});

total.innerHTML=sum;

}

function removeItem(index){

cart.splice(index,1);

updateCart();

}

function searchFood(){

let value=document
.getElementById("search")
.value
.toLowerCase();

let result=menu.filter(item=>

item.name
.toLowerCase()
.includes(value)

);

displayFood(result);

}

function checkout(){

if(cart.length==0){

alert("Cart is Empty");

return;

}

let message="🍗 Golden Chicken Biryani Order%0A%0A";

let totalAmount=0;

cart.forEach(item=>{

message+=item.name+" - ₹"+item.price+"%0A";

totalAmount+=item.price;

});

message+="%0ATotal : ₹"+totalAmount;

message+="%0A%0AAddress : ";

window.open(

"https://wa.me/917827724514?text="+message,

"_blank"

);

}
