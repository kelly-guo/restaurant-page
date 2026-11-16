import "./styles.css";
import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";

const content = document.querySelector("#content");

function switchTab(loadTab){
    content.textContent="";
    loadTab();

}

const aboutBtn = document.querySelector(".about");
aboutBtn.addEventListener("click", () => switchTab(loadAbout));
const homeBtn = document.querySelector(".home");
aboutBtn.addEventListener("click", () => switchTab(loadHome));
const menuBtn = document.querySelector(".menu");
aboutBtn.addEventListener("click", () => switchTab(loadMenu));
