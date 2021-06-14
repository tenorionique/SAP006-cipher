const cipher = {
  
  encode: function Criptografar (chaveDesloc, string) {
    const chaveVazia = !chaveDesloc;
    const chaveNotNumber = typeof chaveDesloc !== "number";
    if (chaveVazia || chaveNotNumber){
      throw new TypeError;
    } //retorna um erro caso o usuario digite algo que não seja um numero na chave de deslocamento

   let newEntrada = string;
   let cifraMsg = "";
   let encodeForm = "";
 
   for (let i = 0; i < newEntrada.length; i++) {
 // faz um loop para transformar a string, pegando uma letra por vez e transformando em um codigo da tabela asc
 
 
     let letterAsc = newEntrada.charCodeAt(i);
     if ( letterAsc >= 65 && letterAsc <= 90) {
       encodeForm += String.fromCharCode(((letterAsc - 65 + chaveDesloc) % 26) + 65) 
       

     } else if (letterAsc >= 97 && letterAsc <= 122) {
        encodeForm += String.fromCharCode(((letterAsc - 97 + chaveDesloc) % 26) + 97) 
        
//depois verificando por meio de if else, quais são maiusculas e minisculas, ignorando espaço e ponto
     } else {
       encodeForm += newEntrada.charAt(i)
     }
     cifraMsg = encodeForm;
   }
//transforma o codigo da asc em letra outra vez e retorna uma mensagem cifrada para a caixa de texto com função e dom
   return cifraMsg;
 
  },
  decode: function Descriptografar (chaveDesloc, string) {

    const chaveVazia = !chaveDesloc;
    const chaveNotNumber = typeof chaveDesloc !== "number";
    if (chaveVazia || chaveNotNumber){
    throw new TypeError; }

    let novaEntrada = string;
    let decifrarMsg = "";
    let decodForm = "";

    for (let i=0; i <novaEntrada.length; i++) {
 
     let letterAsc = novaEntrada.charCodeAt(i);
     if ( letterAsc >= 65 && letterAsc <= 90) {
       decodForm += String.fromCharCode(((letterAsc - 90 - chaveDesloc)%26) +90) 
       
     } else if (letterAsc >= 97 && letterAsc <= 122){
       decodForm += String.fromCharCode(((letterAsc - 122 - chaveDesloc)%26) +122) 
       
     } else {
      decodForm += novaEntrada.charAt(i)
     }
     decifrarMsg = decodForm;
    }
    return decifrarMsg;
 
  }
 
 };
 
 export default cipher;