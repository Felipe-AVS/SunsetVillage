(() => {
  const topbar = document.getElementById("topbar");
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".topbar nav");

  if (!topbar || !menu || !nav) return;

  function updateHeader() {
    topbar.classList.toggle("scrolled", window.scrollY > 10);
  }

  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  menu.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("nav-open");

    menu.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menu.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      topbar.classList.remove("nav-open");

      menu.setAttribute(
        "aria-expanded",
        "false"
      );

      menu.setAttribute(
        "aria-label",
        "Abrir menu"
      );
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 950) {
      topbar.classList.remove("nav-open");

      menu.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  });
})();