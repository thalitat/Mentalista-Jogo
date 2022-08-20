var numeroSecreto = parseInt(Math.random() * 11);
var maximoDeTentativas = 3;

var chute = parseInt(document.getElementById("valor").value);
var elementoResultado = document.getElementById("resultado");

for (var i = 0; i < maximoDeTentativas; i++) {
  function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");

    if (chute == numeroSecreto) {
      document.write(
        "<img src= 'https://c.tenor.com/PJCc9C5UQVAAAAAC/mario-ok.gif' class='mario' alt='' width='400' height='400' title='it me mario congratulations'> " +
          "it me mario congratulations"
      );
      console.log("tentativa" + maximoDeTentativas);
      console.log("i" + i);
    } else if (chute > 10 || chute < 0) {
      alert("Número Inválido");
      maximoDeTentativas--;
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML = "Um pouquinho menos";
      maximoDeTentativas--;
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML = "Um pouquinho mais";
      maximoDeTentativas--;
    }

    if (maximoDeTentativas === 0) {
      document.write(
        "<img src= 'https://c.tenor.com/VHk7IK0G17QAAAAC/game-over.gif' class='mario' alt='' width ='300' height= '300' title='Game over' id= 'Game over' <div><legend> Acabaram suas chances! O número secreto era: </legend></div> " +
          numeroSecreto
      );
    }
  }
}
