let edadUser = prompt("Ingrese la EDAD")
const precioEntrada = 1800;

function validacionEdad(edadUser) {
  if (edadUser >= 18) {
    alert("puedes sacar una entrada por ser mayor a 18 años");
    let cantEntradas = prompt("por favor ingrese la cantidad de entradas")
    cantEntradasFunc(cantEntradas, precioEntrada);
  } else {
    alert("no puede sacar una entrada USTED es menor de 18 años");
  };
  alert("gracias por usar el sistema");

  let continuaSi = prompt("¿Desea preguntar nuevamente? Escriba si o no");

  while (continuaSi != "no") {
    let edadUser = prompt("Ingrese la EDAD");
    validacionEdad(edadUser);
    break
  }
}

function cantEntradasFunc(cantEntradas, precioEntrada) {
  if (edadUser >= 18) {
    let calculoCantPrecio = cantEntradas * precioEntrada;
    alert("el costo es de" + calculoCantPrecio);
  }
}

validacionEdad(edadUser);





