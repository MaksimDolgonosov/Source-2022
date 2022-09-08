export default function bigImg() {
    let links = document.querySelectorAll(".works a");

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            let div = document.createElement("div");
            div.classList.add("bigImgOverlay");
            div.style.cssText = `
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 10`;
            div.style.backgroundColor = "rgba(0,0,0, 0.8)";
            document.body.style.position = "relative";
            document.body.style.overflow = "hidden";
            document.body.append(div);


        });
    });


}