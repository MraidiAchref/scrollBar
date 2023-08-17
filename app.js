let indicator= document.querySelector(".scroll-indicator .progress");
let scrollHeight= document.body.scrollHeight - document.body.clientHeight  ;



function scroll(){
    let scrolledTop = document.body.scrollTop;
    let scrolled= (scrolledTop / scrollHeight) * 100; 

    indicator.style.width = scrolled + "%";
}

window.addEventListener("scroll", scroll);

