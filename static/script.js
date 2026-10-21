// L'URL de réservation est définie dans content/_index.md.
const bookingUrl = document.body.dataset.bookingUrl;

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
      if (status) status.textContent = document.body.dataset.bookingActiveMessage;
    }
  } catch {
    // Conserver le renvoi vers la section de réservation si l'URL est invalide.
  }
}
