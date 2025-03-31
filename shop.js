const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const check = document.querySelector(".check");
const list = document.querySelector(".list");
const listCart = document.querySelector(".listCart");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");
let count = 0;

openShopping.addEventListener("click", () => {
    body.classList.add("active")
})
closeShopping.addEventListener("click", ()=> {
    body.classList.remove("active")
})
check.addEventListener("click", ()=> {
    if(count != 0){
        window.location.href = "checkout.html";
    }else{
        alert("There are no items in the cart!")
    }
})

let products = [
    {
        id: 1,
        name: "SEA COMPLAINS TEE",
        images: "1.png",
        price: 4.99
    },
    {
        id: 2,
        name: "MY HOME TEE",
        images: "2.png",
        price: 5.99
    },
    {
        id: 3,
        name: "SAVE THE OCEAN TEE",
        images: "3.png",
        price: 8
    },
    {
        id: 4,
        name: "WATER BOTTLE",
        images: "4.png",
        price: 13.00
    },{
        id: 5,
        name: "MR. DOLPHIN PLUSH",
        images: "5.png",
        price: 17
    },{
        id: 6,
        name: "SEAHORSE PLUSH",
        images: "6.png",
        price: 16
    },{
        id: 7,
        name: "LEARN THE ANIMALS CLOCK",
        images: "7.png",
        price: 38.99
    },
    {
        id: 8,
        name: "TURTLE BEACH SHORTS",
        images: "8.png",
        price: 12
    },
    {
        id: 9,
        name: "ICON BEACH SHORTS",
        images: "9.png",
        price: 11.55
    },
    {
        id: 10,
        name: "SUNSHINE BEACH SHORTS",
        images: "10.png",
        price: 10.55
    },{
        id: 11,
        name: "WHALE HAT",
        images: "11.png",
        price: 8
    },{
        id: 12,
        name: "NEMO HAT",
        images: "12.png",
        price: 7.49
    }
]

const listCarts = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src="img2/${value.images}">
        <div class ="title">${value.name}</div>
        <div class ="price">$ ${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv)
    })
}

initApp();

const addToCart = (key) => {
    if(listCarts[key] == null){
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }else{
        listCarts[key].quantity += 1;
    }

    reloadCart();
}

const reloadCart = () => {
    listCart.innerHTML = "";
    count = 0;
    let totalPrice = 0;

    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div> <img src="img2/${value.images}"> </div>
                <div class ="cartTitle">${value.name}</div>
                <div class ="cartPrice">${value.price.toLocaleString()}</div>
                <div>
                    <button style="background-color: #09566b" 
                    class="cartButton" onclick="changeQuantity(${key},
                    ${value.quantity - 1})">-</button>
                    <div class ="count">${value.quantity}</div>
                    <button style="background-color: #09566b" 
                    class="cartButton" onclick="changeQuantity(${key},
                    ${value.quantity + 1})">+</button>
                </div>
            `
            listCart.appendChild(newDiv);
        }

        total.innerText = `Total : $ ${totalPrice.toLocaleString()}`;
        quantity.innerText = count;
    })
}

const changeQuantity = (key, quantity) => {
    if(quantity == 0){
        delete listCarts[key]
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price
    }

    reloadCart()
}
