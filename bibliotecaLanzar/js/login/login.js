// login.js: manejo del formulario de login
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  fetch("controladores/auth/login.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, clave })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      localStorage.setItem("usuario", JSON.stringify(data.usuario));
      window.location.href = "paginas/perfil/perfil.html";
    } else {
      document.getElementById("mensajeError").textContent = data.mensaje;
    }
  });
});
