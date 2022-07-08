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
            },
            on:{
                activeIndexChange: function () {
                    const videos = document.querySelectorAll(".swiper-slide video");
                    videos[this.activeIndex].currentTime = 0;
                    videos[this.activeIndex].play();
                    nextVideo(videos[this.activeIndex].duration*1000)
                    
                    // $('.video').eq(this.realIndex).get(0).play();
                }
            }
            // 전체길이 가져오고 구글 검색 " 영상 현재 재생 위치 "를 구해서 이 재생시간이 총길이에 부합하면 if를 사용해서 영상에 있는 버튼을 클릭하게
        });
        let swiper2 = new Swiper('.sw-interview',{
            loop:true,
            navigation:{
                prevEl:'.sw-iv-prev1',
                nextEl:'.sw-iv-next1'
            }
        });
    };
});

function nextVideo(time){
    setTimeout(() => {
        document.querySelector(".sw-visual-next").click();
    },time)
}