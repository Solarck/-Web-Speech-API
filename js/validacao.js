function verificaChuteValido(){
    const numero =+ chute

    if(Number.isNaN(numero)){
        const elementoChute = document.getElementById('chute')
        elementoChute.innerHTML= 'Valor invalido'
    }
}