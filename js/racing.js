const racing_btn= document.querySelector("#racing_btn");
function addToCart(){
 const racingObj ={name: "Racing", price: 20,id: 6, console: "PS4" };
 localStorage.setItem("shoppingcart6", JSON.stringify(racingObj));
}
racing_btn.addEventListener("click", ()=>{addToCart()})
