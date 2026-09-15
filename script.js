"use strict";

/* =========================
   Theme
   ========================= */

const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const themeToggleLabel = themeToggle?.querySelector(".theme-toggle-label");
const THEME_STORAGE_KEY = "jd-theme";

function isValidTheme(theme) {
    return theme === "light" || theme === "dark";
}

function getInitialTheme() {
    try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

        if (isValidTheme(savedTheme)) {
            return savedTheme;
        }
    } catch (error) {
        console.warn("Theme konnte nicht aus localStorage gelesen werden.", error);
    }

    return "dark";
}

function updateThemeControl(theme) {
    if (!themeToggle || !themeToggleLabel) {
        return;
    }

    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(!isDark));
    themeToggleLabel.textContent = isDark ? "Light Mode" : "Dark Mode";
}

function applyTheme(theme, save = false) {
    root.dataset.theme = theme;
    updateThemeControl(theme);

    if (!save) {
        return;
    }

    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
        console.warn("Theme konnte nicht in localStorage gespeichert werden.", error);
    }
}

applyTheme(getInitialTheme());

themeToggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
});

/* =========================
   Akkordeons
   ========================= */

const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const panelId = trigger.getAttribute("aria-controls");
        const panel = panelId ? document.getElementById(panelId) : null;

        if (!panel) {
            return;
        }

        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!isExpanded));
        panel.hidden = isExpanded;
    });
});

/* =========================
   Zurück zum Seitenanfang
   ========================= */

const backToTopButton = document.querySelector("#back-to-top");

function updateBackToTopVisibility() {
    if (!backToTopButton) {
        return;
    }

    backToTopButton.hidden = window.scrollY < 500;
}

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
updateBackToTopVisibility();

backToTopButton?.addEventListener("click", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
    });
});
