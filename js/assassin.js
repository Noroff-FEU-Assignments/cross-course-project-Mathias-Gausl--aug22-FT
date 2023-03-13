const assassin_btn= document.querySelector("#assassin_btn");

function addToCart(){
 const assassinObj ={name: "Assassin", price: 55};
 localStorage.setItem("shoppingcart", JSON.stringify(assassinObj));
}
assassin_btn.addEventListener("click", ()=>{addToCart()})

