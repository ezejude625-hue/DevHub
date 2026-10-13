const initAnimations = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) return;

  if (window.gsap) {
    const heroContent = [
      ".hero__stats__text",
      ".hero__heading",
      ".desc__text",
      ".hero__cta button",
    ];

    window.gsap.from(".logo__heading", {
      y: -12,
      opacity: 0,
      duration: 0.45,
      ease: "power2.out",
    });

    window.gsap.from(heroContent, {
      y: 24,
      opacity: 0,
      duration: 0.65,
      stagger: 0.12,
      delay: 0.1,
      ease: "power2.out",
      clearProps: "transform,opacity",
    });
  }

  if (window.AOS) {
    document.documentElement.classList.add("aos-enabled");
    window.AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 72,
    });
  }
};

document.addEventListener("DOMContentLoaded", initAnimations);
