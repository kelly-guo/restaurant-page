import "./styles.css";
import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";
import { loadMenu } from "./menu.js";

const content = document.querySelector("#content");

function switchTab(loadTab){
    content.textContent="";
    loadTab();

}

const aboutBtn = document.querySelector("#about");
aboutBtn.addEventListener("click", () => switchTab(loadAbout));
const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => switchTab(loadHome));
const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => switchTab(loadMenu));

loadHome();