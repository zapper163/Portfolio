document.addEventListener('DOMContentLoaded', () => {
    const modal = document.createElement('div');
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
  
    // Al hacer clic en cualquier a[href^="#modal-"]
    document.querySelectorAll('a[href^="#modal-"]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const article = link.closest('.work-item');
        const title = article.querySelector('h3')?.textContent || '';
        const text = article.querySelector('p')?.textContent || '';
  
        modalTitle.textContent = title;
        modalText.textContent = text;
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  });