"use strict";
import "./slider";
// import "./wow.min";
import tabs from "./modules/tabs";
import modal from "./modules/modal";



window.addEventListener("DOMContentLoaded", () => {
    new WOW().init();
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active", "a");
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
    modal(".popup_engineer_btn", ".popup_engineer");
    modal(".phone_link", ".popup");

    
});