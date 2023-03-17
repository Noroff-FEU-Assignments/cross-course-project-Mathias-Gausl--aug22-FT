const cart = document.querySelector("#cart");
const buyBtn = document.querySelector(".buy")
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
if(buyBtn != null){buyBtn.addEventListener("click",()=>{location.reload()})};


