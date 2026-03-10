function downloadCV() {

    const link = document.createElement("a");
    link.href = "all-cvs/cv-hamidou.pdf"; 
    link.download = "all-cvs/cv-hamidou.pdf";
    
    link.click();
   
    alert("Le fichier est téléchargé avec succès");
    
}
