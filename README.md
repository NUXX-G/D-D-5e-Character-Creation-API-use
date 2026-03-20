# D&D 5e Character Sheet Generator

Proyecto web para el modulo de **Lenguajes de Marcas y Sistemas de Gestion de Informacion** del C.F.G.S. Desarrollo de Aplicaciones Multiplataforma en el CPIFP Alan Turing, Malaga.

## Descripcion

Aplicacion web que consume la [D&D 5e API](https://www.dnd5eapi.co/) para generar fichas de personaje de Dungeons & Dragons 5a Edicion. El usuario puede seleccionar raza, clase y alineamiento desde desplegables cargados con la API, o pulsar el boton de aleatorio y dejar que el destino decida. Los datos se muestran en una ficha generada dinamicamente en la pagina.

## Estructura del proyecto
```
D&D_5E_API/
├── html/
│   ├── creador.html
│   └── sobreMi.html
├── imagenes/
├── js/
│   └── main.js
├── recursos/
├── index.html
└── style.css
```

## API utilizada

**D&D 5e API** — https://www.dnd5eapi.co/

Endpoints utilizados:
- `/api/races` — lista de razas
- `/api/races/{index}` — detalle de una raza concreta
- `/api/classes` — lista de clases
- `/api/classes/{index}` — detalle de una clase concreta
- `/api/alignments` — lista de alineamientos

## Tecnologias

- HTML5
- CSS3 con animaciones keyframes
- JavaScript vanilla con fetch y .then()

## Autor

**Nelson Filipe Fardilha Karlsson**
C.F.G.S. Desarrollo de Aplicaciones Multiplataforma — CPIFP Alan Turing