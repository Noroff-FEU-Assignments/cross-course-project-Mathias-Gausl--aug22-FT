import { getfunction } from "./fetchApi.js";
const select = document.querySelector("#sorting");
const con = document.querySelector(".products");
const loading = document.querySelector(".loading");
const search = document.querySelector("#search");
let sortedlist = await getfunction();
let searchResult = await getfunction();
function html(list) {
  con.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    let objects = list[i];
    let image = objects.images[0];
    if (objects.on_sale === true) {
      loading.style.margin = "0";
      con.innerHTML += `<a class="slide" href="gameDetails.html?id=${
        objects.id
      }"><img src="${image.src}" alt="${objects.name} game cover"</img><h2>${
        objects.name
      }</h2><h3>${objects.description}</h3><em class= "oldPrice">${
        objects.prices.regular_price / 100
      }£</em><em class="currentPrice">${objects.prices.price / 100}£</em></a>`;
    } else {
      loading.style.margin = "0";
      con.innerHTML += `<a class="slide" href="gameDetails.html?id=${
        objects.id
      }"><img src="${image.src}" alt="${objects.name} game cover"><h2>${
        objects.name
      }</h2></img><h3>${objects.description}</h3><em class="currentPrice">${
        objects.prices.price / 100
      }£</em></a>`;
      loading.innerHTML = "";
    }
  }
}
select.addEventListener("change", () => {
  if (select.value === "price") {
    searchResult.sort((item1, item2) => {
      if (item1.prices.price > item2.prices.price) {
        return 1;
      } else if (item1.prices.price < item2.prices.price) {
        return -1;
      } else {
        return 0;
      }
    });
    html(searchResult);
  } else if (select.value === "priceHigh") {
    searchResult.sort((item1, item2) => {
      if (item1.prices.price < item2.prices.price) {
        return 1;
      } else if (item1.prices.price > item2.prices.price) {
        return -1;
      } else {
        return 0;
      }
    });
    html(searchResult);
  } else if (select.value === "a") {
    searchResult.sort((item1, item2) => {
      if (item1.name > item2.name) {
        return 1;
      } else if (item1.name < item2.name) {
        return -1;
      } else {
        return 0;
      }
    });
    html(searchResult);
  } else if (select.value === "noSort") {
    location.reload();
  }
});
search.addEventListener("keyup", () => {
  let value = search.value.trim().toUpperCase();
  searchResult = sortedlist.filter((search) => {
    if (search.name.toUpperCase().includes(value)) {
      return true;
    }
  });
  console.log(searchResult);
  if (searchResult.length >= 1) {
    html(searchResult);
    console.log(searchResult);
  } else {
    con.innerHTML = `<h2>Sorry no matches</h2>`;
  }
});
html(searchResult);
