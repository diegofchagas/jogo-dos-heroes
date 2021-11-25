alert("Fase 2")


function escolha(){
    var decide = prompt("Qual das alternativas esta correta A,B,C,D?")

if(decide == "c") {
    alert("Ok você acertou, vá para  próxima pergunta")
} else if (decide =="a" || decide == "b" ||decide == "d"){
    alert("Hum, você errou tente novamente!")
} else{
    escolha()
}
}


function escolhaB(){
var decide = prompt("Qual das alternativas esta correta A,B,C,D?")

if(decide == "b") {
alert("Ok você acertou, vá para  próxima pergunta")
} else if (decide =="a" || decide == "c" ||decide == "d"){
alert("Hum, você errou tente novamente!")
} else{
escolha()
}
}

function escolhaC(){
var decide = prompt("Qual das alternativas esta correta A,B,C,D?")

if(decide == "d") {
return location = 'pergunta3.html'
} else if (decide =="a" || decide == "c" ||decide == "b"){
alert("Hum, você errou tente novamente!")
} else{
escolha()
}
}

