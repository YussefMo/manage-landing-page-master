// show hide menu in tablet phone view
document.querySelector('.bars').addEventListener('click',()=> 
{
    document.querySelector('.nav').classList.toggle('change');
    document.querySelector('.bars').classList.toggle('change');
});


// slide script
let slidesContainer = document.querySelector('.slides');
let slideElements = document.querySelectorAll('.slide');

function cloneSlides() 
{
    slideElements.forEach((slide) => 
    {
        let clone = slide.cloneNode(true);
        slidesContainer.appendChild(clone);
    });
}
cloneSlides();

setInterval(() => 
{
    let firstSlide = slidesContainer.querySelector('.slide');
    if (!firstSlide) return;
    let slideWidth = firstSlide.offsetWidth;
    let slidesMoved = Math.abs(parseInt(window.getComputedStyle(slidesContainer).transform.split(',')[4])) || 0;
    if (slidesMoved >= slideWidth) 
    {
    cloneSlides();
    }
}
, 1000);