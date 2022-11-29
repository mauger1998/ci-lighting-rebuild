const contactButton = document.querySelector(".contact-button")
const contactSection = document.querySelector(".contact")



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    grabCursor: true,
    effect: "creative",
    speed:1000,
    creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

/**********************/
contactButton.addEventListener("click", (e) => {
    console.log("clicked")
    contactSection.scrollIntoView()
})