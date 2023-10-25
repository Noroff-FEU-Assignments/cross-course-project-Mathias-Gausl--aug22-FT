const super_btn = document.querySelector("#super_btn");
const opt = document.querySelector("select");
function addToCart() {
  const superObj = {
    name: "Super Duper",
    price: 15,
    id: 10,
    console: opt.value,
  };
  localStorage.setItem("shoppingcart10", JSON.stringify(superObj));
}
super_btn.addEventListener("click", () => {
  addToCart();
});
