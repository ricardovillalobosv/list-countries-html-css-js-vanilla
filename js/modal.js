const printModal = (content) => {
  const modalContent = createCustomElement(
    "div",
    {
      id: "modal-content",
      class: "modal-content animated fadeInDown",
    },
    [content]
  );
  const modalContainer = createCustomElement(
    "div",
    {
      id: "modal",
      class: "modal",
    },
    [modalContent]
  );

  document.body.appendChild(modalContainer);

  const removeModal = () => document.body.removeChild(modalContainer);

  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) removeModal();
  });
};

// printModal(`<h1 class='test'>Hola</h1>`);
