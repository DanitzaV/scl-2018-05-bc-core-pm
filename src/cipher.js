window.cipher = {

  encode: (string,offset) => {
    /* Acá va tu código */
    
    let cifradas= "";
    
    for(let i = 0; i < string.length; i++) {
      let formula = (string.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
      
      if (string.charCodeAt(i) === 32) {
        formula = ' ';// contiene los espacios
        cifradas+= " ";// pone en la frase los espacios
        console.log(formula)
        console.log(cifradas);
      }
      const cifrado = String.fromCharCode(formula);
      cifradas+= cifrado;

      
    }

    return cifradas;
  } ,
   
  decode: (string,offset) => {
    /* Acá va tu código */
    string= document.getElementById('cipher').value;
    offset = parseInt(document.getElementById('number').value);
    let descrifradas = "";
    for (let j = 0; j < string.length; j++) {
      const formula = (string.toUpperCase().charCodeAt(j) + 65 - offset) % 26 + 65;
      const cifrado = String.fromCharCode(formula);
      descrifradas+= cifrado;
  }
  const contenedor= document.getElementById('containerCC').innerHTML = '<p>' + descrifradas + '</p>';
}

}
