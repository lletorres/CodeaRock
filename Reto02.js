const saludito = () => {
  let saludo = document.getElementById("saludo");
  let nombre = document.getElementById("nombre").value; // que pasa si se guarda afuera?
  // los input tienen un atributo VALUE que nos da el valor de su contenido, como el innerHTML pero para inputs
  // se le agrega .VALUE porque es lo que tiene el input de NOMBRE
  console.log("lo que tiene nombre", nombre);
  //cuando se pone VALUE  se guarda el valor de la etiqueta adentro de la variable NOMBRE, no se ponde innerHTML
  console.log("lo que tiene saludo", saludo.innerHTML);

  saludo.innerHTML = "Bienvenido" + nombre;
};
