const body = document.body;

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");

function openModal(modal) {
  modal?.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
}

function closeModals() {
  document.querySelectorAll(".modal").forEach((modal) => modal.setAttribute("aria-hidden", "true"));
  body.classList.remove("modal-open");
}

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.lightboxSrc;
    lightboxImage.alt = item.dataset.lightboxAlt;
    openModal(lightbox);
  });
});

document.querySelectorAll("[data-close-modal], [data-close-lightbox]").forEach((button) => {
  button.addEventListener("click", closeModals);
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModals();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModals();
  }
});
