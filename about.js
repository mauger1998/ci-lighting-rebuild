const URL = `https://1x7me4qh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'about'%5D%0A%20%20%0A%0A%20`

fetch(URL)
  .then((res) => res.json())
  .then(({ result })=> {
    const aboutSection = document.querySelector("#about")
    console.log(result)
    aboutSection.textContent = result[0].about
  })




  const burger = document.querySelector(".burger")
const navHomeLink = document.querySelector(".navHomeLink")
const dropDown = document.querySelector(".dropDown")
const heroSection = document.querySelector(".hero-section")
const secondContactButton = document.querySelector(".contactNew")
const dropDownUl = document.querySelectorAll(".dropDown ul li a")
const dropDownLink = document.querySelector(".contactNew a")


burger.addEventListener("click", (e) => {
    dropDown.classList.toggle("dropDownAdd")
})

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
        dropDownLink.classList.remove("addNow")
        
        
      } else {
        navHomeLink.classList.remove("makeBold")
        dropDown.classList.add("dropDownScroll")
        dropDownUl.forEach(item => {
          item.classList.add("dropDownUlAdd")
        })
        secondContactButton.classList.add("dropDownButtonAdd")
        dropDownLink.classList.add("addNow")

        
      }
      
  })
}, options)

homeObserver.observe(heroSection)



const seeMoreButton = document.querySelector(".seemore")
const about = document.querySelector(".second-section")

seeMoreButton.addEventListener("click", (e) => {
  about.scrollIntoView()
})



let today = new Date()
    let open = "Open Now"
    let closed = "Closed Now"
    let display = document.querySelector('.display');

    console.log(closed)

if (today.getHours() >= 9 && today.getHours() < 17) {
    display.textContent = open
} else  {
    display.textContent = closed
}



 





