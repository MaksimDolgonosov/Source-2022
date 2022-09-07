import checkNumbers from "./checkNumbers";

export default function form() {
    const forms = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");
    const phoneNumber = document.querySelectorAll("[name='user_phone']");


    phoneNumber.forEach(number => {
        checkNumbers(number);
    });

    forms.forEach(form => {
        bindPostData(form);
    });

    const message = {
        loading: "Загрузка...",
        sucsess: "Спасибо, мы скоро с вами свяжемся!",
        error: "Упс, что то пошло не так! Попробуйте позже."
    };




    function bindPostData(form) {
        form.addEventListener("submit", e => {
            e.preventDefault();

            let comment = document.createElement("h2");
            comment.style.cssText = `
            color: red;
            font-size: 13px;`;
            form.append(comment);
            comment.textContent = message.loading;

            let formData = new FormData(form);
            fetch("assets/server.php", {
                method: "POST",
                body: formData
            }).then(data => data.text())
                .then(text => {
                    console.log(text);
                    comment.textContent = message.sucsess;
                })
                .catch(() => {
                    comment.textContent = message.error;
                })
                .finally(() => {
                    inputs.forEach(input => {
                        input.value = "";
                    });
                    // form.reset();
                    setTimeout(() => {
                        comment.remove();
                    }, 3000);

                });
        });
    }
}