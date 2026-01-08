document.addEventListener("DOMContentLoaded", () => {
  // === MENU TOGGLE ===
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const overlay = document.getElementById('overlay');

  if(menuToggle && sideMenu && overlay){
    menuToggle.addEventListener('click', () => {
      sideMenu.classList.toggle('active');
      overlay.style.display = sideMenu.classList.contains('active') ? 'block' : 'none';
    });

    // Close when clicking a link
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
  }

  // === DISCOVERY CALL MODAL ===
  const bookBtn = document.getElementById('bookCallBtn');
  const callModal = document.getElementById('callModal');
  if(bookBtn && callModal){
    const closeCall = callModal.querySelector('.close');
    bookBtn.addEventListener('click', () => callModal.style.display = 'block');
    closeCall.addEventListener('click', () => callModal.style.display = 'none');
    window.addEventListener('click', e => { if(e.target === callModal) callModal.style.display = 'none'; });
  }

  // === COACHING MODAL ===
  const coachingBtn = document.getElementById('coachingBtn');
  const coachingModal = document.getElementById('coachingModal');
  if(coachingBtn && coachingModal){
    const closeCoaching = coachingModal.querySelector('.close');
    const bookedYes = document.getElementById('bookedYes');
    const bookedNo = document.getElementById('bookedNo');

    coachingBtn.addEventListener('click', () => coachingModal.style.display = 'block');
    closeCoaching.addEventListener('click', () => coachingModal.style.display = 'none');

    // User clicks Yes → just close Coaching modal
    bookedYes.addEventListener('click', () => coachingModal.style.display = 'none');

    // User clicks No → close Coaching modal AND open Discovery Call modal
    bookedNo.addEventListener('click', () => {
      coachingModal.style.display = 'none';
      if(callModal){
        callModal.style.display = 'block';
      }
    });

    window.addEventListener('click', e => { if(e.target === coachingModal) coachingModal.style.display = 'none'; });
  }

  // === WORKSHOP MODAL ===
  const workshopBtn = document.getElementById('workshopBtn');
  const workshopModal = document.getElementById('workshopModal');
  if(workshopBtn && workshopModal){
    const closeWorkshop = workshopModal.querySelector('.close');
    workshopBtn.addEventListener('click', () => workshopModal.style.display = 'block');
    closeWorkshop.addEventListener('click', () => workshopModal.style.display = 'none');
    window.addEventListener('click', e => { if(e.target === workshopModal) workshopModal.style.display = 'none'; });
  }
});
