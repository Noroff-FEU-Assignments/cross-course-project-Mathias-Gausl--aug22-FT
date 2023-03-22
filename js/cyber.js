const cyber_btn= document.querySelector("#cyber_btn");
function addToCart(){
 const cyberObj ={name: "Cyberpunk", price: 20,id: 7, console: "Xbox-360"};
 localStorage.setItem("shoppingcart7", JSON.stringify(cyberObj));
}
cyber_btn.addEventListener("click", ()=>{addToCart()})