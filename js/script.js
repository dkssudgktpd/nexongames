$(document).ready(function () {
    window.onload = function () {
        //모달창닫기
        let modalWrap = $('.modal-wrap');
        let modalMain = $('.modal-main');
        let modalClose = $('.modal-close');
        modalClose.click(function(){
            modalWrap.fadeOut(500)
            $('body').css('overflow','auto');
            $('body').css('overflow-x','hidden');
        });
        modalWrap.click(function(){
            modalWrap.fadeOut(500);
            $('body').css('overflow','auto');
            $('body').css('overflow-x','hidden');
        })
        //모바일메뉴
        let mbBt = $('.mb-bt');
        let mbWrap = $('.mb-wrap');
        let mbClose = $('.mb-close');
        mbBt.click(function(){
            mbWrap.css('right','0');
        });
        mbClose.click(function(){
            mbWrap.css('right','-75%')
        });
        let mbDepth1_li_a = $('.mb-depth1 > li > a');
        let mbDepth2 = $('.mb-depth2');
$.each(mbDepth1_li_a,function(index){
    $(this).click(function(){
        mbDepth2.stop().slideUp();
        mbDepth2.eq(index).stop().slideToggle();
        if(mbDepth1_li_a.hasClass('mb-color')){
            $(this).removeClass('mb-color');
        }else{
            $(this).addClass('mb-color');
        }
        
        
    })
});

        let topBt = $('.top-bt');
        let header = $('.header');
        let mainMenu = $('.mainmenu');
        let mainMenuMaxHeight = mainMenu.outerHeight();
        let mainMenuMinHeight = header.outerHeight();

topBt.click(function(){
    $('html, body').stop().animate({scrollTop : 0})
})
        mainMenu.mouseenter(function () {
            header.css('height', mainMenuMaxHeight);
        });

        mainMenu.mouseleave(function () {
            header.css('height', mainMenuMinHeight);
        });

        let swVisual = new Swiper('.sw-visual', {
            loop: true,
            pagination: {
                el: '.sw-visual-pg',
                type: 'fraction'
            },
            navigation: {
                nextEl: '.sw-next'
            }
        });

        swVisual.on('slideChange', function () {

            videoArr[videoIndex].pause();

            videoIndex = swVisual.activeIndex;
            videoArr[videoIndex].currentTime = 0;
            videoArr[videoIndex].play();
            clearInterval(videoTimer);
            videoReset();
        });


        let video = $('video');
        let videoTotal = video.length;
        let videoArr = []
        for (let i = 0; i < videoTotal; i++) {
            videoArr[i] = video.get(i);
        }

        // 타이머를 만든다.
        // 비디오 데이터의 시간
        // let v = videoIndex.duration;
        // console.log(v);
        let videoTimeArr = [232, 170, 184, 232, 170];
        // 현재 실행되고 있는 비디오의 순서
        let videoIndex = 1;
        // videoArr[videoIndex].currentTime = 0;  
        videoArr[videoIndex].play();

        // 타이머의 간격
        let videoInterval = videoTimeArr[videoIndex];
        // 움직일 스크롤바 클래스
        let bar = $('.bar');
        // 스크롤바의 비율(0 ~ 100)
        let barScaleX = 0;
        // 타이머를 저장한다.
        let videoTimer;
        // viedo 리셋함수
        function videoReset() {
            // 1. bar 의 크기를 0 으로 한다.
            bar.css('width', 0);
            // 2. barScaleX 의 값을 0 으로 한다.
            barScaleX = 0;
            // 3. 타이머를 지운다.
            clearInterval(videoTimer);
            // 4. 타이머의 간격도 셋팅
            videoInterval = videoTimeArr[videoIndex]
            // 5. 타이머 생성한다.
            videoTimer = setInterval(function () {
                // barScaleX 을 1 씩 증가한다.
                barScaleX++;
                bar.css('width', barScaleX + '%');
                if (barScaleX > 100) {
                    // 다음 영상 실행하고
                    barScaleX = 0;
                    swVisual.slideNext();
                }

            }, videoInterval);

        }

        videoReset();

        let swiper2 = new Swiper('.sw-interview', {
            loop: true,
            navigation: {
                prevEl: '.sw-iv-prev1',
                nextEl: '.sw-iv-next1'
            }
        });
    };
});