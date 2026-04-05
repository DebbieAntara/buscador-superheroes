const modal = document.getElementById("heroModal");
const modalBody = document.getElementById("modalBody");
const closeModalButton = document.getElementById("closeModal");

function safeValue(value, fallback = "No disponible") {
  if (value === null || value === undefined || value === "" || value === "-") {
    return fallback;
  }
  return value;
}

function formatList(values) {
  if (!Array.isArray(values) || values.length === 0) {
    return "No disponible";
  }

  return values.join(", ");
}

function getHeroImage(hero) {
  return hero.image?.url || "https://placehold.co/300x380?text=Sin+imagen";
}

function getStats(hero) {
  const stats = hero.powerstats || {};

  return `
    <ul class="modal__stats">
      <li><strong>Inteligencia:</strong> ${safeValue(stats.intelligence)}</li>
      <li><strong>Fuerza:</strong> ${safeValue(stats.strength)}</li>
      <li><strong>Velocidad:</strong> ${safeValue(stats.speed)}</li>
      <li><strong>Durabilidad:</strong> ${safeValue(stats.durability)}</li>
      <li><strong>Poder:</strong> ${safeValue(stats.power)}</li>
      <li><strong>Combate:</strong> ${safeValue(stats.combat)}</li>
    </ul>
  `;
}

export function openModal(hero) {
  if (!modal || !modalBody || !hero) return;

  const biography = hero.biography || {};
  const appearance = hero.appearance || {};
  const work = hero.work || {};
  const connections = hero.connections || {};

  modalBody.innerHTML = `
    <div class="modal__image-wrapper">
      <img
        src="${getHeroImage(hero)}"
        alt="${hero.name}"
        class="modal__image"
      />
    </div>

    <div class="modal__info">
      <h2 class="modal__title">${safeValue(hero.name)}</h2>

      <p><strong>Nombre real:</strong> ${safeValue(biography["full-name"])}</p>
      <p><strong>Editorial:</strong> ${safeValue(biography.publisher)}</p>
      <p><strong>Lugar de nacimiento:</strong> ${safeValue(biography["place-of-birth"])}</p>
      <p><strong>Primera aparición:</strong> ${safeValue(biography["first-appearance"])}</p>
      <p><strong>Ocupación:</strong> ${safeValue(work.occupation)}</p>
      <p><strong>Base:</strong> ${safeValue(work.base)}</p>
      <p><strong>Alias:</strong> ${formatList(biography.aliases)}</p>
      <p><strong>Altura:</strong> ${formatList(appearance.height)}</p>
      <p><strong>Peso:</strong> ${formatList(appearance.weight)}</p>
      <p><strong>Color de ojos:</strong> ${safeValue(appearance["eye-color"])}</p>
      <p><strong>Color de cabello:</strong> ${safeValue(appearance["hair-color"])}</p>
      <p><strong>Afiliaciones:</strong> ${safeValue(connections["group-affiliation"])}</p>
      <p><strong>Familiares / conexiones:</strong> ${safeValue(connections.relatives)}</p>

      <div class="modal__stats-wrapper">
        <h3>Estadísticas</h3>
        ${getStats(hero)}
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

export function closeModal() {
  if (!modal) return;
  modal.classList.add("hidden");
}

export function setupModalEvents() {
  if (!modal) return;

  const overlay = modal.querySelector(".modal__overlay");

  closeModalButton?.addEventListener("click", closeModal);
  overlay?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}