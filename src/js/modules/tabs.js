export default function tabs() {

    const blocks = document.querySelectorAll(".glazing_block");
    const rowBlocks = document.querySelectorAll(".glazing .row");
    blocks[0].lastElementChild.classList.add("active");


    blocks.forEach((item,i) => {
        item.addEventListener("click", element => {
            blocks.forEach(block => {
                block.lastElementChild.classList.remove("active");
            });
            element.target.parentNode.lastElementChild.classList.add("active");

            rowBlocks.forEach(block => {
                block.style.display = "block";
                block.classList.add("fadeOut");
                block.classList.remove("fadeIn");
                block.style.visibility = 0;  
                block.style.opacity = "0";           
            });
            rowBlocks[i].style.visibility = 1;
            rowBlocks[i].classList.add("fadeIn");            
            rowBlocks[i].classList.remove("fadeOut");

            // rowBlocks[i].style.display = "block";
        });



    });




}