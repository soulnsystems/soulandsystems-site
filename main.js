const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

// Toggle menu
menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
  overlay.style.display = sideMenu.classList.contains('active') ? 'block' : 'none';
});

// Close when clicking a link
const sideMenuLinks = document.querySelectorAll('#sideMenu a');
sideMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('active');
  });
});
document.querySelectorAll('#sideMenu a').forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('active');
  });
});
// Close when clicking outside (overlay)
overlay.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});
