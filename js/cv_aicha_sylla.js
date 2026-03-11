function AfficherMessage(){

  const message = document.getElementById("message-telechargement");
  
  setTimeout(function(){

    message.textContent = "Le fichier a été téléchargé avec succès.";
    message.classList.add("show");

    setTimeout(function(){
      message.classList.remove("show");
      message.textContent = "";
    },4000);

  },2000);

}