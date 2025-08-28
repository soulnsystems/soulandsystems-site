// Modal functionality
const cards = document.querySelectorAll('.journal-card');
const modals = document.querySelectorAll('.journal-modal');
const closes = document.querySelectorAll('.close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

closes.forEach(close => {
  close.addEventListener('click', () => {
    close.closest('.journal-modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
