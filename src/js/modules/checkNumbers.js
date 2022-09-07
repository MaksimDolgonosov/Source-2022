export default function checkNumbers(numberField) {

        numberField.addEventListener("input", () => {
            numberField.value = numberField.value.replace(/\D/ig, "");
        });

}