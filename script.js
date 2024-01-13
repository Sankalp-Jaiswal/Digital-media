'use strict';

const addEventOnElement = function(elements, eventType,callback){
    for(let i= 0; i<elements.length; i++ ){
        elements[i].addEventListener(eventType,callback);
    }
}

const navbar= document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[ data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const togglenavbar =function(){
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement([navToggleBtn,overlay], "click", togglenavbar)







const parallexElements = document.querySelector("[data-parallax]");

window.addEventListener("mousemove", event=>{
    for(let i=0; i<parallexElements.length; i++){
        const movementX = (event.clientX/ window.innerWidth)*Number(parallexElements[i].dataset.parallaxSpeed);

        const movementY = (event.clientY/ window.innerHeight)*Number(parallexElements[i].dataset.parallaxSpeed);

        parallexElements[i].animate({
            transform: `translate(${movementX}), ${movementY}`

        },{duration: 500, fill: "forwards"});
    }
} )