document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".project-card.interactive-card");

  const modal = document.getElementById("project-modal");
  const overlay = document.getElementById("modal-overlay");

  const title = document.getElementById("modal-title");
  const image = document.getElementById("modal-image");
  const description = document.getElementById("modal-description");
  const skills = document.getElementById("modal-skills");
  const tech = document.getElementById("modal-tech");
  const code = document.getElementById("modal-code");
  const link = document.getElementById("modal-link");

  const closeBtn = document.getElementById("modal-close");

  cards.forEach(card => {
    card.addEventListener("click", () => {

      title.textContent = card.dataset.title;
      image.src = card.dataset.image;
      description.textContent = card.dataset.description;

      skills.textContent = "Skills Used: " + (card.dataset.skills || "N/A");
      tech.textContent = "Technologies Used: " + (card.dataset.tech || "N/A");
      code.textContent = "Code Styles Used: " + (card.dataset.code || "N/A");

      // 🔥 IMPORTANT FIX
      const projectLink = card.dataset.link;
      const label = card.dataset.linkLabel || "Open Project";

      if (projectLink && projectLink !== "") {
        link.href = projectLink;
        link.style.display = "inline-block";
      } else {
        link.removeAttribute("href");
        link.style.display = "inline-block"; // still show button
      }

      link.textContent = label;

      modal.classList.remove("hidden");
    });
  });

  function closeModal() {
    modal.classList.add("hidden");
  }

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

});
