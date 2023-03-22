const pingpong_btn= document.querySelector("#pingpong_btn");
const opt= document.querySelector("select")
function addToCart(){
 const pingpongObj ={name: "Ping Pong Champion", price: 25, id: 8, console: opt.value};
 localStorage.setItem("shoppingcart8", JSON.stringify(pingpongObj));
}
pingpong_btn.addEventListener("click", ()=>{addToCart()})





