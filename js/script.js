window.addEventListener("load",()=>{
    setTimeout(()=>{document.querySelector(".hero").classList.add("active");},1000);

})

window.addEventListener("load",()=>{
    setTimeout(()=>{document.querySelector(".our-team").classList.add("active");},1000);

})

const members = document.querySelectorAll(".member");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2 
});

members.forEach(member => {
    observer.observe(member);
});