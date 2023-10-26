const cart_content = document.querySelector("#cart_con");
const checkout_btn = document.querySelector("#checkout_btn");
const total = document.querySelector("#total");
let content = [];
let sum = 0;
content.push(localStorage.getItem("shoppingcart1"));
content.push(localStorage.getItem("shoppingcart2"));
content.push(localStorage.getItem("shoppingcart3"));
content.push(localStorage.getItem("shoppingcart4"));
content.push(localStorage.getItem("shoppingcart5"));
content.push(localStorage.getItem("shoppingcart6"));
content.push(localStorage.getItem("shoppingcart7"));
content.push(localStorage.getItem("shoppingcart8"));
content.push(localStorage.getItem("shoppingcart9"));
content.push(localStorage.getItem("shoppingcart10"));

let filteredContent = content.filter((items) => {
  return items !== null;
});

function displayContent() {
  for (let i = 0; i < filteredContent.length; i++) {
    let parsedContent = JSON.parse(filteredContent[i]);
    cart_content.innerHTML += `<div class="cart_items"><h2>${parsedContent.name} <em class= "consoleType">Console: ${parsedContent.console}</em></h2><p>Price: ${parsedContent.price}£</p><buttton class="remove" id= "${parsedContent.id}">-</button></div>`;
    sum += parsedContent.price;
    total.innerHTML = "Total:" + " " + sum + "£";
  }
}

if (localStorage.length >= 1) {
  displayContent();
  checkout_btn.href = "checkout.html";
} else {
  cart_content.innerHTML += `<div class="cart_items"><h2>Looks like your cart is Empty</h2><div>`;
  cart_content.style.textAlign = "center";
  checkout_btn.href = "products.html";
  checkout_btn.innerHTML = "Products";
}

// remove button

let removeAssassin = document.getElementById(1);
let removeFurious = document.getElementById(2);
let removeBoxer = document.getElementById(3);
let removeForge = document.getElementById(4);
let removeSpace = document.getElementById(5);
let removeRacing = document.getElementById(6);
let removecyber = document.getElementById(7);
let removePingpong = document.getElementById(8);
let removeBlack = document.getElementById(9);
let removeSuper = document.getElementById(10);

if (removeAssassin !== null) {
  removeAssassin.addEventListener("click", () => {
    content.pop(localStorage.removeItem("shoppingcart1"), location.reload());
  });
}
if (removeFurious !== null) {
  removeFurious.addEventListener("click", () => {
    content.pop(localStorage.removeItem("shoppingcart2"), location.reload());
  });
}
if (removeBoxer !== null) {
  removeBoxer.addEventListener("click", () => {
    content.pop(localStorage.removeItem("shoppingcart3"), location.reload());
  });
}
if (removeForge !== null) {
  removeForge.addEventListener("click", () => {
    content.pop(localStorage.removeItem("shoppingcart4"), location.reload());
  });
}
if (removeSpace !== null) {
  removeSpace.addEventListener("click", () => {
    content.pop(localStorage.removeItem("shoppingcart5"), location.reload());
  });
}
if (removeRacing !== null) {
  removeRacing.addEventListener("click", () => {
    content.pop(localStorage.removeItem("shoppingcart6"), location.reload());
  });
}
if (removecyber !== null) {
  removecyber.addEventListener("click", () => {
    content.pop(localStorage.removeItem("shoppingcart7"), location.reload());
  });
}
if (removePingpong !== null) {
  removePingpong.addEventListener("click", () => {
    content.pop(localStorage.removeItem("shoppingcart8"), location.reload());
  });
}
if (removeBlack !== null) {
  removeBlack.addEventListener("click", () => {
    content.pop(localStorage.removeItem("shoppingcart9"), location.reload());
  });
}
if (removeSuper !== null) {
  removeSuper.addEventListener("click", () => {
    content.pop(localStorage.removeItem("shoppingcart10"), location.reload());
  });
}
