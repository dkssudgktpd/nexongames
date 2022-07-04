$(document).ready(function () {
    window.onload = function () {
        let swiper = new Swiper(".sw-visual", {
            loop:true,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            // pagination:{
                //     el: ".sw-pagination",
                // type: "fraction",
            // }

        });
    };
});