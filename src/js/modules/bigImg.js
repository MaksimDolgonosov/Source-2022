export default function bigImg() {
    let links = document.querySelectorAll(".works a");

    links.forEach((link, i) => {
        link.addEventListener("click", e => {
            e.preventDefault();
            let div = document.createElement("div");
            div.classList.add("bigImgOverlay");
            div.style.cssText = `
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;`;
            div.style.backgroundColor = "rgba(0,0,0, 0.8)";
            document.body.style.position = "relative";
            document.body.style.overflow = "hidden";
            let img = document.createElement("img");
            img.setAttribute("src", `assets/img/our_works/big_img/${i + 1}.png`);
            img.style.display = "block";
            div.append(img);
            document.querySelector(".works").append(div);

            div.addEventListener("click", el=>{
                if (el.target && el.target.classList.contains("bigImgOverlay")) {
                    div.remove();
                    document.body.style.overflow = "";
                }
            });
        });
    });

   

}