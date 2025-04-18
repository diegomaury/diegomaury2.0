// Scroll suave al hacer clic en el botón de "Conectemos"
document.getElementById('scrollBtn').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#contacto').scrollIntoView({
    behavior: 'smooth'
  });
});
