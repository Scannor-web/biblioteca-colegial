// perfil.js: edición de datos y cierre de sesión
document.addEventListener("DOMContentLoaded", function () {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (usuario) {
    document.getElementById("nombreUsuario").value = usuario.nombre;
    document.getElementById("emailUsuario").value = usuario.correo;
  }

  document.getElementById("cerrarSesion").addEventListener("click", () => {
    localStorage.removeItem("usuario");
    window.location.href = "../../login.html";
  });

  document.getElementById("perfilForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Perfil actualizado (simulado).");
  });
});
