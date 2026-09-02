// Contact form: lightweight client-side confirmation.
// Replace this with a real submission handler (e.g. a form service or backend endpoint).
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.contact-grid form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var button = form.querySelector('button[type="submit"]');
    var original = button.textContent;
    button.textContent = 'Message sent';
    form.reset();
    setTimeout(function () {
      button.textContent = original;
    }, 2500);
  });
});
