window.cipher = {

  encode: (offset,string) => {
    /* Acá va tu código */
    offset = 33;
    string = document.getElementById('cipher').value;
    const cifradas = '';
    console.log(string);
    for (let i = 0; i < string.length; i++) {
      const element = string[i];
      let formula = (string.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
      let cifrado = String.fromCharCode(formula);
      console.log(element)
    }
  },
  decode: () => {
    /* Acá va tu código */
  }
}