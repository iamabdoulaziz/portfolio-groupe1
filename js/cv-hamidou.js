function downloadCV() {

    const link = document.createElement("a");
    link.href = "cv-hamidou.pdf"; 
    link.download = "CV-Hamidou-Koita.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Message succès
    alert("Le fichier est téléchargé avec succès");
}