const black_btn= document.querySelector("#black_btn");
const opt= document.querySelector("select")
function addToCart(){
 const blackObj ={name: "black", price: 20, id: 9, console: opt.value};
 localStorage.setItem("shoppingcart9", JSON.stringify(blackObj));
}
black_btn.addEventListener("click", ()=>{addToCart()})