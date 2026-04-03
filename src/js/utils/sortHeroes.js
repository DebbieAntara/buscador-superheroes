export function sortHeroes(heroes, order = "asc") {
  const heroesCopy = [...heroes];

  heroesCopy.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (order === "asc") {
      return nameA.localeCompare(nameB);
    }

    return nameB.localeCompare(nameA);
  });

  return heroesCopy;
}
