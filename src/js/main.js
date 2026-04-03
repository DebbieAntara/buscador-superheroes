import { searchHeroesByName } from "./api/superheroApi.js";

const searchForm = document.getElementById("searchForm");
const heroInput = document.getElementById("heroInput");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const heroName = heroInput.value.trim();

  if (!heroName) {
    console.log("Ingresa un nombre de superhéroe.");
    return;
  }

  try {
    const heroes = await searchHeroesByName(heroName);
    console.log("Resultados encontrados:", heroes);
  } catch (error) {
    console.error("Error:", error.message);
  }
});