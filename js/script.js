$(document).ready(function () {
    window.onload = function () {
        let swiper = new Swiper(".sw-visual", {
            loop:true,
            autoplay:{
            delay:20000
            },
            pagination:{
                el: ".sw-visual-pg",
                type: "fraction"
            },
            navigation:{
                nextEl:'.sw-visual-next'
            }
        });
    };
});