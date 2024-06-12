const form = document.getElementById("agregarForm");
const apiURL = "http://localhost:8080";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const matricula = document.getElementById("matricula").value;

  // llamando al endpoint de agregar

  fetch(`${apiURL}/odontologos`, {
    method: "DELETE",
    body: JSON.stringify({ nombre, apellido, nroMatricula: matricula }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Odontólogo eliminado con éxito");
      form.reset(); // Resetear el formulario
    })
    .catch((error) => {
      console.error("Error eliminar odontólogo:", error);
    });
});
