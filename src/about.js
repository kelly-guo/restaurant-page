export function loadAbout() {

    const content = document.querySelector("#content");
    const wrapper = document.createElement("div")
    wrapper.classList.add("tab","about-tab");

    const heading = document.createElement("h1");
    heading.textContent="About FukuMomo"

    const description = document.createElement("p");
    description.textContent="FukuMomo is inspired by the flavours of Japan and the head chef's experience with combining asian flavours: Korean, Japanese, and Chinese"

    const tokyoImg=document.createElement("img");
    tokyoImg.src="https://media.digitalnomads.world/wp-content/uploads/2021/02/20120635/tokyo-for-digital-nomads.jpg"

    wrapper.append(heading,description,tokyoImg)
    content.append(wrapper)



}