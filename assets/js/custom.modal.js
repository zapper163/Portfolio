document.addEventListener('DOMContentLoaded', () => {
  /*const modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <h3 id="modalTitle"></h3>
      <p id="modalText"></p>
    </div>
  `;
  document.body.appendChild(modal);
 
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');
  const closeModal = modal.querySelector('.modal-close');
  */

  // Al hacer clic en cualquier a[href^="#modal-"]
  document.querySelectorAll('a[href^="#modal-"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const modalId = link.getAttribute('href');
      const modal = document.querySelector(modalId);

      if (modal) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
      }
    });
  });

  // Cerrar modal con el botón con id="close"
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const modal = btn.closest('.modal');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });
  });

  // Cerrar modal al hacer clic fuera del contenido
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  });
});
