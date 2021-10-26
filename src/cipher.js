const cipher = {
  encode: function Criptografar(chaveDesloc, string) {
    const chaveVazia = !chaveDesloc;
    const chaveNotNumber = typeof chaveDesloc !== "number";
    if (chaveVazia || chaveNotNumber) {
      throw new TypeError();
    } 

    let newEntrada = string;
    let cifraMsg = "";
    let encodeForm = "";

    for (let i = 0; i < newEntrada.length; i++) {

      let letterAsc = newEntrada.charCodeAt(i);
      if (letterAsc >= 65 && letterAsc <= 90) {
        encodeForm += String.fromCharCode(
          ((letterAsc - 65 + chaveDesloc) % 26) + 65
        );
      } else if (letterAsc >= 97 && letterAsc <= 122) {
        encodeForm += String.fromCharCode(
          ((letterAsc - 97 + chaveDesloc) % 26) + 97
        );

      } else {
        encodeForm += newEntrada.charAt(i);
      }
      cifraMsg = encodeForm;
    }
    return cifraMsg;
  },

  decode: function Descriptografar(chaveDesloc, string) {
    const chaveVazia = !chaveDesloc;
    const chaveNotNumber = typeof chaveDesloc !== "number";
    if (chaveVazia || chaveNotNumber) {
      throw new TypeError();
    }

    let novaEntrada = string;
    let decifrarMsg = "";
    let decodForm = "";

    for (let i = 0; i < novaEntrada.length; i++) {

      let letterAsc = novaEntrada.charCodeAt(i);

      if (letterAsc >= 65 && letterAsc <= 90) {
        decodForm += String.fromCharCode(
          ((letterAsc - 90 - chaveDesloc) % 26) + 90
        );

      } else if (letterAsc >= 97 && letterAsc <= 122) {
        decodForm += String.fromCharCode(
          ((letterAsc - 122 - chaveDesloc) % 26) + 122
        );
      } else {
        decodForm += novaEntrada.charAt(i);
      }

      decifrarMsg = decodForm;
    }
    
    return decifrarMsg;
  },
};

export default cipher;
