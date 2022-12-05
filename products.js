let PROJECT_ID = "1x7me4qh"
let DATASET = "production"

let QUERY = encodeURIComponent('*[_type == "product"]')

let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

let imgQuery = encodeURIComponent(`*[_type == 'person']{
    name,
    "imageUrl": image.asset->url
  }`)

  let imgUrl = `https://1x7me4qh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'product'%5D%7B%0A%20%20name%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%0A%7D`

  fetch(PROJECT_URL)
  .then((res) => res.json())
  .then(({ result })=> {
      let grid = document.querySelector(".product-data-grid")
      let firstGridItem = document.querySelector(".grid-item")

      if (result.length > 0) {
          grid.removeChild(firstGridItem)

          

          result.forEach((product) => {
              let gridContainer = document.createElement("div")
              let gridItem = document.createElement("div")
              let gridTitle = document.createElement("h3")
              let gridBrand = document.createElement("h3")
              let gridDescription = document.createElement("p")
              let gridCode = document.createElement("p")
              let gridButton = document.createElement("button")
              let container = document.createElement("div")
              let containerButton = document.createElement("div")
              containerButton.classList.add("containerButton")
              gridItem.appendChild(containerButton)
              gridItem.appendChild(container)
              
              container.classList.add("containerOne")
              gridContainer.classList.add("gridContainer")
              gridTitle.classList.add("gridTitle")
              


              
              gridTitle.textContent = product.name
              gridBrand.textContent = product.brand
              gridDescription.textContent = product.description 
              gridCode.textContent = product.productCode
              gridButton.textContent = "See More"

              
              container.appendChild(gridBrand)
              container.appendChild(gridTitle)
              container.appendChild(gridCode)
              grid.appendChild(gridContainer)
              gridContainer.appendChild(gridItem)
              containerButton.appendChild(gridButton)
          

              gridItem.classList.add("gridItem")

              
              
          })
          
          
      }
  }).then(fetch(imgUrl)
  .then((res) => res.json())
  .then(({ result })=> {
      let grid = document.querySelector(".product-data-grid")
      
      let firstGridItem = document.querySelector(".grid-item")

      if (result.length > 0) {
          

          result.forEach((image, index) => {
              let gridItems = Array.from(document.querySelectorAll(".gridItem"))
              let gridImgItem = document.createElement("div")
              let newImg = document.createElement("img")
              newImg.src = image.imageUrl
              newImg.classList.add("makeSmall")
              gridItems[index].appendChild(newImg)
              
              
          })
          
          
      }
  }))
  .catch((err) => console.error(err))


  let featuredUrl = `https://1x7me4qh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'featuredProducts'%5D%0A%20`
  let featuredImgUrl = `https://1x7me4qh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'featuredProducts'%5D%7B%0A%20%20name%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%0A%7D%0A%20`
  
  fetch(featuredUrl)
    .then((res) => res.json())
    .then(({ result })=> {
        let featuredTitle = document.querySelectorAll(".featuredTitle")
        let featuredBrand = document.querySelectorAll(".featuredBrand")
        let featuredTitlesArray = Array.from(featuredTitle)
        let featuredBrandArray = Array.from(featuredBrand)
        result.forEach((product, index) => {
            console.log(result)
            featuredTitle[index].textContent = product.name
            featuredBrand[index].textContent = product.brand
        })


    })
    .then(fetch(featuredImgUrl)
        .then((res) => res.json())
        .then(({ result })=> {
            let featuredImg = document.querySelectorAll(".featuredImg")

            result.forEach((image, index) => {
                featuredImg[index].src = image.imageUrl
            })
        }))

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





const burger = document.querySelector(".burger")
const navHomeLink = document.querySelector(".homeLink")
const dropDown = document.querySelector(".dropDown")
const heroSection = document.querySelector(".hero-section-products")
const secondContactButton = document.querySelector(".contactNew")
const secondContactLink = document.querySelector(".contactNew a")
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
        secondContactLink.classList.remove("justadd")
        
        
      } else {
        navHomeLink.classList.remove("makeBold")
        dropDown.classList.add("dropDownScroll")
        dropDownUl.forEach(item => {
          item.classList.add("dropDownUlAdd")
        })
        secondContactButton.classList.add("dropDownButtonAdd")
        secondContactLink.classList.add("justadd")

        
      }
      
  })
}, options)

homeObserver.observe(heroSection)



const seeMoreButton = document.querySelector(".seeMore")
const featuredSection = document.querySelector(".product-cards")


seeMoreButton.addEventListener("click", (e) => {
    featuredSection.scrollIntoView()
})
 







  

  