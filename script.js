// @ts-nocheck
let primeiroSemestre=Number(prompt("informe nota do primeiroSemestre:"))
let segundoSemestre=Number(prompt("informe nota do segundoSemestre:"))
let terceiroSemestre=Number(prompt("informe nota do terceiroSemestre:"))
let quartoSemestre=Number(prompt("informe nota do quartoSemestre:"))

let resultadoFinal=Number((primeiroSemestre+segundoSemestre+terceiroSemestre+quartoSemestre))/4
let notaFracionada=Number(resultadoFinal.toFixed(1))

if(resultadoFinal>=10){
    document.querySelector('.resultado').innerHTML="aprovado"
    document.querySelector('.resultado').innerHTML="aprovado:"+resultadoFinal
}
else if(resultadoFinal<=5){
    document.querySelector('.resultado').innerHTML="esta de recuperação:"+resultadoFinal
}
else{
    
    document.querySelector('.resultado').innerHTML="reprovado:"+resultadoFinal
   
}




