"use client";

/**
 * Universal Smooth Scroll Utility
 * Integrates with Lenis smooth scrolling engine with fallback to window.scrollTo.
 * Automatically accounts for the fixed navbar height (-90px offset) so headings are never clipped.
 */

declare global {
  interface Window {
    __lenis?: {
      scrollTo: (
        target: number | HTMLElement | string,
        options?: { offset?: number; duration?: number; immediate?: boolean }
      ) => void;
    } | null;
  }
}

export function scrollToTarget(
  target: string | number | HTMLElement,
  offset = -90
) {
  if (typeof window === "undefined") return;

  const lenis = window.__lenis;

  // Case 1: Scroll to top / home
  if (
    target === 0 ||
    target === "#" ||
    target === "#hero" ||
    target === "hero"
  ) {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
    return;
  }

  // Case 2: Target is element or selector
  let element: HTMLElement | null = null;
  let cleanId = "";

  if (typeof target === "string") {
    cleanId = target.startsWith("#") ? target.slice(1) : target;
    element = document.getElementById(cleanId);
  } else if (target instanceof HTMLElement) {
    element = target;
    cleanId = element.id || "";
  }

  if (element) {
    if (lenis) {
      lenis.scrollTo(element, { offset, duration: 1.15 });
    } else {
      const rect = element.getBoundingClientRect();
      const targetY = window.pageYOffset + rect.top + offset;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }

    if (cleanId && window.history.pushState) {
      window.history.pushState(null, "", `#${cleanId}`);
    }
  }
}
