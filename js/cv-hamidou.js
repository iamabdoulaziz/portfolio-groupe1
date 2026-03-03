function downloadCV() {

    const link = document.createElement("a");
    link.href = "All CVs/cv-hamidou.pdf"; 
    link.download = "All CVs/cv-hamidou.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

   
    alert("Le fichier est téléchargé avec succès");
}