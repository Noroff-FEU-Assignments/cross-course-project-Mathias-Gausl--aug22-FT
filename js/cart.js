const con = document.querySelector("#cart_con");
const total = document.querySelector("#total");
const checkout = document.querySelector("#checkout_btn");
let sum= 0
function displayCart() {
    if(localStorage.length === 0){
        con.innerHTML=`<div class="cart_items"><h2>Looks like your cart is Empty</h2></div>`;
        checkout.innerHTML= "Products";
        checkout.href="products.html";
    }
  else{
  for (let i = 0; i < localStorage.length; i++) {
    let unParseditems = localStorage.getItem(localStorage.key(i));
    let items = JSON.parse(unParseditems);
    con.innerHTML += `<div class="cart_items"><h2>${items.name}</h2><em class= "consoleType">${items.console}</em>
    <em>Price: ${items.price}£</em>
    <button class="remove" data-secondid="${items.id}">-</button></div>`;
    sum += items.price;
    total.innerHTML="Total:"+" "+ sum + "£";
  }}
}
displayCart();
con.addEventListener("click", (button)=>{
   if(button.target.classList.contains("remove")){
    let id=button.target.dataset.secondid;
    localStorage.removeItem("shoppingcart"+id);
    location.reload();
}})















