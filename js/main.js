// URL base de la API, la guardo aqui para no repetirla en cada fetch
const url = "https://www.dnd5eapi.co/api";

/**
 * @description Esperamos a que todo este cargado completamente para llamar a las funciones
 * y asi no tener ningun error inesperado ;).
 */
document.addEventListener("DOMContentLoaded", () => {
    cargarRazas();
    cargarClases();
    cargarAlineamientos();

    document.getElementById("btn-generar").addEventListener("click", () => {
        generar();
    });

    document.getElementById("btn-aleatorio").addEventListener("click", () => {
        generarAleatorio();
    });
});

/**
 * @function cargarRazas
 * @description Aqui es donde se carga y muestran todas las razas de la api en el html
 * para ello hacemos un fetch, usando la const global que se llama url y le añadimos /races, esot lo hago
 * basicamente para pillar la parte de razas simplemente y no todo despues lo pasamos a un json
 * para asi poder manipular los datos, y con un for each recorremos todo y lo vamos mostrando en el html
 * usando el innerHtml y el appendChild
 */
function cargarRazas() 
{
    const select = document.getElementById("select-raza");
    fetch(url + "/races")
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

/**
 * @function cargarClases
 * @description Exactamente lo mismo que cargarRazas(), pero esta vez añadomos /classes, esto para pillar obviamente la parte de clases
 * 
 */
function cargarClases()
{
    const select = document.getElementById("select-clase")
    fetch(url + "/classes")
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

/**
 * @function cargarAlineamientos
 * @description Exactamente igual que cargarRaza() y cargarClases(), pero esta vez con /alignments
 */
function cargarAlineamientos()
{
    const select = document.getElementById("select-alineamiento")
    fetch(url + "/alignments")
        .then(respuesta => respuesta.json())
        .then(datos => {
            select.innerHTML = '<option value="">Elige un alineamiento</option>';
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

/**
 * @function mostrarFicha
 * @description Crea el html de la ficha del personaje con los datos que nos devolvio la api
 * y lo mete en el div ficha-personaje, tambien elimino la clase oculto para que se vea
 * @param  nombre - Nombre del personaje que escribio el usuario
 * @param  raza - Todos los datos de la raza que devolvio la API
 * @param  clase - Todos los datos de la clase que devolvio la API
 * @param  alineamiento - Texto del alineamiento que selecciono el usuario
 */
function mostrarFicha(nombre, raza, clase, alineamiento)
{
    const ficha = document.getElementById("ficha-personaje");
    let bonos = "";
    raza.ability_bonuses.forEach(bono => {
        bonos = bonos + bono.ability_score.name + " +" + bono.bonus + " ";
    });
    ficha.innerHTML = "<h2>" + nombre + "</h2>" 
                    + "<p><strong>Raza: </strong>" + raza.name + "</p>" 
                    + "<p><strong>Tamaño: </strong>" + raza.size + "</p>" 
                    + "<p><strong>Clase: </strong>" + clase.name + "</p>" 
                    + "<p><strong>Vida: </strong>" + "d"+clase.hit_die + "</p>" 
                    + "<p><strong>Alineamiento: </strong>" + alineamiento + "</p>"
                    + "<p><strong>Bonificadores: </strong>" + bonos + "</p>";
    ficha.classList.remove("oculto");
}

/**
 * @function generar
 * @description Pilla los valores del formulario, mira que no esten vacios
 * y hace dos fetch anidados (tienen que estar anidados porque necesito los dos a la vez) 
 * para obtener el detalle de la raza y la clase
 * Es la funcion que mas fallos puede dar y por eso tiene el try catch.
 */
function generar()
{
    const nombre = document.getElementById("input-nombre").value;
    const razaIndex = document.getElementById("select-raza").value;    
    const claseIndex = document.getElementById("select-clase").value;
    const alineamiento = document.getElementById("select-alineamiento").value;

    if (nombre === "" || razaIndex === "" || claseIndex === "" || alineamiento === "")    
    {
        alert("Compi, tienes que rellenar todos los campos para generar el personaje. ;)");
        return;
    }

    try {
        fetch(url + "/races/" + razaIndex)
            .then(respuesta => respuesta.json())
            .then(raza => {
                fetch(url + "/classes/" + claseIndex)
                    .then(respuesta => respuesta.json())
                    .then(clase => {
                        mostrarFicha(nombre, raza, clase, alineamiento);
                    })
                    .catch(error => {
                        alert("Error: " + error.message);
                    });
            })
            .catch(error => {
                alert("Error: " + error.message);
            });
    } catch (error) {
        alert("Error inesperado: " + error.message);
    }
}

/**
 * @function generarAleatorio
 * @description Pide las tres listas a la API, elige un elemento al azar usando el math random y multiplicandolo
 * por el tamaño de la raza,clase... y despues usa el floor para redondear para abajo y asi tener un indice que sea
 * valido, despues cada una lo mete en los selects y llama a generar para que haga el resto
 */
function generarAleatorio()
{
    fetch(url + "/races")
        .then(respuesta => respuesta.json())
        .then(datosRazas => {
            const raza = datosRazas.results[Math.floor(Math.random() * datosRazas.results.length)];
                fetch(url + "/classes")
                    .then(respuesta => respuesta.json())
                    .then(datosClases => {
                        const clase = datosClases.results[Math.floor(Math.random() * datosClases.results.length)]
                            fetch(url + "/alignments")
                                .then(respuesta => respuesta.json())
                                .then(datosAlineamientos => {
                                    const alineamieto = datosAlineamientos.results[Math.floor(Math.random() * datosAlineamientos.results.length)]
                                    document.getElementById("select-raza").value = raza.index;
                                    document.getElementById("select-clase").value = clase.index;
                                    document.getElementById("select-alineamiento").value = alineamieto.index;
                                    document.getElementById("input-nombre").value = "Pedro Sanchez";
                                    generar();
                                });
                    });
        });
}