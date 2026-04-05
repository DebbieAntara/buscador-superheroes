const PROXY_URL = "https://superheroes.ltconsulting-group.com/api/searchHero.php";

export async function searchHeroesByName(name) {
  const heroName = name.trim();

  if (!heroName) {
    throw new Error("Debes ingresar un nombre.");
  }

  const url = new URL(PROXY_URL);
  url.searchParams.set("name", heroName);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("No se pudo conectar con el proxy.");
    }

    const data = await response.json();

    if (data.response === "error") {
      throw new Error(data.error || "No se encontraron resultados.");
    }

    return data.results;
  } catch (error) {
    throw error;
  }
}