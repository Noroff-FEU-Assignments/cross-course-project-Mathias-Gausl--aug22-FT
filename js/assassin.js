const assassin_btn= document.querySelector("#assassin_btn");
const opt= document.querySelector("select")
function addToCart(){
 const assassinObj ={name: "Assassin", price: 55, id: 1, console: opt.value};
 localStorage.setItem("shoppingcart1", JSON.stringify(assassinObj));
}
assassin_btn.addEventListener("click", ()=>{addToCart()})

