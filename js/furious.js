
const furious_btn= document.querySelector("#furious_btn");

function addToCart(){
 const furiousObj ={name: "Furious", price: 55};
 localStorage.setItem("shoppingcart2", JSON.stringify(furiousObj));
}
furious_btn.addEventListener("click", ()=>{addToCart()})
