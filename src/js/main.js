import { searchHeroesByName } from "./api/superheroApi.js";
import { appState } from "./state/appState.js";
import { renderHeroes, clearHeroes, updateResultsCount } from "./ui/renderHeroes.js";
import { renderMessage, clearMessage } from "./ui/renderMessages.js";
import { sortHeroes } from "./utils/sortHeroes.js";

const searchForm = document.getElementById("searchForm");
const heroInput = document.getElementById("heroInput");
const sortSelect = document.getElementById("sortSelect");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const heroName = heroInput.value.trim();

  clearHeroes();
  updateResultsCount(0);

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

    if (!heroes.length) {
      renderMessage("No se encontraron resultados para esa búsqueda.");
      return;
    }

    const sortedHeroes = sortHeroes(appState.currentHeroes, appState.currentSort);

    clearMessage();
    renderHeroes(sortedHeroes);
  } catch (error) {
    appState.currentHeroes = [];
    appState.currentQuery = "";
    appState.currentSort = sortSelect.value;

    clearHeroes();
    updateResultsCount(0);
    renderMessage(error.message || "Ocurrió un error al buscar héroes.");
    console.error("Error:", error.message);
  }
});

sortSelect.addEventListener("change", () => {
  appState.currentSort = sortSelect.value;

  if (!appState.currentHeroes.length) {
    return;
  }

  const sortedHeroes = sortHeroes(appState.currentHeroes, appState.currentSort);
  clearMessage();
  renderHeroes(sortedHeroes);
});