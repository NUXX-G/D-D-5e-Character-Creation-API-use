const BASE_URL = "https://www.dnd5eapi.co/api";


document.addEventListener("DOMContentLoaded", () => {
    cargarRazas();
    cargarClases();
    cargarAlinemientos();

    document.getElementById("btn-generar").addEventListener("click", () => {
        generar();
    });

    document.getElementById("btn-aleatorio").addEventListener("click", () => {
        generarAleatorio();
    });
});

function cargarRazas() 
{
    const select = document.getElementById("select-raza");
    fetch(BASE_URL + "/races")
        .then(respuesta => respuesta.json())
        .then(datos => {
            select.innerHTML = '<option value="">Elige una raza</option>';
            datos.results.forEach(raza => {
                const opcion = document.createElement("option");
                opcion.value = raza.index;
                opcion.textContent = raza.name;
                select.appendChild(opcion);
            });
        })
        .catch(error => {
            select.innerHTML = '<option value="">Error: ' + error.message + '</option>';
        });
}

function cargarClases()
{
    const select = document.getElementById("select-clase")
    fetch(BASE_URL + "/classes")
        .then(respuesta => respuesta.json())
        .then(datos => {
            select.innerHTML = '<option value="">Elige una clase</option>';
            datos.results.forEach(clase => {
                const opcion = document.createElement("option");
                opcion.value = clase.index;
                opcion.textContent = clase.name;
                select.appendChild(opcion);
            });
        })
        .catch(error => {
            select.innerHTML = '<option value="">Error: ' + error.message + '</option>';
        });
}

function cargarAlinemientos()
{
    const select = document.getElementById("select-alineamiento")
    fetch(BASE_URL + "/alignments")
        .then(respuesta => respuesta.json())
        .then(datos => {
            select.innerHTML = '<option value="">Elige un alineamieto</option>';
            datos.results.forEach(alineamiento => {
                const opcion = document.createElement("option");
                opcion.value = alineamiento.index;
                opcion.textContent = alineamiento.name;
                select.appendChild(opcion);
            });
        })
        .catch(error => {
            select.innerHTML = '<option value="">Error: ' + error.message + '</option>';
        });
}

function mostrarFicha(nombre, raza, clase, alineamiento)
{
    const ficha = document.getElementById("ficha-personaje");
    ficha.innerHTML = "<h2>" + nombre + "</h2>" 
                    + "<p><strong>Raza:</strong>" + raza.name + "</p>" 
                    + "<p><strong>Tamaño:</strong>" + raza.size + "</p>" 
                    + "<p><strong>Clase:</strong>" + clase.name + "</p>" 
                    + "<p><strong>Vida:</strong>" + "d"+clase.hit_die + "</p>" 
                    + "<p><strong>Alineamiento:</strong>" + alineamiento + "</p>";
    ficha.classList.remove("oculto");
}

function generar()
{
    const nombre = document.getElementById("input-nombre").value.trim();
    const razaIndex = document.getElementById("select-raza").value;    
    const claseIndex = document.getElementById("select-clase").value;
    const selectAlineamiento = document.getElementById("select-alineamiento");
    const alineamiento = selectAlineamiento.options[selectAlineamiento.selectedIndex].text;
}