export default function tabs(parentSelector, tabSelector, blockSelector, activeClass, a, display = "block") {

    const parent = document.querySelector(parentSelector);
    const tabs = document.querySelectorAll(`${tabSelector}` + ` ${a ? a : ""}`);
    const blocks = document.querySelectorAll(blockSelector);

    hideTabContent();
    showTabContent();

    function hideTabContent() {
        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
        blocks.forEach(block => {
            block.style.display = "none";
        });
    }

    function showTabContent(i = 0) {
        tabs[i].classList.add(activeClass);
        blocks[i].style.display = display;
    }

    parent.addEventListener("click", element => {
        tabs.forEach((tab, i) => {
            if (element.target && (element.target == tab || element.target.parentNode == tab)) {
                hideTabContent();
                showTabContent(i);
            }
        });

    });



    // const blocks = document.querySelectorAll(".glazing_block");
    // const rowBlocks = document.querySelectorAll(".glazing .row");
    // blocks[0].lastElementChild.classList.add("active");


    // blocks.forEach((item,i) => {
    //     item.addEventListener("click", element => {
    //         blocks.forEach(block => {
    //             block.lastElementChild.classList.remove("active");
    //         });
    //         element.target.parentNode.lastElementChild.classList.add("active");

    //         rowBlocks.forEach(block => {
    //             block.style.display = "none";
    //             block.style.opacity = "0";
    //         });
    //         rowBlocks[i].style.display = "block";
    //         rowBlocks[i].style.opacity = "1";

    //     });



    // });




}