export default function modal(triggerSelector, modalSelector, closeButton, closeClickOverlay = true) {

    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const closeBtn = document.querySelectorAll(closeButton);
    const allModals = document.querySelectorAll("[data-modal]");



    function openModal() {
        modal.style.display = "block";

        // clearTimeout(modalTimer);  //не сработает, в каждой функции openModal создается свой таймер и свой modalTimer. Он не расшаривается между функциями по понятным причинам. И клик, обработанный в одной функции не может завершить "соседний" интервал. А во втором варианте один id на все операции и вы можете управлять им из любой функции.
    }
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "";
        allModals.forEach(item => {
            item.style.display = "none";
        });
    }

    trigger.forEach(trig => {
        trig.addEventListener("click", e => {
            e.preventDefault();
            // console.log(trig.getAttribute("class") == "button popup_calc_button");

            if (trig.getAttribute("class") == "button popup_calc_button") {
                if (document.querySelector("#width").value &&
                    document.querySelector("#height").value) {
                    allModals.forEach(item => {
                        item.style.display = "none";
                    });
                    openModal();
                    document.body.style.overflow = "hidden";
                }
            } else if (trig.getAttribute("class") == "button popup_calc_profile_button") {
                console.log(!document.querySelectorAll(".checkbox")[0].checked &&
                    !document.querySelectorAll(".checkbox")[1].checked);
                if (!document.querySelectorAll(".checkbox")[0].checked &&
                    !document.querySelectorAll(".checkbox")[1].checked) {
                } else {
                    allModals.forEach(item => {
                        item.style.display = "none";
                    });
                    openModal();
                    document.body.style.overflow = "hidden";
                }
            } else {
                allModals.forEach(item => {
                    item.style.display = "none";
                });
                openModal();
                document.body.style.overflow = "hidden";
            }



            // switch (trig) {
            //     case trig.getAttribute("class") == "button popup_calc_button":
            //         console.log(document.querySelector("#weight").value);
            //         if (!document.querySelector("#weight").value &&
            //             !document.querySelector("#height").value) {
            //         }
            //         break;
            //     case trig.getAttribute("class") == "button popup_calc_profile_button":
            //         if (!document.querySelectorAll(".checkbox")[0] &&
            //             !document.querySelectorAll(".checkbox")[1]) {
            //         }
            //         break;
            //     default:
            //         allModals.forEach(item => {
            //             item.style.display = "none";
            //         });
            //         openModal();
            //         document.body.style.overflow = "hidden";
            // }


        });

    });

    closeBtn.forEach(btn => {
        btn.addEventListener("click", closeModal);
    });

    modal.addEventListener("click", element => {
        if (element.target == modal && closeClickOverlay == true) {
            closeModal();
        }
    });

    // function openModalByTimer(modalByTime, time) {
    //     setTimeout(() => {
    //         document.querySelector(modalByTime).style.display = "block";
    //         document.body.style.overflow = "hidden";
    //     }, time);
    // }
    // openModalByTimer(".popup", 3000);

    // const modalTimer = setTimeout(() => {
    //     document.querySelector('.popup').style.display = 'block';
    //     document.body.style.overflow = 'hidden';
    // }, 3000);

}