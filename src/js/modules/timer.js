export default function timer() {

    let finalDate = new Date(2022, 8, 12, 20);

    let now = new Date();

    if (finalDate - now <= 0) {
        let timer = document.querySelector(".timer1");
        timer.querySelector("#days").innerHTML = "00";
        timer.querySelector("#hours").innerHTML = "00";
        timer.querySelector("#minutes").innerHTML = "00";
        timer.querySelector("#seconds").innerHTML = "00";
    } else {
        setClock(".timer1");
    }

    setClock(".timer1");
    function getTimeRemaining(finalDate) {
        const now = Date.parse(new Date());
        let t = finalDate - now;
        let days = Math.floor(t / 60000 / 60 / 24);
        let hours = Math.floor(t / 60000 / 60 % 24);
        let min = Math.floor(t / 60000 % 60);
        let sec = Math.floor(t / 1000 % 60);
        return {
            total: t,
            days: days,
            hours: hours,
            min: min,
            sec: sec
        };
    }


    function setClock(selector) {
        let timer = document.querySelector(selector);
        let days = timer.querySelector("#days");
        let hours = timer.querySelector("#hours");
        let minutes = timer.querySelector("#minutes");
        let seconds = timer.querySelector("#seconds");
        updateClock();
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            days.textContent = addZero(getTimeRemaining(finalDate).days);
            hours.textContent = addZero(getTimeRemaining(finalDate).hours);
            minutes.textContent = addZero(getTimeRemaining(finalDate).min);
            seconds.textContent = addZero(getTimeRemaining(finalDate).sec);
        }
    }

    function addZero(n) {
        let number;
        if (n < 9) {
            number = `0${n}`;
        } else {
            number = n;
        }
        return number;
    }




}