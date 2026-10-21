// Renseigner ici l'URL de réservation lorsque le calendrier des entretiens est prêt.
const bookingUrl = "";

if (bookingUrl) {
  try {
    const url = new URL(bookingUrl);
    if (url.protocol === "https:") {
      document.querySelectorAll(".booking-link").forEach((link) => {
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      });
      const status = document.querySelector(".booking-status");
      if (status) status.textContent = "Le calendrier de réservation s’ouvre dans un nouvel onglet.";
    }
  } catch {
    // Conserver le renvoi vers la section de réservation si l'URL est invalide.
  }
}
