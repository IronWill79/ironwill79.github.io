document.querySelector('.hamburger')!.addEventListener('click', () => {
  document.querySelectorAll('.nav-links').forEach((e) => e.classList.toggle('expanded'));
});