fetch('partials/footer.html').then(r => r.text()).then(html => {
  document.getElementById('footer-include').innerHTML = html;

  var form = document.getElementById('ml-footer-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    fetch(form.action, {
      method: 'POST',
      mode: 'no-cors',
      body: new FormData(form)
    }).then(function() {
      form.style.display = 'none';
      document.getElementById('ml-footer-success').style.display = 'block';
    });
  });
});