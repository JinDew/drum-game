var numdrum = document.querySelectorAll("button").length;
/*
var audiopath = [];
audiopath[0]="sounds/tom-1.mp3";
audiopath[1]="sounds/tom-2.mp3";
audiopath[2]="sounds/tom-3.mp3";
audiopath[3]="sounds/tom-4.mp3";
audiopath[4]="sounds/crash.mp3";
audiopath[5]="sounds/kick-bass.mp3";
audiopath[6]="sounds/snare.mp3";
*/
for (var i=0;i<numdrum;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var pressk = this.innerHTML;
        makeSound(pressk);
        animateButton(pressk);
    });
}

document.addEventListener("keydown",function(event) {
    var kdown = event.key;
    makeSound(kdown);
    animateButton(kdown);
});



function makeSound(soundLetter){
    switch (soundLetter){
        case "w":
            var audiw = new Audio("sounds/tom-1.mp3");
            audiw.play();
            break;
        case "a":
            var audia = new Audio("sounds/tom-2.mp3");
            audia.play();
            break;
        case "s":
            var audis = new Audio("sounds/tom-3.mp3");
            audis.play();
            break;
        case "d":
            var audid = new Audio("sounds/tom-4.mp3");
            audid.play();
            break;
        case "j":
            var audij = new Audio("sounds/crash.mp3");
            audij.play();
            break;
        case "k":
            var audik = new Audio("sounds/kick-bass.mp3");
            audik.play();
            break;
        case "l":
            var audil = new Audio("sounds/snare.mp3");
            audil.play();
            break;
        default: break;
    }}

function animateButton (butLet){
    document.querySelector("."+butLet).classList.add("pressed");
    setTimeout (function(){
    document.querySelector("."+butLet).classList.remove("pressed");
    },900);
}