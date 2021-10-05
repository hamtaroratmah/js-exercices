"use strict";
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';

// This is the entry point to your app : add all relevant import and custom code
import banner from "./img/netflixBanner.png";
import logo from "./img/netflixLogo.png";
import squidGamesAffiche from "./img/squidGamesAffiche.png";

//main and head
const main = document.querySelector("main");
const title = document.querySelector("title");
const netflixLogo = document.createElement("img");
const favicon = document.createElement("link");
//banner
const netflixBanner = document.createElement("img");
const divBanner = document.createElement("div");
//squidGames
const squidGamesBanner = document.createElement("img");
const squidGamesDiv = document.createElement("div");
const squidGamesDescription = document.createElement("p");


title.innerHTML="Netflix";
favicon.rel="shortcut icon";
favicon.type="image/png";
favicon.href=logo;
netflixLogo.src = logo;

main.classList="row";

divBanner.classList="text-center";
netflixBanner.src = banner;
netflixBanner.classList="img-fluid w-50 top-0 start-0 ";

squidGamesDescription.innerHTML="Squid Games est un film sud coréen qui connait un immense succès à sa sortie et qui est en marche pour devenir la série la plus regarder sur notre plateforme !"
squidGamesDescription.classList="squidGamesDescription";
squidGamesBanner.src=squidGamesAffiche;
squidGamesDiv.appendChild(squidGamesBanner);
squidGamesDiv.appendChild(squidGamesDescription);

divBanner.appendChild(netflixBanner);

main.appendChild(netflixBanner);
main.appendChild(squidGamesDiv);
