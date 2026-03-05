// Animation d'entrée
anime({
    targets: '.cv-wrapper',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 1000,
    easing: 'easeOutQuart'
});

// Animation de la ligne de la timeline
anime({
    targets: '.timeline-line',
    height: ['0%', '100%'],
    duration: 1500,
    delay: 500,
    easing: 'easeInOutQuad'
});

// Animation des points (dots) un par un
anime({
    targets: '.dot',
    scale: [0, 1],
    opacity: [0, 1],
    delay: anime.stagger(200, {start: 1000}),
    easing: 'easeOutElastic(1, .8)'
});

// Bouton Téléchargement
const downloadBtn = document.querySelector('#downloadBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        anime({ targets: '#downloadBtn', scale: [1, 0.9, 1], duration: 300 });
        
        const cvContent = document.querySelector('.cv-wrapper').innerHTML;
        const blob = new Blob([`<html><head><meta charset="UTF-8"><style>${document.querySelector('style')?.innerHTML || ''} body{padding:20px;}</style></head><body>${cvContent}</body></html>`], { type: 'text/html' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CV_Sidi_Mohamed.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}
