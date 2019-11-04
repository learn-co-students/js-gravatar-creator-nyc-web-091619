function handleSubmit(e) {
  e.preventDefault()
  if(/\S/.test(e.target[0].value)){
    let input = e.target[0].value
    let identicon = new Identicon(input)
    updateDOM(identicon)
  }else {
    clear()
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
