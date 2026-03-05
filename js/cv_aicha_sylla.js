function generatePDF() {

    const element = document.querySelector(".main-div");

    html2canvas(element, {
        scale: 2   // qualité élevée
    }).then(canvas => {

        const imgData = canvas.toDataURL("image/png");

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF("p", "mm", "a4");

        const pageWidth = 210;
        const pageHeight = 297;

        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        doc.save("CV_Aichata_SYLLA.pdf");

        alert(" Le fichier est téléchargé avec succès");
    });
}