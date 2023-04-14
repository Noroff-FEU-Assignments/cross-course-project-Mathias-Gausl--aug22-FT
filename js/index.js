import { getfunction } from "./fetchApi.js";
import { createHtml } from "./fetchApi.js";
const featured = document.querySelector(".featuredCon");
const news = document.querySelector(".newsCon");
const sales = document.querySelector(".salesCon");
const salesh1 = document.querySelector(".sales");
const newsh1 = document.querySelector(".news");
const featuredh1 = document.querySelector(".featured");
renderFeatured(await apiFeatured());
createHtml(await getfunction(), "News", news);
createHtml(await getfunction(), "deals", sales);
async function apiFeatured() {
  try {
    const fetchapi = await fetch(
      "http://gamehubproducts.local/wp-json/wc/store/products?featured=true"
    );
    const gamesJson = await fetchapi.json();
    console.log(gamesJson);
    return gamesJson;
  } catch (error) {
    console.log(error);
  }
}
function renderFeatured(api) {
  for (let i = 0; i < api.length; i++) {
    let objects = api[i];
      let image = objects.images[0];
      if (objects.on_sale === true) {
        featured.innerHTML += `<a class="slide" href="gameDetails.html?id=${
          objects.id
        }"><img src="${image.src}" alt="${objects.name} game cover"</img><h2>${
          objects.name
        }</h2><h3>${objects.description}</h3><em class= "oldPrice">${
          objects.prices.regular_price / 100
        }£</em><em class="currentPrice">${
          objects.prices.price / 100
        }£</em></a>`;
      } if(objects.on_sale !== true){
        featured.innerHTML += `<a class="slide" href="gameDetails.html?id=${
          objects.id
        }"><img src="${image.src}" alt="${objects.name} game cover"><h2>${
          objects.name
        }</h2></img><h3>${objects.description}</h3><em class="currentPrice">${
          objects.prices.price / 100
        }£</em></a>`;
      }
  }
}

