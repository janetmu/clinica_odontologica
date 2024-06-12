const form = document.getElementById("agregarForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const matricula = document.getElementById("matricula").value;

    fetch(`/odontologos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, apellido, nroMatricula: matricula }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert("Odontólogo agregado con éxito");
            form.reset();
            fetchOdontologos();
        })
        .catch((error) => {
            console.error("Error agregando odontólogo:", error);
        });
});
