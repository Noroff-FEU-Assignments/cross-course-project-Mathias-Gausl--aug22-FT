let cart = document.querySelector("#cart");
let buyBtn = document.querySelector(".buy")
let num = localStorage.length;
function newItem() {
  if (localStorage.length ++) {
    cart.innerHTML += `<em  class="itemAdded">${num}</em>`;
    cart.style.fontSize = "1.3em";

    
  } else {
    cart.innerHTML = ` 
      <a href="cart.html" id="cart">
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
    `;
  }
  
}
newItem();
buyBtn.addEventListener("click",()=>{location.reload()});