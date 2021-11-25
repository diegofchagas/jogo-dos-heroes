
    
    function escolha(){
        var decide = prompt("Qual das alternativas esta correta A,B,C,D?")
    
    if(decide == "b") {
        alert("Ok você acertou, vá para  próxima pergunta")
    } else if (decide =="a" || decide == "c" ||decide == "d"){
        alert("Hum, você errou tente novamente!")
    } else{
        escolha()
    }
}

     
    function escolhaB(){
        var decide = prompt("Qual das alternativas esta correta A,B,C,D?")
    
    if(decide == "d") {
        alert("Ok você acertou, vá para  próxima pergunta")
    } else if (decide =="a" || decide == "c" ||decide == "b"){
        alert("Hum, você errou tente novamente!")
    } else{
        escolha()
    }
}

function escolhaC(){
    var decide = prompt("Qual das alternativas esta correta A,B,C,D?")

if(decide == "c") {
    return location = 'pergunta2.html'
} else if (decide =="a" || decide == "d" ||decide == "b"){
    alert("Hum, você errou tente novamente!")
} else{
    escolha()
}
}






//      function escolhaggg(){
//          var decide = prompt("Qual das alternativas esta correta A,B,C,D?")
    
//       if(decide == "b") {
//         return location = 'proxima.html'
//      } else if (decide =="a" || decide == "c" ||decide == "d"){
//          return location = "home.html"
//      } else{
//          escolha()
//      }
//   }





























// function responder(elemento){

//     window.location.href = "responder1.html";
    
//     elemento.style.backgroundColor = "blue";
    
//     }

// function novaFase(elemento){

// window.location.href = "index2.html";

// elemento.style.backgroundColor = "blue";

// }



/*var pergunta1=  alert("Qual a indetidade do homem de ferro ?\n a.Stebve Jobs \n b.Tony Stark\n c.clarck Kent")

var resposta1 = prompt("")

if(resposta1== "b"){
    alert("parabens acertou proxima pergunta")
} else { alert("tente novamente")}*/

