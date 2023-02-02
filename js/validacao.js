function verificaChuteValidow(chute) {
    const numero = + chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroForMaiorOUMenor(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function newFunction(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOUMenor(numero) {
    return numero > maiorValor || numero < menorValor
}
