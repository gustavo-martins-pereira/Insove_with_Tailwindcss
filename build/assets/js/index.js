import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

function initialize() {
    // LUCIDE
    lucide.createIcons();


    // SWIPER
    const swiper = new Swiper('.swiper--testimonials', {
        loop: true,
        spaceBetween: 250,

        pagination: {
            el: '.swiper-pagination',
        },
    });
}

document.addEventListener("DOMContentLoaded", initialize);