class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(userInput) {
    const hashedArr = md5.array(userInput);

    this.rgb = hashedArr.slice(0, 3);
    // return an array of t/f
    this.colored = [...hashedArr].map(num => num % 2 === 1);
  }
}
