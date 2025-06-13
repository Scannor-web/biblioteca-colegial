// registro.js: envío del formulario de registro
document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const datos = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    usuario: document.getElementById("usuario").value,
    clave: document.getElementById("clave").value
  };

  fetch("controladores/auth/registro.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos)
  })
  .then(res => res.json())
  .then(data => {
    const mensaje = document.getElementById("mensajeRegistro");
    mensaje.textContent = data.success ? "Registro exitoso." : data.mensaje;
    mensaje.style.color = data.success ? "green" : "red";
  });
});
