function downloadCV() {

    const link = document.createElement("a");
    link.href = "All CVs/"; 
    link.download = "Bakary_SOUKOUNA_CV.pdf";

    document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link);
}