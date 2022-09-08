"use strict";
import "./slider";
// import "./wow.min";
import tabs from "./modules/tabs";
import modal from "./modules/modal";
import form from "./modules/form";
import setFormSettings from "./modules/setFormSettings";



window.addEventListener("DOMContentLoaded", () => {

    let formSettings = {
        formOfWindow: 0,
        typeOfWindow: 'tree'
    };

    new WOW().init();
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active", "a");
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
    modal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
    modal(".phone_link", ".popup", ".popup .popup_close");
    modal(".popup_calc_btn", ".popup_calc", ".popup_calc .popup_calc_close");
    tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "", "inline-block");
    modal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
    modal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
    form(formSettings);
    setFormSettings(formSettings);

});