let valorCarta = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let cartaEscolhidaMao1 = 14;
let cartaEscolhidaMao2 = 15;
let cartaEscolhidaMesa1 = 16;
let cartaEscolhidaMesa2 = 17;
let cartaEscolhidaMesa3 = 18;
let cartaEscolhidaMesa4 = 19;
let cartaEscolhidaMesa5 = 20;

function subirCartasMao(cartas) {
    var boxTodasCartas = document.getElementById("todasCartas");
    var boxCartasMao = document.getElementById("cartaMao");
    var botao = document.getElementById("botaoRecolher");
    var cartaMao1 = document.getElementById("cartaMao1");
    var cartaMao2 = document.getElementById("cartaMao2");
    var botaoRecomecar = document.getElementById("botaoRecomecar")
    var letraRecomecar = document.getElementById("letraRecomecar")

    if (cartas == "mao1") {
        cartaMao1.style.border = "solid 2px yellow"
        cartaMao1.style.borderRadius = "7px"
        cartaMao1.style.boxShadow = "0px 0px 15px yellow"

        cartaMao2.style.boxShadow = "none"
        cartaMao2.style.borderRadius = "0px"
        cartaMao2.style.border = "0px"

        letraRecomecar.style.marginTop = "14%"
        botaoRecomecar.style.marginTop = "7.5%"
        boxTodasCartas.style.bottom = "0%";
        boxTodasCartas.style.height = "68%";
        boxCartasMao.style.marginTop = "0.5%";
        botao.style.display = "inline-flex"
    } else {
        cartaMao2.style.border = "solid 2px yellow"
        cartaMao2.style.boxShadow = "0px 0px 15px yellow"
        cartaMao2.style.borderRadius = "7px"

        cartaMao1.style.border = "0px"
        cartaMao1.style.borderRadius = "0px"
        cartaMao1.style.boxShadow = "none"

        letraRecomecar.style.marginTop = "14%"
        botaoRecomecar.style.marginTop = "7.5%"
        boxTodasCartas.style.height = "68%";
        boxTodasCartas.style.bottom = "0%";
        boxCartasMao.style.marginTop = "0.5%";
        botao.style.display = "inline-flex"

    }
}

function subirCartasMesa(cartas) {
    var boxTodasCartas = document.getElementById("todasCartas");
    var botao = document.getElementById("botaoRecolher");
    var boxMesa = document.getElementById("mesaPoker");
    var mesa1 = document.getElementById("cartaMesa1")
    var mesa2 = document.getElementById("cartaMesa2")
    var mesa3 = document.getElementById("cartaMesa3")
    var mesa4 = document.getElementById("cartaMesa4")
    var mesa5 = document.getElementById("cartaMesa5")
    var cartaMao1 = document.getElementById("cartaMao1");
    var cartaMao2 = document.getElementById("cartaMao2");
    var botaoRecomecar = document.getElementById("botaoRecomecar")
    var letraRecomecar = document.getElementById("letraRecomecar")


    if (cartas == "mesa1") {
        mesa1.style.border = "solid 2px blue"
        mesa1.style.boxShadow = "0px 0px 15px blue"
        mesa1.style.borderRadius = "7px"

        cartaMao2.style.boxShadow = "none"
        cartaMao1.style.boxShadow = "none"

        mesa2.style.border = "0px"
        mesa2.style.boxShadow = "none"

        mesa3.style.border = "0px"
        mesa3.style.boxShadow = "none"

        mesa4.style.border = "0px"
        mesa4.style.boxShadow = "none"

        mesa5.style.border = "0px"
        mesa5.style.boxShadow = "none"

        letraRecomecar.style.marginTop = "14%"
        botaoRecomecar.style.marginTop = "7.5%"
        boxTodasCartas.style.height = "68%";
        boxTodasCartas.style.bottom = "0%";
        boxMesa.style.marginTop = "-2%"
        botao.style.display = "inline-flex"

    } else if (cartas == "mesa2") {
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

        letraRecomecar.style.marginTop = "14%"
        botaoRecomecar.style.marginTop = "7.5%"
        boxTodasCartas.style.height = "68%";
        boxTodasCartas.style.bottom = "0%";
        boxMesa.style.marginTop = "-2%"
        botao.style.display = "inline-flex"
    } else if (cartas == "mesa3") {
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

        letraRecomecar.style.marginTop = "14%"
        botaoRecomecar.style.marginTop = "7.5%"
        boxTodasCartas.style.height = "68%";
        boxTodasCartas.style.bottom = "0%";
        boxMesa.style.marginTop = "-2%"
        botao.style.display = "inline-flex"
    } else if (cartas == "mesa4") {
        mesa4.style.border = "solid 2px blue"
        mesa4.style.boxShadow = "0px 0px 15px blue"
        mesa4.style.borderRadius = "7px"

        cartaMao2.style.boxShadow = "none"
        cartaMao1.style.boxShadow = "none"

        mesa1.style.border = "0px"
        mesa1.style.boxShadow = "none"

        mesa3.style.border = "0px"
        mesa3.style.boxShadow = "none"

        mesa2.style.border = "0px"
        mesa2.style.boxShadow = "none"

        mesa5.style.border = "0px"
        mesa5.style.boxShadow = "none"

        letraRecomecar.style.marginTop = "14%"
        botaoRecomecar.style.marginTop = "7.5%"
        boxTodasCartas.style.height = "68%";
        boxTodasCartas.style.bottom = "0%";
        boxMesa.style.marginTop = "-2%"
        botao.style.display = "inline-flex"
    } else {
        mesa5.style.border = "solid 2px blue"
        mesa5.style.boxShadow = "0px 0px 15px blue"
        mesa5.style.borderRadius = "7px"

        cartaMao2.style.boxShadow = "none"
        cartaMao1.style.boxShadow = "none"

        mesa1.style.border = "0px"
        mesa1.style.boxShadow = "none"

        mesa3.style.border = "0px"
        mesa3.style.boxShadow = "none"

        mesa4.style.border = "0px"
        mesa4.style.boxShadow = "none"

        mesa2.style.border = "0px"
        mesa2.style.boxShadow = "none"

        letraRecomecar.style.marginTop = "14%"
        botaoRecomecar.style.marginTop = "7.5%"
        boxTodasCartas.style.height = "68%";
        boxTodasCartas.style.bottom = "0%";
        boxMesa.style.marginTop = "-2%"
        botao.style.display = "inline-flex"
    }
}

function recolherCartas() {
    var boxTodasCartas = document.getElementById("todasCartas");
    var boxCartasMao = document.getElementById("cartaMao");
    var botao = document.getElementById("botaoRecolher");
    var mesa = document.getElementById("mesaPoker");
    var mesa1 = document.getElementById("cartaMesa1")
    var mesa2 = document.getElementById("cartaMesa2")
    var mesa3 = document.getElementById("cartaMesa3")
    var mesa4 = document.getElementById("cartaMesa4")
    var mesa5 = document.getElementById("cartaMesa5")
    var botaoRecomecar = document.getElementById("botaoRecomecar")
    var letraRecomecar = document.getElementById("letraRecomecar")

    mesa.style.marginTop = "9%"
    boxTodasCartas.style.bottom = "-100%"
    boxTodasCartas.style.height = "0%";
    boxCartasMao.style.marginTop = "32%";
    botao.style.display = "none"
    letraRecomecar.style.marginTop = "41.5%"
    botaoRecomecar.style.marginTop = "35%"
    cartaMao2.style.boxShadow = "none"
    cartaMao2.style.borderRadius = "0px"
    cartaMao2.style.border = "0px"

    cartaMao1.style.border = "0px"
    cartaMao1.style.borderRadius = "0px"
    cartaMao1.style.boxShadow = "none"

    mesa4.style.border = "0px"
    mesa4.style.boxShadow = "none"

    mesa1.style.border = "0px"
    mesa1.style.boxShadow = "none"

    mesa3.style.border = "0px"
    mesa3.style.boxShadow = "none"

    mesa2.style.border = "0px"
    mesa2.style.boxShadow = "none"

    mesa5.style.border = "0px"
    mesa5.style.boxShadow = "none"


    for (i = 0; i < valorCarta.length; i++) {

        if (cartaMao1.style.backgroundImage.includes(valorCarta[i])) {
            cartaEscolhidaMao1 = valorCarta[i];
        }
        if (cartaMao2.style.backgroundImage.includes(valorCarta[i])) {
            cartaEscolhidaMao2 = valorCarta[i];
        }
        if (cartaMesa1.style.backgroundImage.includes(valorCarta[i])) {
            cartaEscolhidaMesa1 = valorCarta[i];
        }
        if (cartaMesa2.style.backgroundImage.includes(valorCarta[i])) {
            cartaEscolhidaMesa2 = valorCarta[i];
        }
        if (cartaMesa3.style.backgroundImage.includes(valorCarta[i])) {
            cartaEscolhidaMesa3 = valorCarta[i];
        }
        if (cartaMesa4.style.backgroundImage.includes(valorCarta[i])) {
            cartaEscolhidaMesa4 = valorCarta[i];
        }
        if (cartaMesa5.style.backgroundImage.includes(valorCarta[i])) {
            cartaEscolhidaMesa5 = valorCarta[i];
        }

    }
    checaMaoSemNaipe();

}

function recomecarCartas() {
    const cartaMao1 = document.getElementById("cartaMao1");
    const cartaMao2 = document.getElementById("cartaMao2");

    const mesa1 = document.getElementById("cartaMesa1");
    const mesa2 = document.getElementById("cartaMesa2");
    const mesa3 = document.getElementById("cartaMesa3");
    const mesa4 = document.getElementById("cartaMesa4");
    const mesa5 = document.getElementById("cartaMesa5");

    cartaMao1.style.backgroundImage = "url(../img/blue_back.png)";
    cartaMao2.style.backgroundImage = "url(../img/blue_back.png)";

    mesa1.style.backgroundImage = "url(../img/red_back.png)";
    mesa2.style.backgroundImage = "url(../img/red_back.png)";
    mesa3.style.backgroundImage = "url(../img/red_back.png)";
    mesa4.style.backgroundImage = "url(../img/red_back.png)";
    mesa5.style.backgroundImage = "url(../img/red_back.png)";

    escolhidaMao1 = "nada";
    escolhidaMao2 = "nada";
    escolhidaMesa1 = "nada";
    escolhidaMesa2 = "nada";
    escolhidaMesa3 = "nada";
    escolhidaMesa4 = "nada";
    escolhidaMesa5 = "nada";

    recolherCartas();

    mesa5.style.border = "0px"
    mesa5.style.boxShadow = "none"
}