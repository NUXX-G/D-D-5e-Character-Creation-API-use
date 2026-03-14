#  D&D Character Sheet Generator

Proyecto web para el módulo de **Lenguajes de Marcas y Sistemas de Gestión de Información** del C.F.G.S. Desarrollo de Aplicaciones Multiplataforma.

##  Descripción

Aplicación web que consume la [D&D 5e API](https://www.dnd5eapi.co/) para generar fichas de personaje de Dungeons & Dragons 5ª Edición. El usuario puede:

-  Rellenar el personaje manualmente
-  Seleccionar raza, clase y trasfondo desde desplegables conectados a la API
-  Generar un personaje completamente aleatorio con un clic
-  Descargar la ficha oficial en PDF con sus datos

##  Estructura del proyecto
```
D&D_5e_API/
├── html/
│   ├── index.html        ← Página principal con explicación de D&D
│   ├── creador.html      ← Creador de personaje con ficha descargable
│   └── sobreMi.html      ← Información del autor
├── css/
│   └── style.css         ← Estilos globales
├── js/
│   └── main.js           ← Lógica y llamadas a la API
└── recursos/             ← Recursos gráficos
```

##  API utilizada

**D&D 5e API** — https://www.dnd5eapi.co/  
Endpoints utilizados:
- `/api/races` — Listado de razas
- `/api/classes` — Listado de clases
- `/api/backgrounds` — Trasfondos
- `/api/ability-scores` — Puntuaciones de habilidad

##  Tecnologías

- HTML5
- CSS3 (con animaciones)
- JavaScript (fetch + .then())

##  Autor

**Nelson Filipe Fardilha Karlsson**  
C.F.G.S. Desarrollo de Aplicaciones Multiplataforma
