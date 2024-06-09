// Hero Section Initialize Swiper
  
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

});

// New Arrival section swiper End

var swiper = new Swiper(".mySwiperArrival", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Time function start

let currenttime = document.getElementById("currenttime")

function time(){
  let date = new Date();
  let datetime = date.toLocaleTimeString();
  // alert(datetime);
  currenttime.innerHTML ="35 Days " + datetime
}

setInterval(time,1000)
  