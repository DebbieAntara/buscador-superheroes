const modal = document.getElementById("heroModal");
const closeModalButton = document.getElementById("closeModal");

if (closeModalButton) {
  closeModalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}