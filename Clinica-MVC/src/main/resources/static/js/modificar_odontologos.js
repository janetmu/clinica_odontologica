const modificarForm = document.getElementById("modificarForm");

window.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        document.getElementById("id").value = id;
        fetch(`/odontologos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                document.getElementById("nombre").value = data.nombre;
                document.getElementById("apellido").value = data.apellido;
                document.getElementById("matricula").value = data.nroMatricula;
            })
            .catch((error) => {
                console.error("Error fetching odontologo:", error);
                alert("Odontólogo no encontrado");
            });
    }
});

modificarForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const matricula = document.getElementById("matricula").value;

    fetch(`/odontologos`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, nombre, apellido, nroMatricula: matricula }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert("Odontólogo modificado con éxito");
            window.location.href = 'listar_odontologos.html';
        })
        .catch((error) => {
            console.error("Error modificando odontólogo:", error);
        });
});