"use strict";

async function loadComponent(selector, path) {
  const target = document.querySelector(selector);

  if (!target) {
    return;
  }

  try {
    const response = await fetch(path, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    target.innerHTML = await response.text();
  } catch (error) {
    console.error(`Komponente konnte nicht geladen werden: ${path}`, error);
  }
}

async function loadLayout() {
  await Promise.all([
    loadComponent("#site-header", "/components/header.html"),
    loadComponent("#site-footer", "/components/footer.html"),
  ]);

  document.dispatchEvent(new CustomEvent("layout:loaded"));
}

loadLayout();
