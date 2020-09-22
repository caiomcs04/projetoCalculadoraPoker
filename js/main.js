let escolhidaMao1;
let escolhidaMao2;
let escolhidaMesa1; //d
let escolhidaMesa2;
let escolhidaMesa3;
let escolhidaMesa4;
let escolhidaMesa5;
let ultimaEscolhidaMao1;
let ultimaEscolhidaMao2 = "nada";
let ultimaEscolhidaMesa1 = "nada";
let ultimaEscolhidaMesa2 = "nada";
let ultimaEscolhidaMesa3 = "nada";
let ultimaEscolhidaMesa4 = "nada";
let ultimaEscolhidaMesa5 = "nada";

//FIM DAS FUNÇÕES DO ARQUIVO (subir&RecolherCartas.js);

function posicionarCarta(cartas, imagem, cartaSelecionada) {
    const cartaMao1 = document.getElementById("cartaMao1");
    const cartaMao2 = document.getElementById("cartaMao2");

    const mesa1 = document.getElementById("cartaMesa1")
    const mesa2 = document.getElementById("cartaMesa2")
    const mesa3 = document.getElementById("cartaMesa3")
    const mesa4 = document.getElementById("cartaMesa4")
    const mesa5 = document.getElementById("cartaMesa5")

    let cartaEscolhida = document.getElementById(cartas)

    //ESCOLHA DAS CARTAS MÃO E MESA
    function escolhasDeCartas() {
        //ESCOLHAS DA PRIMEIRA CARTA DA MAO
        if (cartaMao1.style.boxShadow != "none") {
            cartaMao1.style.transition = "0s";
            mesa1.style.boxShadow = "none";
            mesa2.style.boxShadow = "none";
            mesa3.style.boxShadow = "none";
            mesa4.style.boxShadow = "none";
            mesa5.style.boxShadow = "none";
            cartaMao2.style.transition = "1s";

            escolhidaMao1 = cartaSelecionada;
            if (cartaMao1.style.backgroundImage == "") {
                ultimaEscolhidaMao1 = cartaEscolhida
            }

            cartaMao1.style.backgroundImage = imagem;

        }
        //ESCOLHAS DA SEGUNDA CARTA DA MAO
        if (cartaMao2.style.boxShadow != "none") {
            cartaMao1.style.transition = "1s"
            cartaMao2.style.transition = "0s"
            mesa1.style.boxShadow = "none";
            mesa2.style.boxShadow = "none";
            mesa3.style.boxShadow = "none";
            mesa4.style.boxShadow = "none";
            mesa5.style.boxShadow = "none";

            escolhidaMao2 = cartaSelecionada;
            if (cartaMao2.style.backgroundImage == 'url("../img/blue_back.png")') {
                ultimaEscolhidaMao2 = cartaEscolhida;
            }

            cartaMao2.style.backgroundImage = imagem;

        }
        //ESCOLHAS DA PRIMEIRA CARTA DA MESA
        if (mesa1.style.boxShadow != "none") {
            mesa1.style.transition = "0s"
            mesa2.style.transition = "0.5s"
            mesa3.style.transition = "0.5s"
            mesa4.style.transition = "0.5s"
            mesa5.style.transition = "0.5s"

            cartaMao1.style.boxShadow = "none";
            cartaMao2.style.boxShadow = "none";

            mesa2.style.boxShadow = "none";
            mesa3.style.boxShadow = "none";
            mesa4.style.boxShadow = "none";
            mesa5.style.boxShadow = "none";

            escolhidaMesa1 = cartaSelecionada;
            if (cartaMesa1.style.backgroundImage == "" || cartaMesa1.style.backgroundImage == 'url("../img/red_back.png")') {
                ultimaEscolhidaMesa1 = cartaEscolhida
            }

            mesa1.style.backgroundImage = imagem;


        }
        //ESCOLHAS DA SEGUNDA CARTA DA MESA
        if (mesa2.style.boxShadow != "none") {
            mesa2.style.transition = "0s"
            mesa1.style.transition = "0.5s"
            mesa3.style.transition = "0.5s"
            mesa4.style.transition = "0.5s"
            mesa5.style.transition = "0.5s"
            cartaMao1.style.boxShadow = "none";
            cartaMao2.style.boxShadow = "none";
            mesa1.style.boxShadow = "none";
            mesa3.style.boxShadow = "none";
            mesa4.style.boxShadow = "none";
            mesa5.style.boxShadow = "none";

            escolhidaMesa2 = cartaSelecionada;

            if (cartaMesa2.style.backgroundImage == "" || cartaMesa2.style.backgroundImage == 'url("../img/red_back.png")') {
                ultimaEscolhidaMesa2 = cartaEscolhida;
            }

            mesa2.style.backgroundImage = imagem;

        }
        //ESCOLHAS DA TERCEIRA CARTA DA MESA
        if (mesa3.style.boxShadow != "none") {
            mesa3.style.transition = "0s"
            mesa2.style.transition = "0.5s"
            mesa1.style.transition = "0.5s"
            mesa4.style.transition = "0.5s"
            mesa5.style.transition = "0.5s"
            cartaMao1.style.boxShadow = "none";
            cartaMao2.style.boxShadow = "none";
            mesa2.style.boxShadow = "none";
            mesa1.style.boxShadow = "none";
            mesa4.style.boxShadow = "none";
            mesa5.style.boxShadow = "none";

            escolhidaMesa3 = cartaSelecionada;
            if (cartaMesa3.style.backgroundImage == "" || cartaMesa3.style.backgroundImage == 'url("../img/red_back.png")') {
                ultimaEscolhidaMesa3 = cartaEscolhida
            }

            mesa3.style.backgroundImage = imagem;
        }
        //ESCOLHAS DA QUARTA CARTA DA MESA
        if (mesa4.style.boxShadow != "none") {
            mesa4.style.transition = "0s"
            mesa2.style.transition = "0.5s"
            mesa3.style.transition = "0.5s"
            mesa1.style.transition = "0.5s"
            mesa5.style.transition = "0.5s"
            cartaMao1.style.boxShadow = "none";
            cartaMao2.style.boxShadow = "none";
            mesa2.style.boxShadow = "none";
            mesa3.style.boxShadow = "none";
            mesa1.style.boxShadow = "none";
            mesa5.style.boxShadow = "none";

            escolhidaMesa4 = cartaSelecionada;
            if (cartaMesa4.style.backgroundImage == "" || cartaMesa4.style.backgroundImage == 'url("../img/red_back.png")') {
                ultimaEscolhidaMesa4 = cartaEscolhida
            }

            mesa4.style.backgroundImage = imagem;

        }
        //ESCOLHAS DA QUINTA CARTA DA MESA
        if (mesa5.style.boxShadow != "none") {
            mesa5.style.transition = "0s"
            mesa2.style.transition = "0.5s"
            mesa3.style.transition = "0.5s"
            mesa4.style.transition = "0.5s"
            mesa1.style.transition = "0.5s"
            cartaMao1.style.boxShadow = "none";
            cartaMao2.style.boxShadow = "none";
            mesa2.style.boxShadow = "none";
            mesa3.style.boxShadow = "none";
            mesa4.style.boxShadow = "none";
            mesa1.style.boxShadow = "none";

            escolhidaMesa5 = cartaSelecionada;
            if (cartaMesa5.style.backgroundImage == "" || cartaMesa5.style.backgroundImage == 'url("../img/red_back.png")') {
                ultimaEscolhidaMesa5 = cartaEscolhida
            }

            mesa5.style.backgroundImage = imagem;

        }
    }
    escolhasDeCartas();
    //FIM DE ESCOLHA DAS CARTAS MÃO E MESA

    //INIBIDOR DE SELECIONAR A MESMA CARTA
    function inibidorDeEscolha() {
        if (cartaMao1.style.backgroundImage == cartaMao2.style.backgroundImage || cartaMao1.style.backgroundImage == mesa1.style.backgroundImage || cartaMao1.style.backgroundImage == mesa2.style.backgroundImage || cartaMao1.style.backgroundImage == mesa3.style.backgroundImage || cartaMao1.style.backgroundImage == mesa4.style.backgroundImage || cartaMao1.style.backgroundImage == mesa5.style.backgroundImage) {
            if (cartaMao1.style.boxShadow == "none") {
                cartaMao1.style.backgroundImage = "url(../img/blue_back.png)";
                cartaMao1.style.transition = "0s";
            }
        }

        if (cartaMao2.style.backgroundImage == cartaMao1.style.backgroundImage || cartaMao2.style.backgroundImage == mesa1.style.backgroundImage || cartaMao2.style.backgroundImage == mesa2.style.backgroundImage || cartaMao2.style.backgroundImage == mesa3.style.backgroundImage || cartaMao2.style.backgroundImage == mesa4.style.backgroundImage || cartaMao2.style.backgroundImage == mesa5.style.backgroundImage) {
            if (cartaMao2.style.boxShadow == "none") {
                cartaMao2.style.backgroundImage = "url(../img/blue_back.png)";
                cartaMao2.style.transition = "0s";
            }
        }
        if (mesa1.style.backgroundImage == cartaMao2.style.backgroundImage || mesa1.style.backgroundImage == cartaMao1.style.backgroundImage || mesa1.style.backgroundImage == mesa2.style.backgroundImage || mesa1.style.backgroundImage == mesa3.style.backgroundImage || mesa1.style.backgroundImage == mesa4.style.backgroundImage || mesa1.style.backgroundImage == mesa5.style.backgroundImage) {
            if (mesa1.style.boxShadow == "none") {
                mesa1.style.backgroundImage = "url(../img/red_back.png)";
                mesa1.style.transition = "0s";
            }
        }
        if (mesa2.style.backgroundImage == cartaMao2.style.backgroundImage || mesa2.style.backgroundImage == mesa1.style.backgroundImage || mesa2.style.backgroundImage == cartaMao1.style.backgroundImage || mesa2.style.backgroundImage == mesa3.style.backgroundImage || mesa2.style.backgroundImage == mesa4.style.backgroundImage || mesa2.style.backgroundImage == mesa5.style.backgroundImage) {
            if (mesa2.style.boxShadow == "none") {
                mesa2.style.backgroundImage = "url(../img/red_back.png)";
                mesa2.style.transition = "0s";
            }
        }
        if (mesa3.style.backgroundImage == cartaMao2.style.backgroundImage || mesa3.style.backgroundImage == mesa1.style.backgroundImage || mesa3.style.backgroundImage == mesa2.style.backgroundImage || cartaMao1.style.backgroundImage == mesa3.style.backgroundImage || mesa3.style.backgroundImage == mesa4.style.backgroundImage || mesa3.style.backgroundImage == mesa5.style.backgroundImage) {
            if (mesa3.style.boxShadow == "none") {
                mesa3.style.backgroundImage = "url(../img/red_back.png)";
                mesa3.style.transition = "0s";
            }
        }
        if (mesa4.style.backgroundImage == cartaMao2.style.backgroundImage || mesa4.style.backgroundImage == mesa1.style.backgroundImage || mesa4.style.backgroundImage == mesa2.style.backgroundImage || mesa4.style.backgroundImage == mesa3.style.backgroundImage || mesa4.style.backgroundImage == cartaMao1.style.backgroundImage || mesa4.style.backgroundImage == mesa5.style.backgroundImage) {
            if (mesa4.style.boxShadow == "none") {
                mesa4.style.backgroundImage = "url(../img/red_back.png)";
                mesa4.style.transition = "0s";
            }
        }
        if (mesa5.style.backgroundImage == cartaMao2.style.backgroundImage || mesa5.style.backgroundImage == mesa1.style.backgroundImage || mesa5.style.backgroundImage == mesa2.style.backgroundImage || mesa5.style.backgroundImage == mesa3.style.backgroundImage || mesa5.style.backgroundImage == mesa4.style.backgroundImage || mesa5.style.backgroundImage == cartaMao1.style.backgroundImage) {
            if (mesa5.style.boxShadow == "none") {
                mesa5.style.backgroundImage = "url(../img/red_back.png)";
                mesa5.style.transition = "0s";
            }
        }
    }
    inibidorDeEscolha();
    //FIM*** INIBIDOR DE SELECIONAR A MESMA CARTA

    //ESTILO PARA MOSTRAR A CARTA QUE JA FOI SELECIONADA
    function estilhoCartaEscolhida() {
        if (escolhidaMao1 == cartaSelecionada) {
            cartaEscolhida.style.opacity = "60%"
            if (ultimaEscolhidaMao1 != "nada") {
                if (ultimaEscolhidaMao1.id != escolhidaMao1) {
                    ultimaEscolhidaMao1.style.opacity = "100%"
                    ultimaEscolhidaMao1 = cartaEscolhida
                }
            }
        }

        if (escolhidaMao2 == cartaSelecionada) {
            cartaEscolhida.style.opacity = "60%"
        }
        if (ultimaEscolhidaMao2 != "nada") {
            if (ultimaEscolhidaMao2.id != escolhidaMao2) {
                ultimaEscolhidaMao2.style.opacity = "100%"
                ultimaEscolhidaMao2 = cartaEscolhida
            }
        }

        if (escolhidaMesa1 == cartaSelecionada) {
            cartaEscolhida.style.opacity = "60%"
        }
        if (ultimaEscolhidaMesa1 != "nada") {
            if (ultimaEscolhidaMesa1.id != escolhidaMesa1) {
                ultimaEscolhidaMesa1.style.opacity = "100%"
                ultimaEscolhidaMesa1 = cartaEscolhida
            }
        }

        if (escolhidaMesa2 == cartaSelecionada) {
            cartaEscolhida.style.opacity = "60%"
        }
        if (ultimaEscolhidaMesa2 != "nada") {
            if (ultimaEscolhidaMesa2.id != escolhidaMesa2) {
                ultimaEscolhidaMesa2.style.opacity = "100%"
                ultimaEscolhidaMesa2 = cartaEscolhida
            }
        }

        if (escolhidaMesa3 == cartaSelecionada) {
            cartaEscolhida.style.opacity = "60%"
        }
        if (ultimaEscolhidaMesa3 != "nada") {
            if (ultimaEscolhidaMesa3.id != escolhidaMesa3) {
                ultimaEscolhidaMesa3.style.opacity = "100%"
                ultimaEscolhidaMesa3 = cartaEscolhida
            }
        }

        if (escolhidaMesa4 == cartaSelecionada) {
            cartaEscolhida.style.opacity = "60%"
        }
        if (ultimaEscolhidaMesa2 != "nada") {
            if (ultimaEscolhidaMesa4.id != escolhidaMesa4) {
                ultimaEscolhidaMesa4.style.opacity = "100%"
                ultimaEscolhidaMesa4 = cartaEscolhida
            }
        }

        if (escolhidaMesa5 == cartaSelecionada) {
            cartaEscolhida.style.opacity = "60%"
        }
        if (ultimaEscolhidaMesa5 != "nada") {
            if (ultimaEscolhidaMesa5.id != escolhidaMesa5) {
                ultimaEscolhidaMesa5.style.opacity = "100%"
                ultimaEscolhidaMesa5 = cartaEscolhida
            }
        }

    }
    estilhoCartaEscolhida();

    //FIM*** ESTILO PARA MOSTRAR A CARTA QUE JA FOI SELECIONADA


    //TRANSIÇÃO DE CARTA ESCOLHIDA PÓS ESCOLHA DA PRIMEIRA CARTA
    function transicaoDeCarta() {
        if (cartaMao1.style.boxShadow != "none") {
            cartaMao2.style.border = "solid 2px yellow"
            cartaMao2.style.boxShadow = "0px 0px 15px yellow"
            cartaMao2.style.borderRadius = "7px"

            cartaMao1.style.border = "0px"
            cartaMao1.style.borderRadius = "0px"
            cartaMao1.style.boxShadow = "none"

            mesa5.style.border = "0px"
            mesa5.style.boxShadow = "none"

        } else if (cartaMao2.style.boxShadow != "none") {
            cartaMao2.style.border = "solid 2px yellow"
            cartaMao2.style.boxShadow = "0px 0px 15px yellow"
            cartaMao2.style.borderRadius = "7px"

            cartaMao1.style.border = "0px"
            cartaMao1.style.borderRadius = "0px"
            cartaMao1.style.boxShadow = "none"

        } else if (mesa1.style.boxShadow != "none") {
            mesa2.style.border = "solid 2px blue"
            mesa2.style.boxShadow = "0px 0px 15px blue"
            mesa2.style.borderRadius = "7px"

            cartaMao2.style.boxShadow = "none"
            cartaMao1.style.boxShadow = "none"

            mesa1.style.border = "0px"
            mesa1.style.boxShadow = "none"

            mesa3.style.border = "0px"
            mesa3.style.boxShadow = "none"

            mesa4.style.border = "0px"
            mesa4.style.boxShadow = "none"

            mesa5.style.border = "0px"
            mesa5.style.boxShadow = "none"


        } else if (mesa2.style.boxShadow != "none") {
            mesa3.style.border = "solid 2px blue"
            mesa3.style.boxShadow = "0px 0px 15px blue"
            mesa3.style.borderRadius = "7px"

            cartaMao2.style.boxShadow = "none"
            cartaMao1.style.boxShadow = "none"

            mesa1.style.border = "0px"
            mesa1.style.boxShadow = "none"

            mesa2.style.border = "0px"
            mesa2.style.boxShadow = "none"

            mesa4.style.border = "0px"
            mesa4.style.boxShadow = "none"

            mesa5.style.border = "0px"
            mesa5.style.boxShadow = "none"

        } else if (mesa3.style.boxShadow != "none") {
            mesa4.style.border = "solid 2px blue"
            mesa4.style.boxShadow = "0px 0px 15px blue"
            mesa4.style.borderRadius = "7px"

            cartaMao2.style.boxShadow = "none"
            cartaMao1.style.boxShadow = "none"

            mesa1.style.border = "0px"
            mesa1.style.boxShadow = "none"

            mesa2.style.border = "0px"
            mesa2.style.boxShadow = "none"

            mesa3.style.border = "0px"
            mesa3.style.boxShadow = "none"

            mesa5.style.border = "0px"
            mesa5.style.boxShadow = "none"

        } else if (mesa4.style.boxShadow = "none") {
            mesa5.style.border = "solid 2px blue"
            mesa5.style.boxShadow = "0px 0px 15px blue"
            mesa5.style.borderRadius = "7px"

            cartaMao2.style.boxShadow = "none"
            cartaMao1.style.boxShadow = "none"

            mesa1.style.border = "0px"
            mesa1.style.boxShadow = "none"

            mesa3.style.border = "0px"
            mesa3.style.boxShadow = "none"

            mesa2.style.border = "0px"
            mesa2.style.boxShadow = "none"

            mesa4.style.border = "0px"
            mesa4.style.boxShadow = "none"

        } else if (mesa5.style.boxShadow = "none") {
            mesa5.style.border = "solid 2px blue"
            mesa5.style.boxShadow = "0px 0px 15px blue"
            mesa5.style.borderRadius = "7px"

            cartaMao2.style.boxShadow = "none"
            cartaMao1.style.boxShadow = "none"

            mesa1.style.border = "0px"
            mesa1.style.boxShadow = "none"

            mesa3.style.border = "0px"
            mesa3.style.boxShadow = "none"

            mesa2.style.border = "0px"
            mesa2.style.boxShadow = "none"

            mesa4.style.border = "0px"
            mesa4.style.boxShadow = "none"

        }
    }
    transicaoDeCarta();
    //FIM*** TRANSIÇÃO DE CARTA ESCOLHIDA PÓS ESCOLHA DA PRIMEIRA CARTA
}