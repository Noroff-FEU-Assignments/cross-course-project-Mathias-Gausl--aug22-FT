const forge_btn= document.querySelector("#forge_btn");

function addToCart(){
 const forgeObj ={name: "Forge Legend", price: 25,id: 4};
 localStorage.setItem("shoppingcart4", JSON.stringify(forgeObj));
}
forge_btn.addEventListener("click", ()=>{addToCart()})