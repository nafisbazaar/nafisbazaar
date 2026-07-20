const products = [
  {id:1,name:"Premium White Panjabi",category:"Men's Clothes",price:1499,image:"https://picsum.photos/300/350?random=1"},
  {id:2,name:"Black Jubba",category:"Men's Clothes",price:1699,image:"https://picsum.photos/300/350?random=2"},
  {id:3,name:"Royal Attar",category:"Attar",price:499,image:"https://picsum.photos/300/350?random=3"},
  {id:4,name:"Prayer Tupi",category:"Tupi",price:299,image:"https://picsum.photos/300/350?random=4"},
  {id:5,name:"Islamic Gift Box",category:"Gift Item",price:999,image:"https://picsum.photos/300/350?random=5"},
  {id:6,name:"Women's Abaya",category:"Women's Fashion",price:1899,image:"https://picsum.photos/300/350?random=6"},
  {id:7,name:"Premium White Tupi",category:"Tupi",price:349,image:"https://picsum.photos/300/350?random=7"},
  {id:8,name:"Black Tupi",category:"Tupi",price:299,image:"https://picsum.photos/300/350?random=8"},
  {id:9,name:"Oud Attar",category:"Attar",price:699,image:"https://picsum.photos/300/350?random=9"},
  {id:10,name:"Musk Attar",category:"Attar",price:599,image:"https://picsum.photos/300/350?random=10"},
  {id:11,name:"Premium Panjabi",category:"Men's Clothes",price:1599,image:"https://picsum.photos/300/350?random=11"},
  {id:12,name:"Cotton Jubba",category:"Men's Clothes",price:1799,image:"https://picsum.photos/300/350?random=12"},
  {id:13,name:"Luxury Gift Box",category:"Gift Item",price:1199,image:"https://picsum.photos/300/350?random=13"},
  {id:14,name:"Tasbih Gift Set",category:"Gift Item",price:799,image:"https://picsum.photos/300/350?random=14"},
  {id:15,name:"Black Abaya",category:"Women's Fashion",price:1999,image:"https://picsum.photos/300/350?random=15"},
  {id:16,name:"Hijab Premium",category:"Women's Fashion",price:499,image:"https://picsum.photos/300/350?random=16"}
];

const container = document.getElementById("products");

function showProducts(data){
  container.innerHTML="";

  data.forEach(item=>{
    container.innerHTML += `
      <div class="product-card">
        <img src="${item.image}" alt="${item.name}">
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

// Search
document.getElementById("search").addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const result=products.filter(item=>

item.name.toLowerCase().includes(value) ||

item.category.toLowerCase().includes(value)

);

showProducts(result);

});

// Category Filter

const buttons=document.querySelectorAll(".category button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const category=button.textContent;

if(category==="All"){
showProducts(products);
return;
}

const filtered=products.filter(item=>item.category===category);

showProducts(filtered);

});

});
