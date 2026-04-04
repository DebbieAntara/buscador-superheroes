import { searchHeroesByName } from "./api/superheroApi.js";
import { appState } from "./state/appState.js";
import { renderHeroes, clearHeroes, updateResultsCount } from "./ui/renderHeroes.js";
import { renderMessage, clearMessage } from "./ui/renderMessages.js";
import { sortHeroes } from "./utils/sortHeroes.js";
import { paginateHeroes } from "./utils/paginateHeroes.js";
import { renderPagination, clearPagination } from "./ui/renderPagination.js";
import { openModal, setupModalEvents } from "./ui/renderModal.js";

const searchForm = document.getElementById("searchForm");
const heroInput = document.getElementById("heroInput");
const sortSelect = document.getElementById("sortSelect");
const heroesContainer = document.getElementById("heroesContainer");
const paginationContainer = document.getElementById("paginationContainer");

setupModalEvents();

function updateHeroesView() {
  if (!appState.currentHeroes.length) {
    clearHeroes();
    updateResultsCount(0);
    clearPagination();
    return;
  }

  const sortedHeroes = sortHeroes(appState.currentHeroes, appState.currentSort);

  const { paginatedHeroes, currentPage, totalPages } = paginateHeroes(
    sortedHeroes,
    appState.currentPage,
    appState.itemsPerPage
  );

  appState.currentPage = currentPage;
  appState.totalPages = totalPages;

  clearMessage();
  updateResultsCount(appState.currentHeroes.length);
  renderHeroes(paginatedHeroes);

  renderPagination({
    currentPage: appState.currentPage,
    totalPages: appState.totalPages,
    totalResults: appState.currentHeroes.length,
  });
}

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const heroName = heroInput.value.trim();

  clearHeroes();
  updateResultsCount(0);
  clearPagination();

  if (!heroName) {
    renderMessage("Escribe un nombre de superhéroe antes de buscar.");
    return;
  }

  renderMessage("Buscando superhéroes...");

  try {
    const heroes = await searchHeroesByName(heroName);

    appState.currentHeroes = heroes;
    appState.currentQuery = heroName;
    appState.currentSort = sortSelect.value;
    appState.currentPage = 1;

    if (!heroes.length) {
      renderMessage("No se encontraron resultados para esa búsqueda.");
      clearPagination();
      return;
    }

    updateHeroesView();
  } catch (error) {
    appState.currentHeroes = [];
    appState.currentQuery = "";
    appState.currentSort = sortSelect.value;
    appState.currentPage = 1;
    appState.totalPages = 1;

    clearHeroes();
    updateResultsCount(0);
    clearPagination();
    renderMessage(error.message || "Ocurrió un error al buscar héroes.");
    console.error("Error:", error.message);
  }
});

sortSelect.addEventListener("change", () => {
  appState.currentSort = sortSelect.value;
  appState.currentPage = 1;

  if (!appState.currentHeroes.length) {
    return;
  }

  updateHeroesView();
});

paginationContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-page]");
  if (!button || !appState.currentHeroes.length) return;

  const action = button.dataset.page;

  switch (action) {
    case "first":
      appState.currentPage = 1;
      break;
    case "prev":
      appState.currentPage = Math.max(1, appState.currentPage - 1);
      break;
    case "next":
      appState.currentPage = Math.min(appState.totalPages, appState.currentPage + 1);
      break;
    case "last":
      appState.currentPage = appState.totalPages;
      break;
    default:
      break;
  }

  updateHeroesView();
});

heroesContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");
  if (!button) return;

  const heroId = button.dataset.id;
  const hero = appState.currentHeroes.find((item) => item.id === heroId);

  if (!hero) return;

  openModal(hero);
});