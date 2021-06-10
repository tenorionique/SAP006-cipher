import cipher from './cipher.js';

//console.log(cipher);
let chaveDesloc;
let codificar;
let result;
let decodificar;
let buttonCif = window.document.getElementById('butCifrar')
buttonCif.addEventListener('click', cifrar)
let buttonDecif = window.document.getElementById('butDecifrar')
buttonDecif.addEventListener('click', decifrar)

function cifrar() {
    chaveDesloc = Number(window.document.getElementById('desloc').value)
    codificar =  window.document.getElementById('text1').value
    result = window.document.getElementById('result')
    //result.innerHTML = `Testando vai aparecer o texto codificado mas por enquanto ${chaveDesloc} e ${codificar}` 
    result.innerHTML = cipher.encode(chaveDesloc, codificar)
   }

function decifrar() {
    chaveDesloc = Number(window.document.getElementById('desloc').value)
     decodificar = window.document.getElementById('textodois').value
     result = window.document.getElementById('result')
   // result.innerHTML = `Testando vai aparecer o texto decodificado mas por enquanto ${chaveDesloc} e ${decodificar}`
    result.innerHTML = cipher.decode(chaveDesloc, decodificar)
}   
   //no result.innerhtml deixei esse teste mas é para linkar com o cipher para aparecer a 
   //mensagem criptografada na textarea result