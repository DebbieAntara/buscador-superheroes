export function paginateHeroes(heroes, currentPage = 1, itemsPerPage = 20) {
  const totalPages = Math.max(1, Math.ceil(heroes.length / itemsPerPage));
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedHeroes = heroes.slice(startIndex, endIndex);

  return {
    paginatedHeroes,
    currentPage: safeCurrentPage,
    totalPages,
  };
}