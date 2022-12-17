// JavaScript for the dropdown menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', event => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
      event.preventDefault();
      submenu.classList.toggle('visible');
    }
  });
});