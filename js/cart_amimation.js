const cart = document.querySelector("#cart");
const cartMob = document.querySelector("#cartMobile");
const buyBtn = document.querySelector(".buy")
const ham = document.querySelector("#checkbox");
const nav = document.querySelector("nav");
nav.classList.add("ham")
let num = localStorage.length;




function newItem() {
  if (localStorage.length ++) {
    cart.innerHTML += `<em  class="itemAdded">${num}</em>`;
    cart.style.fontSize = "1.5em";
    cartMob.innerHTML += `<em  class="itemAdded">${num}</em>`;
    cartMob.style.fontSize = "1.3em";

    
  } else {
    cart.innerHTML = ` 
      <a href="cart.html" id="cart">
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
    `;
    cartMob.innerHTML = ` 
      <a href="cart.html" id="cartMobile">
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
    `;
  }
  
}
newItem();
if(buyBtn != null){buyBtn.addEventListener("click",()=>{location.reload()})};
ham.addEventListener("click", ()=>{nav.classList.toggle("ham");})

