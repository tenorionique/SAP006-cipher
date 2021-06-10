const cipher = {
  
  encode: function (chaveDesloc, string) {
   let newEntrada = string.toUpperCase();
   let cifraMsg = "";
 
   for (let i = 0; i < newEntrada.length; i++) {
 
     let letterAsc = newEntrada[i].charCodeAt();
     let encodeForm = ((letterAsc - 65 + chaveDesloc) % 26) + 65;
 
     cifraMsg += String.fromCharCode(encodeForm);
 
 
   }
   return cifraMsg;
 
  },
  decode: function(chaveDesloc, string) {
    let novaEntrada = string.toUpperCase();
    let decifrarMsg = "";
 
    for (let i=0; i <novaEntrada.length; i++) {
 
     let letterAsc = novaEntrada[i].charCodeAt();
     let decodForm = ((letterAsc - 90 - chaveDesloc)%26) +90;
 
     decifrarMsg += String.fromCharCode(decodForm);
 
    }
    return decifrarMsg;
 
  }
 
 };
 
 export default cipher;