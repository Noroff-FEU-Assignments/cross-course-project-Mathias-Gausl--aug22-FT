import {getfunction} from "./fetchApi.js";
import {createHtml} from "./fetchApi.js";
const proCon= document.querySelector(".products");
createHtml(await getfunction(), "all", proCon)

