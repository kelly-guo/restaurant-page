export function loadMenu(){

    const content = document.querySelector("#content");
    const wrapper = document.createElement("div")
    wrapper.classList.add("tab","menu-tab");

    const heading = document.createElement("h1");
    heading.textContent="FukuMomo Menu"

    const app = document.createElement("h2");
    app.textContent="Appetizers"
    const item1=document.createElement("p");
    item1.textContent="Gyoza"

    const main = document.createElement("h2");
    main.textContent="Main Courses"
    const item2=document.createElement("p");
    item2.textContent="Pork galbi"

    const dessert = document.createElement("h2");
    dessert.textContent="Desserts"
    const item3=document.createElement("p");
    item3.textContent="Caramel pudding"

    const tokyoImg=document.createElement("img");
    tokyoImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjGlGPcCZNnlUPshvCCQJZcvz6Iyk0X4L2wJ2SanEN4TQc7Aej1jTyLhgW&s=10"

    wrapper.append(heading,app,item1,main,item2,dessert,item3,tokyoImg);
    content.append(wrapper);

}