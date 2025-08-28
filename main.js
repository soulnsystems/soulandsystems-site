const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const bookBtn = document.getElementById('bookCallBtn');
const callModal = document.getElementById('callModal');
const closeBtn = document.querySelector('.modal .close');

bookBtn.addEventListener('click', () => {
  callModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  callModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target == callModal){
    callModal.style.display = 'none';
  }
});
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
    overlay.style.display = 'none';
  });
});
// Close when clicking outside (overlay)
overlay.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  overlay.style.display = 'none';
});
