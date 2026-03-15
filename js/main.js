fetch('https://www.dnd5eapi.co/api/races')
    .then(r => r.json())
    .then(datos => {
        const select = document.getElementById('select-raza');
        datos.results.forEach(raza => {
            const opcion = document.createElement('option');
            opcion.value = raza.index;
            opcion.textContent = raza.name;
            select.appendChild(opcion);
        });
    });