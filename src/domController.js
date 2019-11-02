function updateDOM(gravatar) {
  blank();
  let colorCounter = 0;
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 3; col++) {
      const square = document.getElementById(`${row}-${col}`);

      if (gravatar.colored[colorCounter]) {
        switch (col) {
          case 0:
            square.style.backgroundColor = `rgb(${gravatar.rgb.toString()})`;
            document.getElementById(
              `${row}-${col + 4}`,
            ).style.backgroundColor = `rgb(${gravatar.rgb.toString()})`;
            break;
          case 1:
            square.style.backgroundColor = `rgb(${gravatar.rgb.toString()})`;
            document.getElementById(
              `${row}-${col + 2}`,
            ).style.backgroundColor = `rgb(${gravatar.rgb.toString()})`;
            break;
          default:
            square.style.backgroundColor = `rgb(${gravatar.rgb.toString()})`;
            break;
        }
        colorCounter += 1;
      } else {
        colorCounter += 1;
      }
    }
  }
}

const blank = () => {
  [...document.querySelectorAll('div span')].forEach(node => {
    node.style.backgroundColor = 'rgb(240, 240, 240)';
  });
};
