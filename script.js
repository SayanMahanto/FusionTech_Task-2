const toggle_btn = document.querySelector('.toggle_btn')
const toggle_btn_Icon = document.querySelector('.toggle_btn i')
const dropdown_menu = document.querySelector('.dropdown_menu')

toggle_btn.onclick =function(){
dropdown_menu.classList.toggle('open')
const isOpen = dropdown_menu.classList.contains('open')
toggle_btn_Icon.classList =isOpen
        ?'fa-solid fa-xmark'
        :'fa-solid fa-bars'
}

var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0:{
        slidesPerView: 1,
      },
      876:{
        slidesPerView: 2,
      },
      1330:{
        slidesPerView: 3,
      }
    },
});

