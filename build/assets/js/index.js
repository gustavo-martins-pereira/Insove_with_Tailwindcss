import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

function initialize() {
    // LUCIDE
    lucide.createIcons();


    // SWIPER
    // TESTIMONIALS
    new Swiper('.swiper--testimonials', {
        loop: true,
        spaceBetween: 250,

        pagination: {
            el: '.swiper-pagination--testimonials',
        },
    });

    // OUR TEAM
    new Swiper('.swiper--our-team', {
        loop: true,
        spaceBetween: 250,

        pagination: {
            el: '.swiper-pagination--our-team',
        },

        breakpoints: {
            1280: {
                slidesPerView: 2,
                spaceBetween: 200
            },
        },
    });
}

document.addEventListener("DOMContentLoaded", initialize);