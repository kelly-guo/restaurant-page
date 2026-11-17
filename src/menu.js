export function loadMenu(){

    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent="FukuMomo Menu"

    const app = document.createElement("h2");
    description.textContent="Appetizers"
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
    tokyoImg.src="https://media.digitalnomads.world/wp-content/uploads/2021/02/20120635/tokyo-for-digital-nomads.jpg"

    content.append(heading,app,item1,item2,main,dessert,item3,tokyoImg)

}