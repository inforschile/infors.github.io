document.addEventListener("DOMContentLoaded", () => {
  const btnServicios = document.getElementById("btn-servicios");
  const listaServicios = document.getElementById("lista-servicios");
  const btnContacto = document.getElementById("btn-contacto");

  btnServicios.addEventListener("click", (e) => {
    e.preventDefault();
    listaServicios.style.display = "block";
    listaServicios.scrollIntoView({ behavior: "smooth" });
  });

  btnContacto.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "contacto.html";
  });
});
