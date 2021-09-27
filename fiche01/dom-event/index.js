const btn = document.querySelector("#button");
const cpt = document.querySelector("#count");
const message = document.querySelector("#message");
let compteur = 0;

function onClickHandlerForBtn(){
    btn.innerText="Click again !";
    compteur++;
    cpt.innerHTML=compteur + " click";
    if(compteur===5){
        message.innerHTML="Bravo, bel échauffement !";
    }else if(compteur===10){
        message.innerHTML="Vous êtes passé maître en l'art du clic !";
    }
}

btn.addEventListener("click", onClickHandlerForBtn);
