const form = document.getElementById("formulario-contacto");
const spinner = document.getElementById("spinner");
const modal = document.getElementById("modalConfirmacion");
const cerrarModal = document.getElementById("cerrarModal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  spinner.style.display = "block";
  setTimeout(() => {
    spinner.style.display = "none";
    modal.style.display = "flex";
    form.reset();
  }, 2000); // Simula tiempo de envío
});

cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});