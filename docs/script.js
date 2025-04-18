// Scroll suave al hacer clic en el botón de "Conectemos"
document.getElementById('scrollBtn').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#contacto').scrollIntoView({
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content');
  const closeBtn = document.querySelector('.close');

  document.querySelectorAll('.card-proyecto').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3').innerText;
      const text = card.querySelector('p').innerText;
      modalContent.innerHTML = `
        <span class="close">&times;</span>
        <h3>${title}</h3>
        <p>${text}</p>
      `;
      modal.style.display = 'flex';

      document.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
      });
    });
  });

  // Filter by year
  const filters = document.querySelectorAll('.filtro-anio');
  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const anio = filter.getAttribute('data-anio');
      document.querySelectorAll('.card-proyecto').forEach(card => {
        if (anio === 'todos' || card.dataset.anio === anio) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
