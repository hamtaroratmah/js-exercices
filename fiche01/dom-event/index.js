const btn = document.querySelector("#button");
const cpt = document.querySelector("#count");
const message = document.querySelector("#message");
let compteur = 0;

function onClickHandlerForBtn(){
    btn.innerText("Click again !");
    cpt.textContent(compteurs + "click");
    compteur++;
    if(compteur===5){
        message.textContent="Bravo, bel échauffement !";
    }else if(compteur===10){
        message.textContent="Vous êtes passé maître en l'art du clic !";
    }else{
        message.textContent="Beau clique !";
    }
}

btn.addEventListener("click", onClickHandlerForBtn);
