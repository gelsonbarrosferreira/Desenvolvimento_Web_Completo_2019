//alert('teste')
/*
//Saber a altura e largura do browser
var altura = window.innerHeight
var largura = window.innerWidth

console.log(altura,largura)
*/

//controlar apartir da acçao do redimensinamento da tela
var altura = 0
var largura = 0
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    //Criando posições randômicas na tela
    //com style.left e style.top
    var posicaoX = Math.floor(Math.random() * largura) - 90 ;
    var posicaoY = Math.floor(Math.random() * altura) - 90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    console.log(posicaoX, posicaoY);

    //criar o elemento html
    var mosquito = document.createElement("img");
    mosquito.src = "../imagens/mosquito.png";
    mosquito.className = tamanhoAleatorio();
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = "absolute";

    document.body.appendChild(mosquito);
    //tamanhoAleatorio();
    //console.log(tamanhoAleatorio());
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);
    //console.log(classe);
    switch (classe) {
        case 0:
            return "mosquito1"

        case 1:
            return "mosquito2"

        case 2:
            return "mosquito3"

        
    }
}