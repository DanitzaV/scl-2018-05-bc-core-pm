
let string1 = document.getElementById('cipher');
let offset1 = document.getElementById('number');


function cifrar() {
    document.getElementById('containerCC').innerHTML = window.cipher.encode(string1.value,parseInt(offset1.value));
}
function decode() {
    document.getElementById('containerCC').innerHTML = window.cipher.encode(string1.value,parseInt(offset1.value));
}