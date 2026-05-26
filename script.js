// TYPING EFFECT

const typing =
document.querySelector(".typing");

const words = [
"Frontend Developer",
"Web Designer",
"UI/UX Enthusiast",
"Creative Programmer"
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect(){

if(charIndex < words[wordIndex].length){

typing.textContent +=
words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}else{

setTimeout(eraseEffect,1500);
}
}

function eraseEffect(){

if(charIndex > 0){

typing.textContent =
words[wordIndex].substring(
0,
charIndex-1
);

charIndex--;

setTimeout(eraseEffect,50);

}else{

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;
}

setTimeout(typeEffect,300);
}
}

typeEffect();


// SCROLL REVEAL

window.addEventListener(
"scroll",
reveal
);

function reveal(){

const reveals =
document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

const windowHeight =
window.innerHeight;

const revealTop =
reveals[i]
.getBoundingClientRect().top;

const revealPoint = 100;

if(revealTop <
windowHeight - revealPoint){

reveals[i]
.classList.add("active");
}
}
}


// DARK MODE

const toggle =
document.getElementById(
"theme-toggle"
);

toggle.onclick = ()=>{

document.body.classList.toggle(
"light-mode"
);
};