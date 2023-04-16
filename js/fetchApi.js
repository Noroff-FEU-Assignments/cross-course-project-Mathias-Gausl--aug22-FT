const url = "http://gamehubproducts.local/wp-json/wc/store/products";
const loading = document.querySelector(".loading");
export let getfunction = async function getGames() {
  try {
    const fetchapi = await fetch(url);
    const gamesJson = await fetchapi.json();
    console.log(gamesJson)
    return gamesJson;
  } catch (error) {
    console.log(error);
  }
};
export function createHtml(apiFunction, categ, con) {
  loading.style.display="none";
  for (let i = 0; i < apiFunction.length; i++) {
    let objects = apiFunction[i];
    for (let i = 0; i < objects.categories.length; i++) {
      let categori = objects.categories[i];
      let image = objects.images[0];
      if (objects.on_sale === true) {
        if (categori.name === categ) {
          loading.style.margin = "0";
          con.innerHTML += `<a class="slide" href="gameDetails.html?id=${
            objects.id
          }"><img src="${image.src}" alt="${
            objects.name
          } game cover"</img><h2>${objects.name}</h2><h3>${
            objects.description
          }</h3><em class= "oldPrice">${
            objects.prices.regular_price / 100
          }£</em><em class="currentPrice">${
            objects.prices.price / 100
          }£</em></a>`;
        }
      } else {
        if (categori.name === categ) {
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
  }
}

