class Identicon {

  constructor(str) {
    let numbers = md5.array(str)

    this.red = numbers[0];
    this.green = numbers[1];
    this.blue = numbers[2];
    this.nums = numbers.slice(0)
  }
  
}
