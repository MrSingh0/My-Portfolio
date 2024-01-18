var tl = gsap.timeline();

tl.from(".nav",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.2,
})

tl.from(".pic1",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:0.2,
})

tl.from(".info h1",{
    x:+100,
    duration:1,
    opacity:0,
    stagger:0.2,
})

tl.from(".info .intro",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:0.2,
})

tl.from(".info a",{
    y:+100,
    duration:1,
    opacity:0,
    stagger:0.2,
})

let first = document.querySelector('.first');
let btn = document.querySelector('.mode');
let all = document.querySelectorAll('*');


let isBackgroundImage1 = true;

const imagePath = 'asests/img/images.jpeg';

let backgroundImage1 = `url(${imagePath})`;

btn.addEventListener("change", () => {
    if (isBackgroundImage1) {
        first.style.backgroundImage = backgroundImage1;
        all.forEach(element => {
            element.style.color = "black";
        });
    } else {
        first.style.backgroundImage = 'none'; 
        first.style.backgroundColor = "rgb(55, 54, 54)";
        all.forEach(element => {
            element.style.color = "white";
        });
    }
    
    isBackgroundImage1 = !isBackgroundImage1;
});

var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer", "Full Stack Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    loop: true,
});