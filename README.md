#  D&D Character Sheet Generator

Proyecto web para el módulo de **Lenguajes de Marcas y Sistemas de Gestión de Información** del C.F.G.S. Desarrollo de Aplicaciones Multiplataforma.

##  Descripción

Aplicación web que consume la [D&D 5e API](https://www.dnd5eapi.co/) para generar fichas de personaje de Dungeons & Dragons 5ª Edición. El usuario puede:

-  Rellenar el personaje manualmente
-  Seleccionar raza, clase y trasfondo desde desplegables conectados a la API
-  Generar un personaje completamente aleatorio con un clic

##  Estructura del proyecto
```
proyecto/
├── index.html
├── explorador.html
├── sobre-mi.html
├── css/
│   ├── style.css
│   └── sobre-mi.css
├── js/
│   ├── main.js
│   └── explorador.js
└── img/
```

##  API utilizada

**D&D 5e API** — https://www.dnd5eapi.co/  
Endpoints utilizados:
- `/api/races` — Listado de razas
- `/api/classes` — Listado de clases
- `/api/backgrounds` — Trasfondos
- `/api/spells` — Hechizos

##  Tecnologías

- HTML5
- CSS3 (con animaciones)
- JavaScript (fetch + .then())

##  Autor

**Nelson Filipe Fardilha Karlsson**  
C.F.G.S. Desarrollo de Aplicaciones Multiplataforma
