// Exhibition slider — scrolls cards by one column on prev/next.

(function () {
  const list = document.querySelector(".exhibition__list");
  const prevBtn = document.querySelector(".exhibition__nav--prev");
  const nextBtn = document.querySelector(".exhibition__nav--next");

  if (!list || !prevBtn || !nextBtn) return;

  function scrollByCard(direction) {
    const firstCard = list.querySelector(".exhibition__card");
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth;
    const gap = parseInt(getComputedStyle(list).gap) || 20;
    list.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  }

  prevBtn.addEventListener("click", () => scrollByCard(-1));
  nextBtn.addEventListener("click", () => scrollByCard(1));

  // Keyboard support — arrow keys scroll the carousel
  list.tabIndex = 0;
  list.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); scrollByCard(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); scrollByCard(-1); }
  });

  // Disable prev/next at edges
  function updateButtons() {
    const atStart = list.scrollLeft <= 4;
    const atEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - 4;
    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
  }

  list.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
})();
