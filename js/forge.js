const forge_btn= document.querySelector("#forge_btn");
const opt= document.querySelector("select")
function addToCart(){
 const forgeObj ={name: "Forge Legend", price: 25,id: 4, console: opt.value};
 localStorage.setItem("shoppingcart4", JSON.stringify(forgeObj));
}
forge_btn.addEventListener("click", ()=>{addToCart()})