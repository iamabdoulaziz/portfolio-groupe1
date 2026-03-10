function downloadCv() {
  // Crée un lien temporaire
  const a = document.createElement('a');
  a.href = './All CVs/cv-coulibaly.pdf';
  a.download = 'CV-Bakary-Coulibaly.pdf';
  a.style.display = 'none';
  
  // Ajoute au DOM, clique, puis supprime
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  // Affiche une notification
  setTimeout(() => {
    notificationMessage("CV téléchargé avec succès !");
  }, 500);
}

function notificationMessage(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
