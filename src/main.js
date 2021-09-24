let carts = document.querySelectorAll('.add-to-cart')

let products =[
    {
        name: "Баскетбольний м'яч",
        tagname: "basketball",
        price: 150,
        inCart: 0,
    },
    {
        name: "Футбольний м'яч",
        tagname: "football",
        price: 100,
        inCart: 0
    },
    
    {
        name: "М'яч для регбі",
        tagname: "rugby",
        price: 360,
        inCart: 0
    },
    {
        name: "Футболка",
        tagname: "t-shirt",
        price: 200,
        inCart: 0
    },
    {   name: "М'яч для тенісу",
        tagname: "tennis",
        price: 50,
        inCart: 0
    },
    {
        name: "Ракетка для тенісу",
        tagname: "tennis-racket",
        price: 127,
        inCart: 0
    }
]


for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', function(){
        cartNumbers(products[i]);
        totalPrice(products[i]);
    })
}

function loadCartsNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers;

    }
}

function cartNumbers(product){
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(".cart span").textContent = 1;

    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)

    if(cartItems != null){
        
        if(cartItems[product.tagname] == undefined){
            cartItems = {
                ...cartItems,
                [product.tagname]: product
            }
        }
        cartItems[product.tagname].inCart += 1;
    }
    
    else{
        product.inCart = 1;
        cartItems = {
            [product.tagname]: product
        }
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalPrice(product){

   //console.log(product.price);
    let cartPrice = localStorage.getItem("totalPrice");

    if(cartPrice != null){
        cartPrice = parseInt(cartPrice);
        localStorage.setItem("totalPrice", cartPrice + product.price);
    }
    else{
        localStorage.setItem("totalPrice", product.price);
    }
}   
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer=document.querySelector(".products");
    let cartPrice = localStorage.getItem("totalPrice");

    if(cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img src="./img/outline_delete_black_24dp.png">
                <img src="./img/${item.tagname}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price} UAH</div>
            <div class="quantity">                          
            <img src="./img/outline_add_black_24dp.png"><span>${item.inCart}</span>
            <img src="./img/outline_remove_black_24dp.png">
            </div>
            <div class="total">
                ${item.inCart * item.price},00 UAH
            </div>
            `;
                
        });

        productContainer.innerHTML += `
        <div class="baskettotalContainer>
            <h4 class="basketTotalTitle></h4>
            <h4 class="basketTotal">${cartPrice},00 UAH</h4>
        
        `


    }
}
    

loadCartsNumber();
displayCart();