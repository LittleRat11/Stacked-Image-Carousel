const childEle = document.querySelectorAll(".image-container");

const imgUrls = [
    "./images/img-1.jpeg",
    "./images/img-2.jpeg",
    "./images/img-3.jpeg",
    "./images/img-4.jpeg",
    "./images/img-5.jpeg"
]

let zIndex = 1;

childEle.forEach((element, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", imgUrls[index]);
    img.setAttribute("class", "image");
    element.appendChild(img);

    element.addEventListener("click", () => {
        zIndex++;
        element.style.right = "50em";
        element.style.zIndex = zIndex.toString();
        element.style.transform = "rotate(0deg)";

        element.style.transition = "right .3s ease";

        setTimeout(() => {
            zIndex -= 3;
            element.style.right = "";
            element.style.zIndex = zIndex.toString();
            element.style.transform = "";
            element.style.transition = "all .3s ease";
            setTimeout(() => {
                element.style.transition = "";
            }, 300);
        }, 1000)
    })
})