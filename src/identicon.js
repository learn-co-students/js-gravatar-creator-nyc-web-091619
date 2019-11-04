class Identicon {
  constructor(input) { //init
    let arr = md5.array(input)
    this.rgb = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
    this.numbers = arr.slice(", ")
  }
}
