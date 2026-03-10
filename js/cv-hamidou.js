function downloadCV() {

    const link = document.createElement("a");
    link.href = "All CVs/cv-hamidou.pdf"; 
    link.download = "All CVs/cv-hamidou.pdf";
    
    link.click();
   
    alert("Le fichier est téléchargé avec succès");
    
}
