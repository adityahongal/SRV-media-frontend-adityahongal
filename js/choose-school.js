// Choose the School — mobile slider pagination dots.
// Uses IntersectionObserver to update the active dot as the user swipes.

(function () {
  const viewport = document.querySelector(".choose-school__viewport");
  const dots = document.querySelectorAll(".choose-school__dot");
  const cards = document.querySelectorAll(".choose-school__card");

  if (!viewport || !dots.length || !cards.length) return;

  // Click a dot → scroll that card into view
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const target = cards[index];
      if (!target) return;
      target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    });
  });

  // Watch which card is most visible → update active dot
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const index = Array.from(cards).indexOf(entry.target);
          if (index === -1) return;
          dots.forEach((d, i) => {
            if (i === index) {
              d.setAttribute("aria-current", "true");
            } else {
              d.removeAttribute("aria-current");
            }
          });
        }
      });
    },
    {
      root: viewport,
      threshold: [0.5, 0.75, 1],
    }
  );

  cards.forEach((card) => observer.observe(card));
})();
