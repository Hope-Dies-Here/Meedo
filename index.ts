const $ = (element) => {
  return document.querySelector(element)
}

$("#see-more-link").addEventListener("click", (e) => {
  e.preventDefault()
})
