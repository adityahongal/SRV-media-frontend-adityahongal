// Parents Choose Us — video play-in-place + mobile slider nav.

(function () {
  // Play in place on click
  document.querySelectorAll(".parents__card").forEach((card) => {
    const playBtn = card.querySelector(".parents__play");
    const video = card.querySelector(".parents__video");
    if (!playBtn || !video) return;

    playBtn.addEventListener("click", () => {
      card.setAttribute("data-playing", "true");
      video.controls = true;
      video.muted = false;
      video.play().catch(() => {});
    });

    video.addEventListener("pause", () => {
      // optional: show overlay back
      // card.removeAttribute("data-playing");
    });

    video.addEventListener("ended", () => {
      card.removeAttribute("data-playing");
      video.controls = false;
      video.currentTime = 0;
    });
  });

  // Mobile slider nav
  const list = document.querySelector(".parents__list");
  const prev = document.querySelector(".parents__nav--prev");
  const next = document.querySelector(".parents__nav--next");

  if (!list || !prev || !next) return;

  function scrollByCard(direction) {
    const card = list.querySelector(".parents__card");
    if (!card) return;
    const gap = parseInt(getComputedStyle(list).gap) || 16;
    list.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  }

  prev.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));

  function updateButtons() {
    const atStart = list.scrollLeft <= 4;
    const atEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - 4;
    prev.disabled = atStart;
    next.disabled = atEnd;
  }

  list.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
})();
