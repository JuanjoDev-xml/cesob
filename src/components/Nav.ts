// nav.ts
// Este archivo NO es un componente (.astro), es solo un módulo de
// TypeScript que exporta datos puros. Lo separamos de HamburgerMenu.astro
// porque si mañana agregás una sección nueva a la página, vas a querer
// tocar UN solo lugar para que aparezca en el menú — no buscar dentro de
// un componente HTML/CSS/JS mezclado.
export const navLinks = [
    { href: "#servicios", label: "Qué hacemos" },
    { href: "#reparaciones", label: "Servicio técnico" },
    { href: "#plan-canje", label: "Plan canje" },
    { href: "#nosotros", label: "Por qué elegirnos" },
    { href: "#ubicacion", label: "Dónde estamos" },
    { href: "#faq", label: "Preguntas frecuentes" },
    { href: "#contacto", label: "Contacto" },
  ] as const;