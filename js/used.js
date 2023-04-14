import {getfunction} from "./fetchApi.js";
import {createHtml} from "./fetchApi.js";
const usedCon= document.querySelector(".products");
createHtml(await getfunction(), "used", usedCon);