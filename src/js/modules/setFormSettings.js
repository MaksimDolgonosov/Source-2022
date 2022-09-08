import checkNumbers from "./checkNumbers";
export default function setFormSettings(formSettings) {
    let forms = document.querySelectorAll(".balcon_icons_img");
    let width = document.querySelectorAll("#width");
    let height = document.querySelectorAll("#height");
    let type = document.querySelectorAll("#view_type");
    let checkbox = document.querySelectorAll(".checkbox");



    width.forEach(number => checkNumbers(number));
    height.forEach(number => checkNumbers(number));


    function setSettings(selector, event, setting) {
        selector.forEach((form, i) => {
            form.addEventListener(event, () => {
                switch (event) {
                    case "click":
                        formSettings[setting] = i;
                        break;
                    case "input":
                        if (form.getAttribute("class") == "checkbox") {
                            formSettings[setting] = form.nextElementSibling.getAttribute("id");
                            selector.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    selector[i].checked = true;
                                }
                            });
                        } else {
                            formSettings[setting] = form.value;
                        }
                        break;
                    case "change":

                        formSettings[setting] = form.value;

                        break;
                }
                
            });
        });
    }

    setSettings(forms, "click", "formOfWindow");
    setSettings(width, "input", "width");
    setSettings(height, "input", "height");
    setSettings(type, "change", "typeOfWindow");
    setSettings(checkbox, "input", "profile");










};