import cipher from "./cipher.js";

let chaveDesloc;
let codificar;
let result;
let decodificar;
let buttonCif = window.document.getElementById("butCifrar");
buttonCif.addEventListener("click", cifrar);
let buttonDecif = window.document.getElementById("butDecifrar");
buttonDecif.addEventListener("click", decifrar);

function cifrar() {
  chaveDesloc = Number(window.document.getElementById("desloc").value);
  codificar = window.document.getElementById("text1").value;
  result = window.document.getElementById("result");

  result.innerHTML = cipher.encode(chaveDesloc, codificar);
}

function decifrar() {
  chaveDesloc = Number(window.document.getElementById("desloc").value);
  decodificar = window.document.getElementById("textodois").value;
  result = window.document.getElementById("result");

  result.innerHTML = cipher.decode(chaveDesloc, decodificar);
}
