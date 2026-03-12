;(() => {
  // Acessibilidade mínima para <details>
  const details = document.querySelectorAll("details")
  details.forEach((el) => {
    const summary = el.querySelector("summary")
    if (!summary) return
    summary.setAttribute("role", "button")
    summary.setAttribute("aria-expanded", String(el.open))
    el.addEventListener("toggle", () => {
      summary.setAttribute("aria-expanded", String(el.open))
    })
  })
})()
