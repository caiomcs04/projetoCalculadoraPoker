let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
let cartajogo1 = 0;
let cartajogo2 = 0;
let cartajogo3 = 0;
let jogo1 = 0;
let jogo2 = 0;
let jogo3 = 0;
let sequencia = 0;


function checaMaoSemNaipe() {
    let cartasTotal = [cartaEscolhidaMao1, cartaEscolhidaMao2, cartaEscolhidaMesa1, cartaEscolhidaMesa2, cartaEscolhidaMesa3, cartaEscolhidaMesa4, cartaEscolhidaMesa5]

    for (i = 0; i < cartasTotal.length; i++) {
        if (cartasTotal[i] == "J") {
            cartasTotal[i] = "11"
        } else if (cartasTotal[i] == "Q") {
            cartasTotal[i] = "12"
        } else if (cartasTotal[i] == "K") {
            cartasTotal[i] = "13"
        } else if (cartasTotal[i] == "A") {
            cartasTotal[i] = "14"
        }

        for (k = i + 1; k < cartasTotal.length; k++) {
            if (jogo1 == 0) {
                if (cartasTotal[i] == cartasTotal[k]) {
                    cont1++
                }
            } else if (jogo2 == 0) {
                if (cartasTotal[i] == cartasTotal[k]) {
                    cont2++;

                }
            } else if (jogo3 == 0) {
                if (cartasTotal[i] == cartasTotal[k]) {
                    cont3++;

                }
            }
        }
        if (cont1 > 0 && jogo1 == 0) {
            jogo1 = cont1;
            cartajogo1 = cartasTotal[i];
        }
        if (cont2 > 0 && jogo2 == 0) {
            cartajogo2 = cartasTotal[i];

            if (cartajogo1 != cartajogo2) {
                jogo2 = cont2;
            } else {
                cont2 = 0;
            }
        }
        if (cont3 > 0 && jogo3 == 0) {
            jogo3 = cont3;
        }
    }

    cartasTotal.sort((a, b) => a - b)

    for (i = 0; i < cartasTotal.length; i++) {
        console.log(cartasTotal[i + 1])
        if ((cartasTotal[i + 4] - cartasTotal[i]) == 4) {
            sequencia++
        }
    }
    console.log(sequencia)
    if (sequencia == 1) {
        alert("SEQUENCIA")
    } else if (jogo1 == 1 && jogo2 == 0 && jogo3 == 0) {
        alert("voce tem um par")
    } else if (jogo1 == 2 && jogo2 == 0 && jogo3 == 0) {
        alert("voce tem uma trinca")
    } else if (jogo1 == 3 || jogo2 == 3 || jogo3 == 3) {
        alert("voce tem um four")
    } else if (jogo1 == 1 && jogo2 == 1 && jogo3 < 2) {
        alert("voce tem DOIS par")
    } else if (jogo1 == 2 && jogo2 >= 1 || jogo3 >= 1) {
        alert("Voce tem um FULLHOUSE")
    } else if (jogo2 == 2 && jogo1 >= 1 || jogo3 >= 1) {
        alert("Voce tem um FULLHOUSE")
    }

    jogo1 = 0;
    cont3 = 0;
    cont2 = 0;
    cont1 = 0;
    jogo2 = 0;
    jogo3 = 0;
    sequencia = 0;

}