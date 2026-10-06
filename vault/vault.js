"use strict";

const vaultStatus = document.querySelector("#vault-status");
const vaultStatusTitle = document.querySelector("#vault-status-title");
const vaultStatusMessage = document.querySelector("#vault-status-message");
const vaultRetryButton = document.querySelector("#vault-retry");

const VAULT_URL = "https://vault.jd-schuldt.de";
const VAULT_HEALTH_URL = `${VAULT_URL}/healthz`;

function setVaultState(state) {
  vaultStatus.classList.remove("is-checking", "is-online", "is-offline");

  if (state === "checking") {
    vaultStatus.classList.add("is-checking");

    vaultStatusTitle.textContent = "Verbindung wird geprüft …";
    vaultStatusMessage.textContent =
      "Der private Vault wird auf Erreichbarkeit geprüft.";

    vaultRetryButton.disabled = true;
    vaultRetryButton.textContent = "Verbindung wird geprüft …";
  }

  if (state === "online") {
    vaultStatus.classList.add("is-online");

    vaultStatusTitle.textContent = "Vault erreichbar";
    vaultStatusMessage.textContent =
      "Die private Verbindung zum Vault ist verfügbar.";

    vaultRetryButton.disabled = false;
    vaultRetryButton.textContent = "Vaultwarden öffnen";
  }

  if (state === "offline") {
    vaultStatus.classList.add("is-offline");

    vaultStatusTitle.textContent = "Vault nicht erreichbar";
    vaultStatusMessage.textContent =
      "Stelle sicher, dass du mit meinem privaten VPN verbunden bist.";

    vaultRetryButton.disabled = false;
    vaultRetryButton.textContent = "Verbindung erneut prüfen";
  }
}

async function checkVaultConnection() {
  setVaultState("checking");

  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 4000);

  try {
    const response = await fetch(VAULT_HEALTH_URL, {
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    setVaultState("online");
  } catch (error) {
    setVaultState("offline");
  } finally {
    clearTimeout(timeout);
  }
}

vaultRetryButton.addEventListener("click", () => {
  if (vaultStatus.classList.contains("is-online")) {
    window.location.href = VAULT_URL;
    return;
  }

  checkVaultConnection();
});

checkVaultConnection();
