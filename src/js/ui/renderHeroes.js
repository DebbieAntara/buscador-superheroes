const heroesContainer = document.getElementById("heroesContainer");
const resultsCount = document.getElementById("resultsCount");

function getPublisher(hero) {
  return hero.biography?.publisher || "Sin editorial";
}

function getHeroImage(hero) {
  return hero.image?.url || "https://placehold.co/300x380?text=Sin+imagen";
}

function createHeroCard(hero) {
  return `
    <article class="hero-card">
      <div class="hero-card__image-wrapper">
        <img
          src="${getHeroImage(hero)}"
          alt="${hero.name}"
          class="hero-card__image"
        />
      </div>

      <div class="hero-card__body">
        <h2 class="hero-card__title">${hero.name}</h2>
        <p class="hero-card__meta">Editorial: ${getPublisher(hero)}</p>
        <button class="button button--secondary" data-id="${hero.id}">
          Ver detalle
        </button>
      </div>
    </article>
  `;
}

export function clearHeroes() {
  if (!heroesContainer) return;
  heroesContainer.innerHTML = "";
}

export function updateResultsCount(total) {
  if (!resultsCount) return;
  resultsCount.textContent = `Resultados: ${total}`;
}

export function renderHeroes(heroes) {
  if (!heroesContainer) return;

  clearHeroes();

  if (!heroes.length) return;

  heroesContainer.innerHTML = heroes
    .map((hero) => createHeroCard(hero))
    .join("");
}