let itemprodcut=[];
let itemobject=[
    {
        id:101,
        name:'biryani',
        Image:'OIP (16).jpg',
        price:300,
        rating:5,
    
    
    },
    {
        id:102,
        name:'hoddies',
        Image:'product-4.jpg',
        price:1000,
        rating:4.5
    },
    {
        id:103,
        name:'black-hoddies',
        Image:'product-5.jpg',
        price:5000,
        rating:4.6
    },
    {
        id:101,
        name:'ear-ring',
        Image:'R (1).jpg',
        price:9000,
        rating:4.3
    },
    {
        id:104,
        name:'t-shirt',
        Image:'5 - Copy.jpg',
        price:4000,
        rating:3.9
    },
   
]

let body=document.querySelector('body');
let product=document.querySelector('.products');
let shoppingbaset=document.querySelector('.shopping-baset');
let cart=document.querySelector('.cart');
let close=document.getElementsByName('close');
let productlist=document.querySelector('.prodcutlist');
shoppingbaset.addEventListener("click",()=>{
    cart.classList.add('carti');
    
});





showitem();
function showitem(){

    itemobject.forEach((item,key)=>{
        let div=document.createElement('div');

       div.innerHTML=`  <img src="${item.Image}" alt="">
       <h1>${item.name}</h1>
       <div class="price">
           <p>Rs.${item.price}</p>
       </div>
       <div class="rating">
           <h4>Rating:${item.rating}</h4>
       </div>
       <button onclick="addtobag(${itemobject.id})">Add To Cart</button>

   </div>`;
       
       product.appendChild(div);
       
    })
}

function addtobag(id){
    itemprodcut.push(id);
}