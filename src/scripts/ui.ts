// Interações globais: header, menu, revelação ao rolar, brilhos que seguem o cursor.
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = window.matchMedia("(pointer: fine)").matches;

// Header muda ao rolar
const header = document.querySelector<HTMLElement>("[data-header]");
const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 12);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Menu mobile
const menu = document.querySelector<HTMLElement>("[data-menu]");
const openBtn = document.querySelector<HTMLButtonElement>("[data-menu-open]");
const closeBtn = document.querySelector<HTMLButtonElement>("[data-menu-close]");
const setMenu = (open: boolean) => {
  menu?.classList.toggle("open", open);
  menu?.setAttribute("aria-hidden", String(!open));
  openBtn?.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
  if (open) closeBtn?.focus();
};
openBtn?.addEventListener("click", () => setMenu(true));
closeBtn?.addEventListener("click", () => setMenu(false));
menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

// Revelação ao rolar
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
);
document.querySelectorAll(".reveal, .reveal-img").forEach((el) => io.observe(el));

// Luz dourada que segue o cursor (desktop) ou a rolagem (celular)
document.querySelectorAll<HTMLElement>(".glow-area").forEach((area) => {
  if (reduced) return;
  if (fine) {
    area.addEventListener("pointermove", (e) => {
      const r = area.getBoundingClientRect();
      area.style.setProperty("--gx", `${e.clientX - r.left}px`);
      area.style.setProperty("--gy", `${e.clientY - r.top}px`);
    });
  } else {
    const upd = () => {
      const r = area.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
      area.style.setProperty("--gx", `${30 + p * 50}%`);
      area.style.setProperty("--gy", `${20 + p * 60}%`);
    };
    upd();
    window.addEventListener("scroll", upd, { passive: true });
  }
});

// Brilho nos cards e botões
if (fine && !reduced) {
  document.addEventListener("pointermove", (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>(".svc, .btn, [data-spot]");
    if (!t) return;
    const r = t.getBoundingClientRect();
    const x = `${e.clientX - r.left}px`;
    const y = `${e.clientY - r.top}px`;
    t.style.setProperty("--mx", x);
    t.style.setProperty("--my", y);
    t.style.setProperty("--bx", x);
    t.style.setProperty("--by", y);
  });

  // Botões levemente "magnéticos"
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      b.style.transform = `translate(${dx * 8}px, ${dy * 6 - 2}px)`;
    });
    b.addEventListener("pointerleave", () => (b.style.transform = ""));
  });
}
