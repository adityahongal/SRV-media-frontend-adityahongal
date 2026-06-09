// Other Attractions — tab switcher with arrow-key navigation.

(function () {
  const tabs = Array.from(document.querySelectorAll(".attractions__tab"));
  const panels = document.querySelectorAll(".attractions__panel");

  if (!tabs.length || !panels.length) return;

  function activate(tab) {
    const target = tab.getAttribute("aria-controls");
    tabs.forEach((t) => {
      const isActive = t === tab;
      t.setAttribute("aria-selected", isActive ? "true" : "false");
      t.tabIndex = isActive ? 0 : -1;
    });
    panels.forEach((panel) => { panel.hidden = panel.id !== target; });
  }

  // Initial tabindex roving
  tabs.forEach((t) => {
    t.tabIndex = t.getAttribute("aria-selected") === "true" ? 0 : -1;
  });

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => activate(tab));

    tab.addEventListener("keydown", (e) => {
      let next = null;
      if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
      else if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === "Home") next = tabs[0];
      else if (e.key === "End") next = tabs[tabs.length - 1];
      if (next) {
        e.preventDefault();
        activate(next);
        next.focus();
      }
    });
  });
})();
