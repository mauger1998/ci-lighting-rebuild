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
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

/**********************/
contactButton.addEventListener("click", (e) => {
    console.log("clicked")
    contactSection.scrollIntoView()
})
/***********/

let today = new Date()
    let open = "Open Now"
    let closed = "Closed Now"
    let display = document.querySelector('.open-closed');


if (today.getHours() >= 9 && today.getHours() < 17 && today.getDay() !== 0) {
    display.textContent = open
} else  {
    display.textContent = closed
}

/****************************/
const heroContactButton = document.querySelector(".heroContact")
const heroSeeMoreButton = document.querySelector(".heroSeeMore")
const whyUsSection = document.querySelector(".second-section")
const cardButtons = document.querySelectorAll(".seemore")
const productSection = document.querySelector(".products")
const heroSection = document.querySelector(".hero-section")

heroContactButton.addEventListener("click", (e) => {
  contactSection.scrollIntoView()
})
heroSeeMoreButton.addEventListener("click", (e) => {
  whyUsSection.scrollIntoView()
})

cardButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    productSection.scrollIntoView()
  })
})
/*********************************/








const navHomeLink = document.querySelector(".navHome a")

const options = { }

const homeObserver = new IntersectionObserver(function(entries, homeObserver) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        navHomeLink.classList.add("makeBold")
        navHomeLink.classList.remove("makeBold")
        dropDown.classList.remove("dropDownScroll")
        dropDownUl.forEach(item => {
          item.classList.remove("dropDownUlAdd")
        })
        secondContactButton.classList.remove("dropDownButtonAdd")
        
        
      } else {
        navHomeLink.classList.remove("makeBold")
        dropDown.classList.add("dropDownScroll")
        dropDownUl.forEach(item => {
          item.classList.add("dropDownUlAdd")
        })
        secondContactButton.classList.add("dropDownButtonAdd")
        
      }
      
  })
}, options)

homeObserver.observe(heroSection)


const burger = document.querySelector(".burger")
const dropDown = document.querySelector(".dropDown")
const secondContactButton = document.querySelector(".dropDownContact")
const dropDownUl = document.querySelectorAll(".dropDown ul li a")
console.log(dropDown)

burger.addEventListener("click", (e) => {
  dropDown.classList.toggle("dropDownAdd")
  console.log("h")
})

secondContactButton.addEventListener("click", (e) => {
  contactSection.scrollIntoView()
})

