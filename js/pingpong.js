const pingpong_btn= document.querySelector("#pingpong_btn");

function addToCart(){
 const pingpongObj ={name: "Ping Pong Champion", price: 25, id: 8};
 localStorage.setItem("shoppingcart8", JSON.stringify(pingpongObj));
}
pingpong_btn.addEventListener("click", ()=>{addToCart()})

