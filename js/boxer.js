const boxer_btn= document.querySelector("#boxer_btn");
const opt= document.querySelector("select")
function addToCart(){
 const boxerObj ={name: "Boxer", price: 20,id: 3, console: opt.value};
 localStorage.setItem("shoppingcart3", JSON.stringify(boxerObj));
}
boxer_btn.addEventListener("click", ()=>{addToCart()})