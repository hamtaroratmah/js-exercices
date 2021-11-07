
import playImg from "../img/play.svg";

const title = document.createElement("p");
const header = document.createElement("header");

const play = document.createElement("img");
const divPlay = document.createElement("div");

divPlay.id = "playDiv";
play.src = playImg;

play.id = "playImg";
divPlay.appendChild(play);




title.innerHTML ="Mouvises";
title.id = "headerTitle";
//

header.appendChild(divPlay);
header.appendChild(title);
export {header};