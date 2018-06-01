
let string1 = document.getElementById('cipher').value;
let offset1 = document.getElementById('number').value;

document.getElementById("cifrar").addEventListener('click', function(){
    document.getElementById('containerCC').innerHTML = window.cipher.encode(string1.toUpperCase(),parseInt(offset1));
})