const url = "https://wp.gamehubstore.live/wp-json/wc/store/products/";
const querry = document.location.search;
const newParam = new URLSearchParams(querry);
const idParameter = newParam.get("id");
const newUrl = url + idParameter;
const detailCon = document.querySelector(".details");
const loader = document.querySelector(".loading");
const title = document.querySelector("title");
const html = document.createElement("div");
html.setAttribute("class", "detailsMain");
let image = "";
detailCon.append(html);
async function game() {
  try {
    let resp = await fetch(newUrl);
    let json = await resp.json();
    loader.remove();
    return json;
  } catch (error) {
    console.log(error);
  }
}
function detail(json) {
  title.innerHTML = `${json.name} details`
  html.innerHTML += `<h1>${json.name}</h1><div class="game_img"><img src="${
    json.images[0].src
  }"alt="${json.name} game cover">
  </img></div><div class="rating_img"><img src="${
    json.images[1].src
  }"alt="Game Hub rating"></img>
  </div><p class="description">${
    json.short_description
  }</p><div class="select"><select name="consoll" id="options" class="consol">
  <option value="PS5">PS5</option>
  <option value="PC">PC</option>
  <option value="Xbox-One">Xbox One</option>
  </select></div>
  <button class="cta_p buy" id="pingpong_btn">
  <em class="priceBtn">${json.prices.price / 100}£</em></button>`;
  if (json.on_sale === true) {
    const button = detailCon.querySelector(".cta_p");
    button.innerHTML = `<em class= "oldPriceBtn">${
      json.prices.regular_price / 100
    }£</em><em class="priceBtn">${json.prices.price / 100}£</em>`;
  }
  const buyBtn = document.querySelector(".buy");
  function addToCart() {
    let consol = document.querySelector("#options");
    for (let i = 0; i < json.categories.length; i++) {
      game = json.categories[i];
      if (game.name === "used") {
        let description = json.description;
        let descriptionRemovedTag = description
          .replace(`<p>`, ` `)
          .replace(`</p>`, ` `);
        let object = {
          name: json.name,
          price: json.prices.price / 100,
          console: descriptionRemovedTag,
          id: json.id,
        };
        localStorage.setItem(
          "shoppingcart" + idParameter,
          JSON.stringify(object)
        );
        location.reload();
      } else {
        let object = {
          name: json.name,
          price: json.prices.price / 100,
          console: consol.value,
          id: json.id,
        };
        localStorage.setItem(
          "shoppingcart" + idParameter,
          JSON.stringify(object)
        );
        location.reload();
      }
    }
  }
  buyBtn.addEventListener("click", () => {
    addToCart();
  });
}
function CheckIfGameIsUsed(json) {
  let select = document.querySelector("select");
  for (let i = 0; i < json.categories.length; i++) {
    game = json.categories[i];
    if (game.name === "used") {
      select.style.display = "none";
    }
  }
}
detail(await game());
CheckIfGameIsUsed(await game());
