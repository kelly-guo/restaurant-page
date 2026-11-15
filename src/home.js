
export function loadHome(){

    const content = document.querySelector("#content");

    const heading =document.createElement("h1");
    heading.textContent="FukuMomo"

    const restaurantImg = document.createElement("img");
    restaurantImg.src="https://static01.nyt.com/images/2023/10/28/multimedia/28momofuku-flbq/27momofuku-flbq-articleLarge.jpg?quality=75&auto=avif&disable=upscale";

    const description = document.createElement("p");
    description.textContent="Enjoy asian fusion food here. Made with elegance and precision, the finest ingredients imported from the source."

    const foodImg=document.createElement("img");
    foodImg.src="https://www.datocms-assets.com/146637/1737042493-948468d4eb39f3277e71377df6b8384c.png?auto=compress%2Cformat"


    content.append(heading, restaurantImg, description, foodImg);



}