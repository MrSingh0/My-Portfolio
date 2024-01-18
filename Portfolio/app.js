// var body = documen
var tl = gsap.timeline();

tl.from([".nav h3", ".nav li"], {
    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.2,
});

tl.from(".main", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.2,
});

tl.from("main .pic", {
    x: +100,
    duration: 1,
    opacity: 0,
    stagger: 0.2,
});


tl.from(".first h5",{
    scale:0,
    opacity:0,
});

tl.to(".first h5",{
    y:+30,
    repeat:-1,
    duration:1,
    yoyo:1,
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







