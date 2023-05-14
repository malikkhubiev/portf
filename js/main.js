// Scrolling
$(document).ready(function () {
    $(".scroll").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1000);
        return false;
    });
});
// Showing
$(()=>{
    $(window).on('scroll', ()=>{
        // AboutMePart1
        let aboutMePart1 = $('#aboutMePart1').offset();
        let aboutMePart1top = aboutMePart1.top;
        if($(window).scrollTop() > aboutMePart1top-500){
            $('#aboutMePart1').addClass("emergedPart");
        }else{
            $('#aboutMePart1').removeClass("emergedPart");
        }
        // AboutMePart2
        let aboutMePart2 = $('#aboutMePart2').offset();
        let aboutMePart2top = aboutMePart2.top;
        if($(window).scrollTop() > aboutMePart2top-500){
            $('#aboutMePart2').addClass("emergedPart");
        }else{
            $('#aboutMePart2').removeClass("emergedPart");
        }
    })
})
// Slider
let slides = document.getElementsByClassName('section-myProjects-container-sliderBox-mainPart');
let sliderCounter = 0;
$('#sliderArrow').on('click', ()=>{
    sliderCounter++;
    if(sliderCounter>3) sliderCounter = 0;
    for(let i = 0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[sliderCounter].style.display = 'flex';
})