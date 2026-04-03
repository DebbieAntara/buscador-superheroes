const messageContainer = document.getElementById("messageContainer");

export function renderMessage(message) {
  if (!messageContainer) return;

  messageContainer.innerHTML = `
    <p class="message-container__text">${message}</p>
  `;
}

export function clearMessage() {
  if (!messageContainer) return;

  messageContainer.innerHTML = "";
}