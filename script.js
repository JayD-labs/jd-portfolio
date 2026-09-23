"use strict";

/* =========================
   Theme
   ========================= */

const root = document.documentElement;
const THEME_STORAGE_KEY = "jd-theme";


function isValidTheme(theme) {
    return theme === "light" || theme === "dark";
}


function getInitialTheme() {
    try {
        const savedTheme =
            localStorage.getItem(THEME_STORAGE_KEY);

        if (isValidTheme(savedTheme)) {
            return savedTheme;
        }
    } catch (error) {
        console.warn(
            "Theme konnte nicht aus localStorage gelesen werden.",
            error
        );
    }

    return "dark";
}


function updateThemeControl(theme) {
    const themeToggle =
        document.querySelector("#theme-toggle");

    const themeToggleLabel =
        themeToggle?.querySelector(".theme-toggle-label");

    if (!themeToggle || !themeToggleLabel) {
        return;
    }

    const isDark =
        theme === "dark";

    themeToggle.setAttribute(
        "aria-pressed",
        String(!isDark)
    );

    themeToggleLabel.textContent =
        isDark
            ? "Light Mode"
            : "Dark Mode";
}


function applyTheme(theme, save = false) {
    root.dataset.theme = theme;

    updateThemeControl(theme);

    if (!save) {
        return;
    }

    try {
        localStorage.setItem(
            THEME_STORAGE_KEY,
            theme
        );
    } catch (error) {
        console.warn(
            "Theme konnte nicht gespeichert werden.",
            error
        );
    }
}


/* Gespeichertes Theme direkt anwenden */
applyTheme(getInitialTheme());


/* Header wurde dynamisch geladen */
document.addEventListener(
    "layout:loaded",
    () => {
        updateThemeControl(root.dataset.theme);
    }
);


/* Klicks auch auf später geladene Elemente erkennen */
document.addEventListener(
    "click",
    (event) => {
        if (!(event.target instanceof Element)) {
            return;
        }

        const themeToggle =
            event.target.closest("#theme-toggle");

        if (!themeToggle) {
            return;
        }

        const nextTheme =
            root.dataset.theme === "dark"
                ? "light"
                : "dark";

        applyTheme(nextTheme, true);
    }
);

/* =========================
   Mobile / Tablet Navigation
   ========================= */

const desktopNavigation = window.matchMedia("(min-width: 72rem)");

function closeMobileMenu(restoreFocus = false) {
    const button = document.querySelector("#menu-toggle");
    const links = document.querySelector("#primary-navigation");

    if (!button || !links) return;

    const wasOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Menü öffnen");
    links.classList.remove("is-open");

    if (restoreFocus && wasOpen && !desktopNavigation.matches) {
        button.focus();
    }
}

document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const button = event.target.closest("#menu-toggle");
    const links = document.querySelector("#primary-navigation");

    if (button && links) {
        const opening = button.getAttribute("aria-expanded") !== "true";
        button.setAttribute("aria-expanded", String(opening));
        button.setAttribute("aria-label", opening ? "Menü schließen" : "Menü öffnen");
        links.classList.toggle("is-open", opening);
        return;
    }

    if (event.target.closest("#primary-navigation a") ||
        !event.target.closest(".top-nav")) {
        closeMobileMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu(true);
});

desktopNavigation.addEventListener("change", () => closeMobileMenu());

/* =========================
   Akkordeons
   ========================= */

const accordionTriggers =
    document.querySelectorAll(".accordion-trigger");


accordionTriggers.forEach((trigger) => {

    trigger.addEventListener("click", () => {

        const panelId =
            trigger.getAttribute("aria-controls");

        const panel =
            panelId
                ? document.getElementById(panelId)
                : null;


        if (!panel) {
            return;
        }


        const isExpanded =
            trigger.getAttribute("aria-expanded") === "true";


        trigger.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );


        if (!isExpanded) {

            panel.hidden = false;

            panel.style.maxHeight = "0px";

            requestAnimationFrame(() => {

                panel.classList.add("is-open");

                panel.style.maxHeight =
                    `${panel.scrollHeight}px`;

            });


            panel.addEventListener(
                "transitionend",
                function handleOpen(event) {

                    if (event.propertyName !== "max-height") {
                        return;
                    }

                    if (
                        trigger.getAttribute("aria-expanded")
                        === "true"
                    ) {
                        panel.style.maxHeight = "none";
                    }

                    panel.removeEventListener(
                        "transitionend",
                        handleOpen
                    );

                }
            );

        } else {

            panel.style.maxHeight =
                `${panel.scrollHeight}px`;

            requestAnimationFrame(() => {

                panel.classList.remove("is-open");

                panel.style.maxHeight = "0px";

            });


            panel.addEventListener(
                "transitionend",
                function handleClose(event) {

                    if (event.propertyName !== "max-height") {
                        return;
                    }

                    if (
                        trigger.getAttribute("aria-expanded")
                        === "false"
                    ) {
                        panel.hidden = true;
                    }

                    panel.removeEventListener(
                        "transitionend",
                        handleClose
                    );

                }
            );

        }

    });

});

/* =========================
   Zurück zum Seitenanfang
   ========================= */

const backToTopButton = document.querySelector("#back-to-top");

if (backToTopButton) {
    backToTopButton.removeAttribute("hidden");
}


function updateBackToTopVisibility() {

    if (!backToTopButton) {
        return;
    }


    const isVisible =
        window.scrollY >= 500;


    backToTopButton.classList.toggle(
        "is-visible",
        isVisible
    );


    backToTopButton.setAttribute(
        "aria-hidden",
        String(!isVisible)
    );

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

/* =========================
   Scroll Reveal
   ========================= */

const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealElements =
    document.querySelectorAll(".hero, .content-section");

if (!reduceMotion && "IntersectionObserver" in window) {

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

}


/* =========================
   Aktive Side Navigation
   ========================= */

const sideNavLinks =
    document.querySelectorAll(
        '.side-nav a[href^="#"]'
    );


const observedSections =
    Array.from(sideNavLinks)
        .map((link) => {

            const targetId =
                link.getAttribute("href");

            return targetId
                ? document.querySelector(targetId)
                : null;
        })
        .filter(Boolean);


function setActiveNavigation(id) {

    sideNavLinks.forEach((link) => {

        const isActive =
            link.getAttribute("href") === `#${id}`;

        link.classList.toggle(
            "is-active",
            isActive
        );

    });

}


if ("IntersectionObserver" in window) {

    const navigationObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    setActiveNavigation(
                        entry.target.id
                    );

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    observedSections.forEach((section) => {
        navigationObserver.observe(section);
    });

}


/* =========================
   Interactive Card Glow
   ========================= */

const interactiveCards =
    document.querySelectorAll(".card");

const hasFinePointer =
    window.matchMedia("(pointer: fine)").matches;


if (hasFinePointer) {

    interactiveCards.forEach((card) => {

        card.addEventListener("pointermove", (event) => {

            const bounds =
                card.getBoundingClientRect();

            const mouseX =
                event.clientX - bounds.left;

            const mouseY =
                event.clientY - bounds.top;

            card.style.setProperty(
                "--mouse-x",
                `${mouseX}px`
            );

            card.style.setProperty(
                "--mouse-y",
                `${mouseY}px`
            );

        });


        card.addEventListener("pointerleave", () => {

            card.style.setProperty(
                "--mouse-x",
                "50%"
            );

            card.style.setProperty(
                "--mouse-y",
                "50%"
            );

        });

    });

}
