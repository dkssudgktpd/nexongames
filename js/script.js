$(document).ready(function(){
window.onload = function(){
new Swiper ('.sw-visual' , {
loop:true,
pagination:{
    el:('.sw-pagination'),
    clickable: true,
}

});
};
});