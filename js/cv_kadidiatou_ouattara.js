

function afficherMessage() {

    let message = document.getElementById("message-telechargement");

    message.innerText = "Le fichier a été téléchargé avec succès.";

    setTimeout(function() {
        message.innerText = "";
    }, 4000);
}
 
function retourAccueil() {
    window.location.href = "index.html";
}
