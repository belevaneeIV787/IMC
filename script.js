
function resultado(){
    const alt = document.getElementById("altura")
    const pes = document.getElementById("peso")

    const altura = Number(alt.value)
    const peso = Number(pes.value)

    const resultado = (altura * altura) / peso

    if(altura == ' ' || peso == ' '){
        alert(`Preencha todos os campos`)

    }else if(resultado <= 16.9){
        alert(`Muito a baixo do peso: ${resultado.toFixed(2)}`)

    }else if(resultado >= 17 & resultado <= 18,4){
        alert(`Peso normal: ${resultado.toFixed(2)}`)

    }else if(resultado >= 18,5 & resultado <= 24,9){
        alert(`Peso normal: ${resultado.toFixed(2)}`)

    }else if(resultado >= 25 & resultado <= 29,9){
        alert(`Acima do peso: ${resultado.toFixed(2)}`)

    }else if(resultado >= 30 & resultado <= 34,9){
        alert(`Obesidade grau 1: ${resultado.toFixed(2)}`)

    }else if(resultado >= 35 & resultado <= 40){
        alert(`Obesidade grau 2: ${resultado.toFixed(2)}`)

    }else if(resultado >= 40){
        alert(`Obesidade grau 3`)
}}

document.getElementById("resultado").innerText = "Resultado " + resultado
