var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var menu = document.querySelector(".ri-menu-3-line");
var clo = document.querySelector(".ri-close-fill");
var nav = document.querySelector(".respo-nav");
menu.addEventListener("click", function () {
    nav.style.top = "0%";
})
clo.addEventListener("click", function () {
    nav.style.top = "-100%";
})

var store = document.querySelector("#store");
var submenu = document.querySelector(".submenu");
store.addEventListener("mousemove",function(){
    submenu.style.top="5%";
})
store.addEventListener("mouseleave",function(){
    submenu.style.top="-100%";
})