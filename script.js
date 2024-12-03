// show hide menu in tablet phone view
document.querySelector('.bars').addEventListener('click',()=> 
{
    document.querySelector('.nav').classList.toggle('change');
    document.querySelector('.bars').classList.toggle('change');
});

// toggel script
let body= document.body
document.querySelector('.toggle-cont').addEventListener('click',()=>
{
    body.classList.toggle('dark');
    document.querySelector('.circle').classList.toggle('chng');
    document.querySelector('.toggel').classList.toggle('chng');
    let x = document.querySelector('.circle')
    if(x.classList.contains('chng'))
    {
        document.querySelector('.fa-sun').classList.remove('active');
        document.querySelector('.fa-moon').classList.add('active');
    }
    else
    {
        document.querySelector('.fa-sun').classList.add('active');
        document.querySelector('.fa-moon').classList.remove('active');
    }
    if(body.classList.contains('dark'))
    {
        document.querySelector('.white-lo').classList.remove('hide')
        document.querySelector('.dark-lo').classList.add('hide')
    }
    else
    {
        document.querySelector('.white-lo').classList.add('hide')
        document.querySelector('.dark-lo').classList.remove('hide')
    }
})

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
