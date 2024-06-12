const formEliminar = document.getElementById("eliminarForm");

formEliminar.addEventListener("submit", function (event) {
  event.preventDefault();

  const id = document.getElementById("id").value;

  fetch(`/odontologos/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        alert("Odontólogo eliminado con éxito");
        formEliminar.reset(); // Resetear el formulario
      } else {
        alert("Error eliminando odontólogo");
      }
    })
    .catch((error) => {
      console.error("Error eliminando odontólogo:", error);
    });
});
