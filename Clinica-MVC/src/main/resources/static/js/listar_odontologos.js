const tableBody = document.querySelector("#odontologosTable tbody");

function fetchOdontologos() {
    fetch(`/odontologos`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            tableBody.innerHTML = "";
            data.forEach((odontologo) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${odontologo.id}</td>
                    <td>${odontologo.nombre}</td>
                    <td>${odontologo.apellido}</td>
                    <td>${odontologo.nroMatricula}</td>
                    <td>
                        <button class="btn btn-sm" style="background-color: #a6dcef;" onclick="redirectModificar(${odontologo.id})">Modificar</button>
                        <button class="mx-4 btn btn-sm" style="background-color: #ef9a9a;" onclick="deleteOdontologo(${odontologo.id})">Eliminar</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

function deleteOdontologo(id) {
    fetch(`/odontologos/${id}`, {
        method: "DELETE"
    })
        .then((response) => {
            if (response.ok) {
                alert("Odontólogo eliminado con éxito");
                fetchOdontologos();
            } else {
                alert("Error eliminando odontólogo");
            }
        })
        .catch((error) => {
            console.error("Error eliminando odontólogo:", error);
        });
}

function redirectModificar(id) {
    window.location.href = `modificar_odontologos.html?id=${id}`;
}

fetchOdontologos();