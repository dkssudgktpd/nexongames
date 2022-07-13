$(document).ready(function () {
    window.onload = function () {
        
        let header = $('.header');
        let mainMenu = $('.mainmenu');
        let mainMenuMaxHeight = mainMenu.outerHeight();
        let mainMenuMinHeight = header.outerHeight();
        let videoplay = $('.video');

        mainMenu.mouseenter(function () {
            header.css('height', mainMenuMaxHeight);
        });

        mainMenu.mouseleave(function () {
            header.css('height', mainMenuMinHeight);
        });

        let swiper = new Swiper(".sw-visual", {
            loop: true,
            autoplay: {
                delay: 20000
            },
            pagination: {
                el: ".sw-visual-pg",
                type: "fraction"
            },
            navigation: {
                nextEl: '.sw-visual-next'
            },on:{
                slideChange : function(){
                    let videoplay = $('.swiper-slide').find('video');
                    videoplay.removeAttr('autoplay','autoplay');
                    videoplay.attr('autoplay','autoplay');
                    // $.each(videoplay,function(){
                    // });
                }
            }

        });

        let swiper2 = new Swiper('.sw-interview', {
            loop: true,
            navigation: {
                prevEl: '.sw-iv-prev1',
                nextEl: '.sw-iv-next1'
            }
        });
    };
});


