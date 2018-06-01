
let string = document.getElementById('cipher');
let offset = document.getElementById('number');


function cifrar() {
    document.getElementById('containerCC').innerHTML = window.cipher.encode(string.value,parseInt(offset.value));
}
function decode() {
    document.getElementById('containerCC').innerHTML = window.cipher.decode(string.value,parseInt(offset.value));
}