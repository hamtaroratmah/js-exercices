"use strict";

const date = new Date();
let playedButton = document.querySelector("#played");
let horloge = setInterval(runTime, 1000);
let paused = false;

let time= date.toLocaleTimeString();
document.getElementById("horloge").innerText = time;

function pause(){
    if(paused){
        paused=false;
        horloge = setInterval(runTime,1000);
        playedButton.textContent = "Pause";
    }else{
        clearInterval(horloge);
        paused=true;
        playedButton.textContent = "Play";
    }
}

function runTime(){
    let date = new Date();
    let time= date.toLocaleTimeString();
    document.getElementById("horloge").innerText = time;
}

playedButton.addEventListener("click", pause);