const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '76px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '22px';
  nav.style.background = '#071027';
  nav.style.flexDirection = 'column';
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) nav.style.display = 'none';
  });
});
