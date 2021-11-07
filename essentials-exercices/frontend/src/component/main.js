//Import classes
import Film from "../domain/Film";
import FilmLibrary from "../domain/FilmsLibrary";
import form from './form';
//Import images
import kurokoImg from "../img/kurokoNoBasket.jpg";
import narutoImg from "../img/naruto.png";

const main = document.createElement("main");

////////////////////////////////////////////////////////////////

const table = document.createElement("table");
const nomColonnes = document.createElement("tr");
const titreFilme = document.createElement("th");
const budget = document.createElement("th");
const titreTexte = document.createElement("p");
const budgetTexte = document.createElement("p");
const dureeTexte = document.createElement("p");
const duree = document.createElement("th");

const kuroko = document.createElement("img");
const kurokoRow = document.createElement("tr");
const kurokoAffiche = document.createElement("td");
const kurokoBudget = document.createElement("td");
const kurokoDuree = document.createElement("td");
const kurokoBudgetTexte = document.createElement("p");
const kurokodureeTexte = document.createElement("p");

const naruto = document.createElement("img");
const narutoRow = document.createElement("tr");
const narutoAffiche = document.createElement("td");
const narutoBudget = document.createElement("td");
const narutoDuree = document.createElement("td");
const narutoBudgetTexte = document.createElement("p");
const narutodureeTexte = document.createElement("p");


kuroko.src = kurokoImg;
naruto.src = narutoImg;
kuroko.classList = "affiches";
naruto.classList = "affiches";

titreTexte.innerHTML = "Titre/Affiche";
titreFilme.appendChild(titreTexte);
budgetTexte.innerHTML = "Budget (en millions)";
budget.appendChild(budgetTexte);
dureeTexte.innerHTML = "Durée (en minutes)";
duree.appendChild(dureeTexte);
nomColonnes.appendChild(titreFilme);
nomColonnes.appendChild(budget);
nomColonnes.appendChild(duree);

kurokoBudgetTexte.innerHTML = "88";
kurokoBudget.appendChild(kurokoBudgetTexte);
kurokodureeTexte.innerHTML = "180";
kurokoDuree.appendChild(kurokodureeTexte);
kurokoAffiche.appendChild(kuroko);
kurokoRow.appendChild(kurokoAffiche);
kurokoRow.appendChild(kurokoBudget);
kurokoRow.appendChild(kurokoDuree);

narutoBudgetTexte.innerHTML = "120";
narutoBudget.appendChild(narutoBudgetTexte);
narutodureeTexte.innerHTML = "200";
narutoDuree.appendChild(narutodureeTexte);
narutoAffiche.appendChild(naruto);
narutoRow.appendChild(narutoAffiche);
narutoRow.appendChild(narutoBudget);
narutoRow.appendChild(narutoDuree);

table.appendChild(nomColonnes);
table.appendChild(kurokoRow);
table.appendChild(narutoRow);

////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////

main.appendChild(table);
main.appendChild(form);
export {main};