// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Custom styles

import './stylesheets/main.css'; //HEAD

var titlePage = document.querySelector("title");
titlePage.innerHTML = "Mouvises"; // This is the entry point to your app : add all relevant import and custom code

import { header } from './component/header.js';
import { footer } from './component/footer.js';
import { main } from './component/main.js';
var page = document.getElementById("page");
page.appendChild(header);
page.appendChild(main);
page.appendChild(footer);