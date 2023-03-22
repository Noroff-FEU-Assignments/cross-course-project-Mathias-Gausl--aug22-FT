const space_btn= document.querySelector("#space_btn");
function addToCart(){
 const spaceObj ={name: "Space War", price: 20,id: 5, console: "PC"};
 localStorage.setItem("shoppingcart5", JSON.stringify(spaceObj));
}
space_btn.addEventListener("click", ()=>{addToCart()})