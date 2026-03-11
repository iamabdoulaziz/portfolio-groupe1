
        function downloadCV() {

    const link = document.createElement("a");
    link.href = "all-cvs/CV_ABDOULAYE.pdf"; 
    link.download = "Abdoulaye_Diallo_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

   setTimeout(() => {
       alert("Ton CV a été téléchargé !");
    }, 1000);
   
    
}
const expItems = document.querySelectorAll('.experience-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

expItems.forEach(item => observer.observe(item));
