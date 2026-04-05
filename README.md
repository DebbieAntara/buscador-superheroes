# Buscador de Superhéroes

Proyecto académico de Frontend que permite buscar superhéroes por nombre, visualizar resultados dinámicos, ordenarlos alfabéticamente, revisar su detalle en un modal y navegar por los resultados mediante paginación.

El proyecto consume datos reales a través de una API REST y utiliza un proxy PHP para evitar problemas de CORS en el frontend.

---

## Demo

Sitio desplegado:  
**<https://superheroes.ltconsulting-group.com/>**

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
│   └── config.php   (local / hosting, no se sube a GitHub)
├── assets/
│   └── img/
│       └── hero-banner.webp
├── evidencias/
├── src/
│   ├── js/
│   │   ├── api/
│   │   │   └── superheroApi.js
│   │   ├── state/
│   │   │   └── appState.js
│   │   ├── ui/
│   │   │   ├── renderHeroes.js
│   │   │   ├── renderMessages.js
│   │   │   ├── renderModal.js
│   │   │   └── renderPagination.js
│   │   ├── utils/
│   │   │   ├── paginateHeroes.js
│   │   │   └── sortHeroes.js
│   │   └── main.js
│   └── scss/
│       ├── base/
│       ├── components/
│       ├── layout/
│       ├── pages/
│       ├── main.scss
│       └── main.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## Cómo ejecutar el proyecto en local

1. Clonar el repositorio
2. Abrir la carpeta en Visual Studio Code
3. Instalar dependencias:

```bash
npm install
```

4; Compilar SCSS:

```bash
npx sass --watch src/scss/main.scss src/scss/main.css
```

5; Ejecutar el proyecto con Live Server

---

## Proxy PHP

El proyecto no consume directamente el token de la API desde el frontend.

Para ello se utiliza un proxy PHP ubicado en:

- `api/searchHero.php`
- `api/config.php`

El archivo `config.php` contiene el token real y **no se sube a GitHub**.

En su lugar se incluye:

- `api/config.example.php`

---

## Archivo sensible ignorado

En `.gitignore` se excluye:

```gitignore
api/config.php
```

---

## Flujo de trabajo con Git

Cada funcionalidad fue desarrollada en una rama independiente y luego integrada mediante Pull Request hacia `develop`.

Ramas principales trabajadas:

- `feature/estructura-base`
- `feature/layout-base`
- `feature/api-proxy`
- `feature/render-resultados`
- `feature/ordenamiento-alfabetico`
- `feature/modal-detalle-heroe`
- `feature/paginacion`
- `feature/scss-responsive`
- `feature/hero-banner`
- `feature/deploy-mochahost`

---

## Estado del proyecto

Versión final preparada para despliegue y entrega académica.
