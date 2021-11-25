alert("Fase 3, Está pronto para vencer o jogo?")


function escolha(){
    var decide = prompt("Qual das alternativas esta correta A,B,C,D?")

if(decide == "d") {
    alert("Ok você acertou, vá para próxima pergunta")
} else if (decide =="a" || decide == "c" ||decide == "b"){
    alert("Hum, você errou tente novamente!")
} else{
    escolha()
}
}

 
function escolhaB(){
    var decide = prompt("Qual das alternativas esta correta A,B,C,D?")

if(decide == "a") {
    alert("Ok você acertou, vá para próxima pergunta")
} else if (decide =="b" || decide == "c" ||decide == "d"){
    alert("Hum, você errou tente novamente!")
} else{
    escolha()
}
}

function escolhaC(){
var decide = prompt("Qual das alternativas esta correta A,B,C,D?")

if(decide == "a") {
return location = '../ganhou.html'
} else if (decide =="a" || decide == "d" ||decide == "b"){
    return location = '../gamerover.html'
} else{
escolha()
}
}