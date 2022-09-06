export default function modal(triggerSelector, modalSelector) {

    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const closeBtn = document.querySelectorAll(".popup_close");


    function openModal() {
        modal.style.display = "block";

    }
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }

    trigger.forEach(trig => {
        trig.addEventListener("click", e => {
            e.preventDefault();
            openModal();
            document.body.style.overflow = "hidden";
        });

    });

    closeBtn.forEach(btn => {
        btn.addEventListener("click", closeModal);
    });

    modal.addEventListener("click", element => {
        if (element.target == modal) {
            closeModal();
        }
    });

    function openModalByTimer(modalByTime, time) {
        setTimeout(() => {
            document.querySelector(modalByTime).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }
    openModalByTimer(".popup", 3000);

    // const modalTimer = setTimeout(() => {
    //     document.querySelector('.popup').style.display = 'block';
    //     document.body.style.overflow = 'hidden';
    // }, 3 * 1000);
    // clearTimeout(modalTimer);  не сработает, в каждой функции openModal создается свой таймер и свой modalTimer. Он не расшаривается между функциями по понятным причинам. И клик, обработанный в одной функции не может завершить "соседний" интервал. А во втором варианте один id на все операции и вы можете управлять им из любой функции.
}