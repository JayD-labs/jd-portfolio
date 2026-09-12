const skillButtons = document.querySelectorAll(".skill-header");

skillButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", !isExpanded);
    });
});