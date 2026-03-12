const root = document.documentElement
const marqueeContent = document.querySelector("ul.marquee-content")

if (marqueeContent) {
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elements-displayed"
  )
  root.style.setProperty("--marquee-elements", marqueeContent.children.length)

  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
  }
}

// scrow automotico

//Animação
if (window.SimpleAnime) {
  new SimpleAnime()
}
