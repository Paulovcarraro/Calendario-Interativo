// Codigo para tornar o calendário interativo

function colorirDIa() {
  let days = document.getElementById("day").value;
  let value = document.getElementById("color").value;
  let calendar = document.getElementById("calendar").value;

  // Bloco de validação de informações

  if (!days) {
    alert("Por favor, informe um dia existente no calendário.");
  } else {
    if (!days > 0 && !days < 31) {
      let td = calendar.getElementsByTagName("td");
      td.style.backgroundColor = color;
    } else {
      alert("Por favor informe uma data constante no calendário.");
    }
  }

  var elementos = document.querySelectorAll("td");
}
