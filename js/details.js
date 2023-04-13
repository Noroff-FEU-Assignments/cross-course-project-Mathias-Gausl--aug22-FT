const url = "http://gamehubproducts.local/wp-json/wc/store/products/";
const querry = document.location.search;
const newParam = new URLSearchParams(querry);
const idParameter = newParam.get("id");
const newUrl = url + idParameter;
const detailCon = document.querySelector(".details");
const loader = document.querySelector(".loading");
const html = document.createElement("div");
html.setAttribute("class","detailsMain")
let image = "";
detailCon.append(html);
async function game() {
  try {
    let resp = await fetch(newUrl);
    let json = await resp.json();
    console.log(json);
    loader.remove();
    return json;
  } catch (error) {
    console.log(error);
  }
}
function detail(json) {
  console.log(json);
  html.innerHTML += `<h1>${json.name}</h1><div class="game_img"><img src="${json.images[0].src}"alt="${json.name} game cover">
  </img></div><div class="rating_img"><img src="${json.images[1].src}"alt="Game Hub rating"></img>
  </div><p class="description">${json.short_description}</p><div class="select"><select name="consoll" id="options" class="consol">
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
}
detail(await game());
