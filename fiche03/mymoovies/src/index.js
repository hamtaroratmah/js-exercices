"use strict";
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';

// This is the entry point to your app : add all relevant import and custom code
import banner from "./img/netflix/netflixBanner.png";
import logo from "./img/netflix/netflixLogo.png";
import squidGamesAffiche from "./img/squidGames/squidGamesAffiche.png";

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
const emptyDiv = document.createElement("div");
const row = document.createElement("div");


title.innerHTML="Netflix";
favicon.rel="shortcut icon";
favicon.type="image/png";
favicon.href=logo;
netflixLogo.src = logo;

main.classList="row";

divBanner.classList="text-center";
netflixBanner.src = banner;
netflixBanner.classList="mx-auto my-4 d-block w-25";

squidGamesDiv.classList="container";
row.classList="row";
emptyDiv.classList = "col-md-1";
//
squidGamesBanner.src=squidGamesAffiche;
squidGamesBanner.classList = "col-md-6 img-fluid squidGamesBanner";
//
squidGamesDescription.innerHTML="Squid Games est un film sud coréen qui connait un immense succès à sa sortie" +
    "et qui est en marche pour devenir la série la plus regarder sur notre plateforme !";
squidGamesDescription.classList="col-md-2 my-auto squidGamesDescription";
//
row.appendChild(emptyDiv);
row.appendChild(squidGamesBanner);
row.appendChild(squidGamesDescription);
//
squidGamesDiv.appendChild(row);

divBanner.appendChild(netflixBanner);

main.appendChild(netflixBanner);
main.appendChild(squidGamesDiv);