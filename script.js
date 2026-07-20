const products = [
{
id:1,
name:"Premium White Panjabi",
category:"Men's Clothes",
price:1499,
image:"https://picsum.photos/300/350?random=1"
},
{
id:2,
name:"Black Jubba",
category:"Men's Clothes",
price:1699,
image:"https://picsum.photos/300/350?random=2"
},
{
id:3,
name:"Royal Attar",
category:"Attar",
price:499,
image:"https://picsum.photos/300/350?random=3"
},
{
id:4,
name:"Prayer Tupi",
category:"Tupi",
price:299,
image:"https://picsum.photos/300/350?random=4"
},
{
id:5,
name:"Islamic Gift Box",
category:"Gift Item",
price:999,
image:"https://picsum.photos/300/350?random=5"
},
{
id:6,
name:"Women's Abaya",
category:"Women's Fashion",
price:1899,
image:"https://picsum.photos/300/350?random=6"
}
];

const container = document.getElementById("products");

function showProducts(data){

container.innerHTML="";

data.forEach(item=>{

container.innerHTML +=`

<div class="product-card">

<img src="${item.image}">

<div class="product-info">

<h3>${item.name}</h3>

<p>${item.category}</p>

<div class="price">₹${item.price}</div>

<a class="order-btn"
href="https://wa.me/919286346530?text=I want to order ${encodeURIComponent(item.name)}"
target="_blank">

Order Now

</a>

</div>

</div>

`;

});

}

showProducts(products);

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let result=products.filter(item=>

item.name.toLowerCase().includes(value) ||

item.category.toLowerCase().includes(value)

);

showProducts(result);

});
