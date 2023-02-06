function verificaChuteValido(chute) {
    const numero = + chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOUMenor(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        12
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }

    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-up-long"></i></div> -->`
    }

    else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div> -->`
    }

    function chuteForInvalido(numero) {
        return Number.isNaN(numero)
    }

    function numeroForMaiorOUMenor(numero) {
        return numero > maiorValor || numero < menorValor
    }
}