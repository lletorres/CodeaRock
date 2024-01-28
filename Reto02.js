let saludo = document.getElementById("saludo");
let nombre = document.getElementById("nombre").value;
console.log("lo que tiene saludo", saludo.innerHTML);
console.log("lo que tiene nombre", nombre);
saludo.innerHTML += nombre
