const textBanner = document.querySelector(".textbanner");
const imgBlur = document.querySelector("#img-blur");

textBanner.addEventListener('mouseover', (event) => {
    imgBlur.classList.add("blur")

})

textBanner.addEventListener('mouseout', (event) => {
    imgBlur.classList.remove("blur")

})