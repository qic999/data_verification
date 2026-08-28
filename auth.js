(() => {
  "use strict";

  const expectedDigest =
    "4ad5761013cb5f2d16eb60b274d06f904fe20cc9a2489b52bf0c46cf987a05f2";
  const sessionKey = "data-verification-auth-v1";
  const gate = document.querySelector("#auth-gate");
  const form = document.querySelector("#auth-form");
  const input = document.querySelector("#auth-password");
  const error = document.querySelector("#auth-error");

  function unlock() {
    document.documentElement.classList.remove("auth-locked");
    gate.hidden = true;
  }

  try {
    if (sessionStorage.getItem(sessionKey) === expectedDigest) {
      unlock();
      return;
    }
  } catch (_error) {
    // Authentication still works when browser storage is unavailable.
  }

  gate.hidden = false;
  input.focus();

  async function sha256(value) {
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), (byte) =>
      byte.toString(16).padStart(2, "0"),
    ).join("");
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    form.classList.remove("auth-failed");
    error.textContent = "";
    const submittedDigest = await sha256(input.value);
    input.value = "";
    if (submittedDigest === expectedDigest) {
      try {
        sessionStorage.setItem(sessionKey, expectedDigest);
      } catch (_error) {
        // Keep the current page unlocked even if storage is blocked.
      }
      unlock();
      return;
    }
    error.textContent = "Incorrect password. Please try again.";
    form.classList.add("auth-failed");
    input.focus();
  });
})();
