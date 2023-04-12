const url = "http://gamehubproducts.local/wp-json/wc/store/products";
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
        console.log(categori.name);
        if (objects.on_sale === true) {
          if (categori.name === categ) {
            con.innerHTML += `<a><h2>${objects.name}</h2><h3>${
              objects.description
            }</h3><p>${objects.prices.regular_price / 100}£${
              objects.prices.price / 100
            }£</p></a>`;
          }
        } else {
          if (categori.name === categ) {
            con.innerHTML += `<a><h2>${objects.name}</h2><h3>${
              objects.description
            }</h3><p>${objects.prices.price / 100}£</p></a>`;
          }
        }
      }
    }
  } catch (error) {
    console.log("error");
  }
};
export default getfunction;
