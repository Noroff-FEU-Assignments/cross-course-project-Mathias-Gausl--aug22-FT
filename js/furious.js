const furious_btn = document.querySelector("#furious_btn");
const opt = document.querySelector("select");
function addToCart() {
  const furiousObj = { name: "Furious", price: 55, id: 2, console: opt.value };
  localStorage.setItem("shoppingcart2", JSON.stringify(furiousObj));
}
furious_btn.addEventListener("click", () => {
  addToCart();
});
