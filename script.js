// Mensajes de consola
console.log("El Templo de Afrodita ha sido invocado");

document.addEventListener("DOMContentLoaded", () => {
  console.log("La diosa bendice este despliegue ✨");

  // URL de tu API en Render
  const apiUrl = "https://temploafrodita-api.onrender.com/api/oraculo";

  // Llamada al backend para mostrar el oráculo
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      // Mostrar los datos en el HTML
      const oraculoEl = document.getElementById("oraculo");
      if (oraculoEl) {
        oraculoEl.textContent =
          `Dios: ${data.dios}\nMensaje: ${data.mensaje}\nAugurio: ${data.augurio}`;
      }
    })
    .catch(err => {
      const oraculoEl = document.getElementById("oraculo");
      if (oraculoEl) {
        oraculoEl.textContent = "El oráculo no responde...";
      }
      console.error("Error al conectar con el oráculo:", err);
    });
});
