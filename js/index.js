const news= document.querySelector(".newsCon");
const sales= document.querySelector(".salesCon");
import getfunction from "./fetchApi.js";
getfunction("News",news)
getfunction("deals",sales)