document.addEventListener("DOMContentLoaded", () => {
  initRevealOnScroll();
  initHeaderGlow();
  initSmoothAnchorOffset();
  initButtonSheen();
});

function initRevealOnScroll() {
  const revealItems = document.querySelectorAll(
    ".hero-copy, .hero-card, .section-header, .card, .footer-inner"
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initHeaderGlow() {
  const header = document.querySelector(".site-header");

  if (!header) return;

  const updateHeader = () => {
    if (window.scrollY > 24) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function initSmoothAnchorOffset() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      const header = document.querySelector(".site-header");
      const headerHeight = header ? header.offsetHeight : 0;
      const targetTop =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    });
  });
}

function initButtonSheen() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.classList.add("btn-sheen-active");
    });

    button.addEventListener("animationend", () => {
      button.classList.remove("btn-sheen-active");
    });
  });
}
