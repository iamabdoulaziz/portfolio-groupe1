// PAS D'IMPORT ICI (Supprimez la ligne import)

const downloadBtn = document.querySelector('#downloadBtn');

if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        // Animation du bouton au clic
        anime({
            targets: '#downloadBtn',
            scale: [1, 0.9, 1],
            duration: 300,
            easing: 'easeInOutQuad'
        });

        // Logique de téléchargement
        const cvContent = document.querySelector('.cv-wrapper').innerHTML;
        const blob = new Blob([`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>CV Sidi Mohamed</title>
                    <style>
                        body { font-family: sans-serif; margin: 0; padding: 0; }
                        /* On réinjecte un minimum de style pour le fichier HTML téléchargé */
                        .cv-wrapper { display: flex; width: 100%; }
                        .sidebar { width: 35%; background: #3D3D33; color: white; padding: 20px; min-height: 100vh; }
                        .main-content { width: 65%; padding: 20px; }
                        h1 { text-transform: uppercase; }
                        .cv-footer { display: none; } /* On cache le footer dans le fichier téléchargé */
                    </style>
                </head>
                <body>${cvContent}</body>
            </html>
        `], { type: 'text/html' });

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CV_Sidi_Mohamed_Berthe.html';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });
}

// Réécrivez vos animations d'entrée avec "anime" au lieu de "animate"
anime({
    targets: '.cv-wrapper',
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 1000,
    easing: 'easeOutQuart'
});

anime({
    targets: '.sidebar',
    translateX: [-100, 0],
    opacity: [0, 1],
    duration: 800,
    delay: 200,
    easing: 'easeOutExpo'
});

anime({
    targets: '.main-header h1, .job-title',
    translateY: [-30, 0],
    opacity: [0, 1],
    delay: anime.stagger(200, {start: 500}),
    easing: 'easeOutQuad'
});

anime({
    targets: '.skill-list li',
    translateX: [-20, 0],
    opacity: [0, 1],
    delay: anime.stagger(100, {start: 1000}),
    easing: 'easeOutPower2'
});