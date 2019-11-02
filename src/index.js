function handleSubmit(e) {
  e.preventDefault();
  const inputValue = e.target[0].value;

  let userIdenticon = new Identicon(inputValue);
  if (inputValue !== '') updateDOM(userIdenticon);
  if (inputValue === '') blank();

  e.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('identicon-form');
  form.addEventListener('submit', handleSubmit);
});
