const miPrimerFuncion = () => {
  console.log("--miPrimerFuncion()");
};

//miPrimerFuncion();

const sumar = (a, b, texto) => {
  let resultado = a + b;
  console.log(resultado, texto);
};
// llamo a la funcion y le paso sus 2 paramentros

sumar(44, 88, "la primera suma");
sumar(54, 12, "la segunda suma");
sumar(85, 36, "la tercera suma");
sumar(21, 36, "la cuarta suma");

let titulo = document.getElementById("titulo");
const calcular = (a, tipo, b, txt) => {
  let resultado = 0;

  if (tipo == "*") {
    resultado = a * b;
  }
  if (tipo == "+") {
    resultado = a + b;
  }
  if (tipo == "-") {
    resultado = a - b;
  }
  if (tipo == "/") {
    resultado = a / b;
  }
  console.log(a, tipo, b);
  console.log(txt, resultado);

  return resultado + txt;
};

// calcular(2, "+", 3, "la operacion da"); esto es la llamada de la funcion en JS

titulo.innerHTML = calcular(3, "+", 2, " la operacion que se muestra en HTML");

const saludo = (nombre) => {
  let txt = nombre + " practica mucho";
  return txt;
};
let retornoDeSaludo = saludo("Leandro");

