function exibe_camaro(){
    document.getElementById("camaro-amarelo").style.visibility="visible";
    document.getElementById("fusca-azul").style.visibility="hidden";
    document.getElementById("uno").style.visibility="hidden";
}

function exibe_fusca(){
    document.getElementById("fusca-azul").style.visibility="visible"
    document.getElementById("uno").style.visibility="hidden";
    document.getElementById("camaro-amarelo").style.visibility="hidden";
}

function exibe_uno(){
    document.getElementById("fusca-azul").style.visibility="hidden"
    document.getElementById("uno").style.visibility="visible";
    document.getElementById("camaro-amarelo").style.visibility="hidden";
}

function sumir_carro(){
    document.getElementById("fusca-azul").style.visibility="hidden"
    document.getElementById("uno").style.visibility="hidden";
    document.getElementById("camaro-amarelo").style.visibility="hidden";
}