const URL = `https://1x7me4qh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'about'%5D%0A%20%20%0A%0A%20`

fetch(URL)
  .then((res) => res.json())
  .then(({ result })=> {
    const aboutSection = document.querySelector("#about")
    console.log(result)
    aboutSection.textContent = result[0].about
  })




  const burger = document.querySelector(".burger")
const navHomeLink = document.querySelector(".homeLink")
const dropDown = document.querySelector(".dropDown")
const heroSection = document.querySelector(".hero-section")
const secondContactButton = document.querySelector(".contactNew")
const dropDownUl = document.querySelectorAll(".dropDown ul li a")


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




 





