document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card.interactive-card");
  const modal = document.getElementById("project-modal");

  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalSkills = document.getElementById("modal-skills");
  const modalTech = document.getElementById("modal-tech");
  const modalCode = document.getElementById("modal-code");
  const modalLink = document.getElementById("modal-link");

  const closeModal = document.getElementById("modal-close");
  const modalOverlay = document.getElementById("modal-overlay");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.dataset.title;
      modalImage.src = card.dataset.image;
      modalImage.alt = card.dataset.title;
      modalDescription.textContent = card.dataset.description;

      modalSkills.textContent = "Skills Used: " + (card.dataset.skills || "N/A");
      modalTech.textContent = "Technologies Used: " + (card.dataset.tech || "N/A");
      modalCode.textContent = "Code Styles Used: " + (card.dataset.code || "N/A");

      modalLink.href = card.dataset.link;
      modalLink.textContent = card.dataset.linkLabel || "Open Project";

      modal.classList.remove("hidden");
    });
  });

  function closeProjectModal() {
    modal.classList.add("hidden");
  }

  closeModal.addEventListener("click", closeProjectModal);
  modalOverlay.addEventListener("click", closeProjectModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectModal();
    }
  });
});