// El codigo comentado sera implementado en la version final del proyecto.
// La idea del codigo es que al iniciar te permita elegir entre inversiones o prestamos
// Luego dependiendo de la opcion se llama a la funcion correspondiente.
// En el caso de inversiones se fuerza la busqueda por nombre para hacer el filtrado
// Lo ideal seria trabajar de otra manera para no tener tanto codigo.

function bienvenido() {
  let opcion = parseInt(prompt("BIENVENIDO A BANCO LIBERTAD\nIngrese su opcion:\n1.Inversiones\n2.Prestamos"));
  while (opcion != 1 && opcion != 2) {
    alert("Ingrese una opcion valida");
    opcion = parseInt(prompt("BIENVENIDO A BANCO LIBERTAD\nIngrese su opcion:\n1.Inversiones\n2.Prestamos"));
  }
  if (opcion == 1) {
    investments();
  } else if (opcion == 2) {
    loan();
  }
}
function loan() {
  // let amount = document.getElementById("loans-article-amount");

  let amountValue = parseInt(
    prompt(
      "Bienvenido a su prestamo de Banco Libertad\n\
Ingrese el monto del prestamo:\n$500000(500000)\n$1000000(1000000)"
    )
  );

  while (amountValue != 500000 && amountValue != 1000000) {
    alert("Ingrese un monto valido");
    amountValue = parseInt(
      prompt(
        "Ingrese el monto del prestamo:\n$500000(500000)\n$1000000(1000000)"
      )
    );
  }
  // amount.innerHTML = "Monto: $" + amountValue;

  // let months = document.getElementById("loans-article-months");

  let monthsValue = parseInt(prompt("Ingrese el numero de meses:\n6\n12"));

  while (monthsValue != 6 && monthsValue != 12) {
    alert("Ingrese una cantidad de meses valida");
    monthsValue = parseInt(prompt("Ingrese el numero de meses:\n6\n12"));
  }

  // months.innerHTML = "Meses: " + monthsValue;

  let taxValue;

  if (monthsValue == 6) {
    taxValue = 1.2;
  } else if (monthsValue == 12) {
    taxValue = 1.5;
  }

  let tax = "Tasa del: " + taxValue * 100 + "%";

  // let p = document.getElementById("loans-article-total");

  // p.innerHTML = "";

  let total = amountValue * taxValue;

  let quota = total / monthsValue;

  let articleTotal = "Total a pagar: $" + total;

  let articleQuota = "Valor de la cuota: $" + quota;

  // p.appendChild(tax);
  // p.appendChild(articleTotal);
  // p.appendChild(articleQuota);

  alert(
    "Prestamo solicitado con exito!\n" +
      "Monto: $" +
      amountValue +
      "\n" +
      tax +
      "\n" +
      articleTotal +
      "\n" +
      "Cantidad de cuotas: " +
      monthsValue +
      "\n" +
      articleQuota
  );
  repetir();
}

let portfolio = {
  acciones: [
    {
      nombre: "AR123",
      precio: 1234,
      cantidad: 1,
      },
    {
      nombre: "AR1235",
      precio: 1234,
      cantidad: 1,
    }
  ],
  bonos: [
    {
      nombre: "Bonar123",
      precio: 1234,
      cantidad: 1,
    },
    {
      nombre: "Bonar1235",
      precio: 1234,
      cantidad: 1,
    }
  ]
}
function investments(){
  let opciones = Object.keys(portfolio).map((element, index) => `${index + 1}) ${element.toUpperCase()}`).join("\n");
  let opcion = parseInt(prompt(`Elija el tipo de inversion:\n${opciones}`));
  while (opcion != 1 && opcion != 2) {
    alert("Ingrese una opcion valida");
    opcion = parseInt(prompt(`Elija el tipo de inversion:\n${opciones}`));
  }
  if (opcion == 1){
    buy("acciones");
  } else if (opcion == 2){
    buy("bonos");
  }
}

function repetir(){
  let repetir = prompt("¿Desea volver al menu?\nSI\nNO").toUpperCase();
  while (repetir != "SI" && repetir != "NO"){
    alert("Ingrese una opcion valida");
    repetir = prompt("¿Desea volver al menu?\nSI\nNO").toUpperCase();
  }
  if (repetir == "SI"){
    bienvenido();
  }
  else{
    alert("Gracias por usar nuestros servicios!");
  }
}

function repeat_investment(){
  let repite = prompt("Desea comprar otra inversion?\nSI\nNO").toUpperCase();
  while (repite != "SI" && repite != "NO"){
    alert("Ingrese una opcion valida");
    repite = prompt("Desea comprar otra inversion?\nSI\nNO");
  }
  if (repite == "SI"){
    investments();
  }else{
    repetir();
  }
}

function buy(value){
  let val = value;
  let inversion;
  if (value == "acciones"){
    inversion = "accion";
  }else if(value == "bonos"){
    inversion = "bono";
  }
  let mensaje = `Elija el nombre de su ${inversion}:\n`;

  for (let i = 0; i < portfolio[val].length; i++) {
    const investment = portfolio[val][i];
    mensaje += `Nombre: ${investment.nombre}, Precio: ${investment.precio}, Cantidad: ${investment.cantidad}\n`;
  }
  let comprar = prompt(mensaje);
  let investment = portfolio[val].find(investment => investment.nombre == comprar);
  
  if (investment){
    alert(`Compra de ${investment.nombre} exitosa`);
    repeat_investment();
  }
  else{
    alert(`No se encontro su ${inversion}`);
    repeat_investment();
  }
}

bienvenido();
