window.cipher = {

  encode: (offset,string) => {
    /* Acá va tu código */
   
    let text = document.getElementById('cipher').value;
    offset = 33;
    string = text;
    let cifradas = '';
    for (let i = 0; i < string.length; i++) {
      let formula = (string.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
      let cifrado = String.fromCharCode(formula);
      cifradas+= cifrado;
    }
    document.getElementById('containerCC').innerHTML = '<p>'+ cifradas + '</p>';
  },
  decode: () => {
    /* Acá va tu código */
    let textDe = document.getElementById('cipher').value;
    offset = 33;
    string = textDe;
    let cifradasDecode = '';
    for (let j = 0; j < string.length; j++) {
      let formula = (string.toUpperCase().charCodeAt(j) + 65 - offset) % 26 + 65;
      let cifrado = String.fromCharCode(formula);
      cifradasDecode+= cifrado;
  }
  document.getElementById('containerDC').innerHTML = '<p>' + cifradasDecode + '</p>';
}
}