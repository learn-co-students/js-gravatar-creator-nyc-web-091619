function handleSubmit(e) {
  e.preventDefault()


  let str = e.target[0].value

  if(str === "")
  {
    clearScreen()
  }
  else{
    let avatar = new Identicon(str)

    updateDOM(avatar)

  }
  

}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")

  form.addEventListener("submit", handleSubmit)

})


