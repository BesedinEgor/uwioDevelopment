const items = document.querySelectorAll(".problems__button");
const cards = document.querySelectorAll(".problems-modal");
// console.log(cards)
// Добавляем обработчик клика на каждый элемент списка
items.forEach((item) => {
  item.addEventListener("click", () => {
    // Получаем id карточки, соответствующей элементу списка
    const cardId = item.getAttribute("data-card");

    // Находим карточку с таким id и показываем ее
    cards.forEach((card) => {
      if (card.id === cardId) {
        card.style.display = "block";
        document.body.style.overflow = "hidden";
      }
    });
  });
});

cards.forEach((card) => {
  const closeBtn = card.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    card.style.display = 'none'
    document.body.style.overflow = "auto";
  });
});
