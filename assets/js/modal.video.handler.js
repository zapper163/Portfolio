document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones de cierre del modal
  const closeButtons = document.querySelectorAll(".modal-close");

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Encuentra el modal más cercano al botón
      const modal = button.closest(".modal");

      if (modal) {
        // Encuentra todos los iframes dentro de este modal
        const iframes = modal.querySelectorAll("iframe");

        iframes.forEach((iframe) => {
          // Reinicia el src para detener el video
          iframe.src = iframe.src;
        });

        // Opcional: Ocultar el modal si no lo hace tu otro código
        modal.classList.remove("active"); // o como se cierre tu modal
      }
    });
  });
});