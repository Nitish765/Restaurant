let hide=document.querySelector(".wrap-2 nav #hide");
let show=document.querySelector(".wrap-2 nav #show");
let menu=document.querySelector(".wrap-2 nav #menu");

show.addEventListener("click", function(e){
    e.preventDefault();
    show.style.display="none";
    menu.style.display="block";
    hide.style.display="block";
})

hide.addEventListener("click", function(e){
    e.preventDefault();
    show.style.display="block"
    menu.style.display="none";
    hide.style.display="none";
})