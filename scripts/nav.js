document.querySelectorAll('.nav-toggle').forEach(function (btn) {
  var menu = document.getElementById(btn.getAttribute('aria-controls'));
  if (!menu) return;

  btn.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('nav-open');
    btn.classList.toggle('is-open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('nav-open');
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
});
