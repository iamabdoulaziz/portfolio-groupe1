// Animation au chargement du CV

window.addEventListener("load", () => {

const container = document.querySelector(".cv-container");

container.style.opacity = "0";
container.style.transform = "translateY(40px)";

setTimeout(() => {
container.style.transition = "all 0.8s ease";
container.style.opacity = "1";
container.style.transform = "translateY(0)";
},200);

});



// Animation Sidebar

window.addEventListener("load", () => {

const sidebar = document.querySelector(".sidebar");

sidebar.style.opacity = "0";
sidebar.style.transform = "translateX(-50px)";

setTimeout(() => {
sidebar.style.transition = "all 0.8s ease";
sidebar.style.opacity = "1";
sidebar.style.transform = "translateX(0)";
},400);

});



// Animation des sections au scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(40px)";
section.style.transition = "all 0.7s ease";

observer.observe(section);

});



// Animation bouton télécharger

const downloadBtn = document.querySelector(".b-download");

downloadBtn.addEventListener("mouseenter", () => {

downloadBtn.style.transform = "scale(1.08)";

});

downloadBtn.addEventListener("mouseleave", () => {

downloadBtn.style.transform = "scale(1)";

});