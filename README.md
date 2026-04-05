# Buscador de Superhéroes

Proyecto académico de Frontend que permite buscar superhéroes por nombre, visualizar resultados dinámicos, ordenarlos alfabéticamente, revisar su detalle en un modal y navegar por los resultados mediante paginación.

El proyecto consume datos reales a través de una API REST y utiliza un proxy PHP para evitar problemas de CORS en el frontend.

---

## Demo

Sitio desplegado:
**https://superheroes.ltconsulting-group.com/**

---

## Funcionalidades principales

- Búsqueda de superhéroes por nombre
- Render dinámico de resultados
- Ordenamiento alfabético A-Z / Z-A
- Modal de detalle del héroe
- Paginación de resultados
- Diseño responsive
- Hero banner visual de entrada

---

## Tecnologías usadas

- HTML5
- SCSS / SASS
- JavaScript
- API REST
- PHP (proxy para consumo seguro)
- Git y GitHub

---

## Estructura del proyecto

```text
buscador-superheroes/
├── api/
│   ├── config.example.php
│   ├── searchHero.php
│   └── config.php
├── assets/
│   └── img/
├── evidencias
├── src/
│   ├── js/
│   │   ├── api/
│   │   ├── state/
│   │   ├── ui/
│   │   ├── utils/
│   │   └── main.js
│   └── scss/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md 