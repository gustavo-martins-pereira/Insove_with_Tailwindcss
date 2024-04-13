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


    // CUSTOM
    const $departmentOptions = document.querySelectorAll("[data-department-option]");
    const $departments = document.querySelectorAll("[data-department-slide]");
    $departmentOptions.forEach($departmentOption => $departmentOption.addEventListener("click", () => {
        $departmentOptions.forEach($departmentOption => $departmentOption.classList.remove("department-option-active"));

        $departmentOption.classList.add("department-option-active");

        
        for (const $department of $departments.values()) {
            if($department.getAttribute("data-department-slide") === $departmentOption.dataset.departmentOption) {
                $department.classList.add("flex");
                $department.classList.remove("hidden");
            } else {
                $department.classList.remove("flex");
                $department.classList.add("hidden");
            }
        }
    }));
}

document.addEventListener("DOMContentLoaded", initialize);