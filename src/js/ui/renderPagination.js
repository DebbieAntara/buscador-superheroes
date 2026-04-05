const paginationContainer = document.getElementById("paginationContainer");

export function clearPagination() {
  if (!paginationContainer) return;
  paginationContainer.innerHTML = "";
  paginationContainer.classList.add("hidden");
}

export function renderPagination({ currentPage, totalPages, totalResults }) {
  if (!paginationContainer) return;

  if (!totalResults) {
    clearPagination();
    return;
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  paginationContainer.classList.remove("hidden");

  paginationContainer.innerHTML = `
    <button
      class="button button--pagination"
      data-page="first"
      ${isFirstPage ? "disabled" : ""}
    >
      Primera
    </button>

    <button
      class="button button--pagination"
      data-page="prev"
      ${isFirstPage ? "disabled" : ""}
    >
      Anterior
    </button>

    <span class="pagination__info">Página ${currentPage} de ${totalPages}</span>

    <button
      class="button button--pagination"
      data-page="next"
      ${isLastPage ? "disabled" : ""}
    >
      Siguiente
    </button>

    <button
      class="button button--pagination"
      data-page="last"
      ${isLastPage ? "disabled" : ""}
    >
      Última
    </button>
  `;
}