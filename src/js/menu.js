// Toggle the mobile navigation
document.querySelector('#burger-menu').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('open');
    this.classList.toggle('open');
});


// Toggle the mobile sidebar (if needed)
document.querySelector('#docu-menu').addEventListener('click', function () {
  document.querySelector('aside').classList.toggle('open');
});