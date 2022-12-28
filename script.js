const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    buttons.parentNode.classList.toggle('active');
  });
});
