const menu = [
{
name:"Chicken Biryani Quarter",
price:100,
image:"https://images.unsplash.com/photo-1701579231305-d84d8af9b6d8?w=600"
},
{
name:"Chicken Biryani Half",
price:200,
image:"https://images.unsplash.com/photo-1701579231305-d84d8af9b6d8?w=600"
},
{
name:"Chicken Biryani Full",
price:350,
image:"https://images.unsplash.com/photo-1701579231305-d84d8af9b6d8?w=600"
},
{
name:"Chicken Korma Quarter",
price:110,
image:"https://images.unsplash.com/photo-1604908176997-4314ed1c06af?w=600"
},
{
name:"Chicken Korma Half",
price:220,
image:"https://images.unsplash.com/photo-1604908176997-4314ed1c06af?w=600"
},
{
name:"Chicken Korma Full",
price:400,
image:"https://images.unsplash.com/photo-1604908176997-4314ed1c06af?w=600"
},
{
name:"Chicken Handi Quarter",
price:140,
image:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600"
},
{
name:"Chicken Handi Half",
price:280,
image:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600"
},
{
name:"Chicken Handi Full",
price:480,
image:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600"
},
{
name:"Chicken Achari Quarter",
price:140,
image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600"
},
{
name:"Chicken Kali Mirch Full",
price:480,
image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600"
},
{
name:"Chicken Do Pyaza Full",
price:480,
image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600"
},
{
name:"Chicken Shawarma",
price:90,
image:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600"
},
{
name:"Chicken Roll",
price:90,
image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600"
},
{
name:"Tawa Roti",
price:10,
image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"
},
{
name:"Naan",
price:10,
image:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600"
},
{
name:"Thumbs Up",
price:20,
image:"https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=600"
}
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
<img src="${item.image}">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="addToCart(${index})">Add to Cart</button>
</div>`;
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
<p>${item.name} - ₹${item.price}
<button onclick="removeItem(${i})">❌</button>
</p>`;
});
total.innerHTML=sum;
}

function removeItem(index){
cart.splice(index,1);
updateCart();
}

function searchFood(){
let value=document.getElementById("search").value.toLowerCase();
displayFood(menu.filter(item=>item.name.toLowerCase().includes(value)));
}

function checkout(){
if(cart.length===0){
alert("Cart is empty");
return;
}
let msg="🍗 Golden Chicken Biryani Order%0A%0A";
let amount=0;
cart.forEach(item=>{
msg+=item.name+" - ₹"+item.price+"%0A";
amount+=item.price;
});
msg+="%0ATotal = ₹"+amount;
msg+="%0A%0AAddress:";
window.open("https://wa.me/917827724514?text="+msg,"_blank");
}
