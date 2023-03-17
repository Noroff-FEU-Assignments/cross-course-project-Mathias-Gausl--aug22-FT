
const boxer_btn= document.querySelector("#boxer_btn");

function addToCart(){
 const boxerObj ={name: "Boxer", price: 20,id: 3};
 localStorage.setItem("shoppingcart3", JSON.stringify(boxerObj));
}
boxer_btn.addEventListener("click", ()=>{addToCart()})