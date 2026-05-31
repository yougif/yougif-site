const body = document.body;

const projectModal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalTag = document.querySelector("#modal-tag");
const modalDetail = document.querySelector("#modal-detail");
const modalImage = document.querySelector("#modal-image");

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

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.modalTitle;
    modalTag.textContent = card.dataset.modalTag;
    modalDetail.textContent = card.dataset.modalDetail;
    modalImage.src = card.dataset.modalImage;
    modalImage.alt = `${card.dataset.modalTitle} preview`;
    openModal(projectModal);
  });
});

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
