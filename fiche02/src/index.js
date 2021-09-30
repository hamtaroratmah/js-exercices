// Import Bootstrap CSS
//import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
//import './stylesheets/main.css';

// This is the entry point to your app : add all relevant import and custom code
import pizzaImg from "./img/pizza.jpg";
import pizzaioloImg from "./img/pizzaiolo.jpg";

const main = document.querySelector("main");
const title = document.querySelector("title");
const pizza = document.createElement("img");
const pizzaiolo = document.createElement("img");
const titre = document.createElement("p");

titre.innerHTML="Bienvenu à la tour de Pise Ah!";

title.innerHTML="La tour de Pise Ah!";

pizza.src = pizzaImg;
pizza.style=`width:100%;
    height:500px;`;

pizzaiolo.src = pizzaioloImg;

main.appendChild(titre);
main.appendChild(pizza);
main.appendChild(pizzaiolo);
