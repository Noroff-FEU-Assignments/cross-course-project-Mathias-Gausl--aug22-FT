const url = "http://gamehubproducts.local/wp-json/wc/store/products";
const loading = document.querySelector(".loading");
const card = document.querySelector(".slide");
let getfunction = async function getGames(categ, con) {
  try {
    const fetchapi = await fetch(url);
    const gamesJson = await fetchapi.json();
    console.log(gamesJson);
    for (let i = 0; i < gamesJson.length; i++) {
      let objects = gamesJson[i];
      console.log(objects);
      for (let i = 0; i < objects.categories.length; i++) {
        let categori = objects.categories[i];
        let image = objects.images[0];
        console.log(categori.name);
        if (objects.on_sale === true) {
          if (categori.name === categ) {
            loading.innerHTML = "";
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
            loading.innerHTML = "";
            loading.style.margin = "0";
            con.innerHTML += `<a class="slide" href="gameDetails.html?id=${
              objects.id
            }"><img src="${image.src}" alt="${objects.name} game cover"><h2>${
              objects.name
            }</h2></img><h3>${
              objects.description
            }</h3><em class="currentPrice">${
              objects.prices.price / 100
            }£</em></a>`;
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
export default getfunction;
