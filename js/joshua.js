function telechargercv()
{const link = document.createElement('a');
link.href = 'All CVs/CV JOSHUA.pdf';
link.download = 'Joshua cv.pdf';

document.body.appendChild(link);
link.click();
document.body.removeChild(link);

alert('Le fichier est téléchargé avec succès !');
}
