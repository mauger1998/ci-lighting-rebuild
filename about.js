const URL = `https://1x7me4qh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'about'%5D%0A%20%20%0A%0A%20`

fetch(URL)
  .then((res) => res.json())
  .then(({ result })=> {
    const aboutSection = document.querySelector("#about")
    console.log(result)
    aboutSection.textContent = result[0].about
  })