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
var vida = 1;
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search 
nivel = nivel.replace('?', '')

if (nivel === "normal") {
    //15000
    criaMosquitoTempo = 1500;
} else if (nivel === "dificil") {
    //1000
    criaMosquitoTempo = 1000;
} else if (nivel === "chucknorris") {
    //750
    criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    //console.log(altura, largura);
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval( function(){
    tempo -= 1;
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criarMosca);
        window.location.href = "vitoria.html";
    }else{
        document.getElementById("cronometro").innerHTML = tempo;
    }
    
    
}, 1000)

function posicaoRandomica(){

    //remover o msquito anterior (caso exista)
    if (document.getElementById("mosquito")){
        document.getElementById("mosquito").remove();

        if(vida > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById("v" + vida).src =
                "../imagens/coracao_vazio.png";
            vida++;
        }
        
    }
        


    //Criando posições randômicas na tela
    //com style.left e style.top
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    //console.log(posicaoX, posicaoY);

    //criar o elemento html
    var mosquito = document.createElement("img");
    mosquito.src = "../imagens/mosquito.png";
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = "absolute";
    mosquito.id = 'mosquito'
    //remover com o clique no mosquito
    mosquito.onclick = function(){
        this.remove()

    }

    document.body.appendChild(mosquito);
    //tamanhoAleatorio();
    //console.log(tamanhoAleatorio());
    console.log(ladoAleatorio());
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

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    //console.log(classe);
    switch (classe) {
        case 0:
            return "ladoA";

        case 1:
            return "ladoB";
    }
}