function changeDuration() {
  const button = document.querySelector('.slide__transition-duration button');
  const input = document.querySelector('.slide__transition-duration input');

  button.style.transition = `${input.value}s ease-in`;
}