const super_btn= document.querySelector("#super_btn");

function addToCart(){
 const superObj ={name: "Super Duper", price: 15,id: 10};
 localStorage.setItem("shoppingcart10", JSON.stringify(superObj));
}
super_btn.addEventListener("click", ()=>{addToCart()})