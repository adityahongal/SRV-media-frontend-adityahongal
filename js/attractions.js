// Other Attractions — tab switcher.

(function () {
  const tabs = document.querySelectorAll(".attractions__tab");
  const panels = document.querySelectorAll(".attractions__panel");

  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("aria-controls");

      tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");

      panels.forEach((panel) => {
        panel.hidden = panel.id !== target;
      });
    });
  });
})();
