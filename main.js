document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');

  menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
  });
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
window.addEventListener("load", function() {
  setTimeout(() => window.scrollTo(0, 0), 0);
});

// Close side menu when a link is clicked
const sideMenuLinks = document.querySelectorAll('#sideMenu a');

sideMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('active');
  });
});
