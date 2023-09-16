const cuentas = {
  cuentaPrueba123: {
    tipo: "Caja de Ahorro",
    saldo: 5500,
  },
  cuentaPrueba456: {
    tipo: "Cuenta Corriente",
    saldo: 0,
  },
};

const prestamos = {
  Personal: {
    tasa: 120,
    plazo: [6, 12, 24],
    monto: [100000, 150000, 200000],
  },
  Hipotecario: {
    tasa: 150,
    plazo: [24, 36, 48],
    monto: [1500000, 2000000, 2500000],
  },
};

function showPosition() {
  let position = document.getElementById("position");
  position.innerHTML = "";
  hideView(position);
  let h2 = document.createElement("h2");
  h2.innerHTML = "Posicion consolidada";
  position.appendChild(h2);
  for (let cuenta in cuentas) {
    let article = document.createElement("article");
    article.className = "position-article";
    article.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.innerHTML = cuenta;
    article.appendChild(h3);
    let tipo = document.createElement("p");
    tipo.innerHTML = cuentas[cuenta]["tipo"];
    let balance = document.createElement("p");
    balance.innerHTML = "Saldo: $" + cuentas[cuenta]["saldo"];
    article.appendChild(tipo);
    article.appendChild(balance);
    position.appendChild(article);
  }
}

function hideView(visible) {
  const position = document.getElementById("position");
  position.classList.replace("position", "hide");
  const cards = document.getElementById("cards");
  cards.classList.replace("cards", "hide");
  const loans = document.getElementById("loans");
  loans.classList.replace("loans", "hide");
  const investments = document.getElementById("investments");
  investments.classList.replace("investments", "hide");
  const help = document.getElementById("help");
  help.classList.replace("help", "hide");
  visible.classList.replace("hide", visible.id);
}


function showLoans() {
  const loans = document.getElementById("loans");
  loans.innerHTML = "";
  hideView(loans);
  let h2 = document.createElement("h2");
  h2.innerHTML = "Prestamos";
  loans.appendChild(h2);
  for (let prestamo in prestamos) {
    let article = document.createElement("article");
    article.className = "loans-article";
    article.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.innerHTML = prestamo;
    article.appendChild(h3);
    let tasa = document.createElement("p");
    tasa.innerHTML = "Tasa: " + prestamos[prestamo]["tasa"] + " %";
    tasa.value = prestamos[prestamo]["tasa"];
    let meses = document.createElement("p");
    meses.innerHTML = "Meses: ";
    let plazo = document.createElement("select");
    plazo.className = "loans-article-months";
    plazo.id = "loans-article-months";
    for (let mes in prestamos[prestamo]["plazo"]) {
      let option = document.createElement("option");
      option.value = prestamos[prestamo]["plazo"][mes];
      option.innerHTML = prestamos[prestamo]["plazo"][mes];
      plazo.appendChild(option);
    }
    let value = document.createElement("p");
    value.innerHTML = "Monto: ";
    let monto = document.createElement("select");
    monto.className = "loans-article-amount";
    monto.id = "loans-article-amount";
    for (let valor in prestamos[prestamo]["monto"]) {
      let option = document.createElement("option");
      option.value = prestamos[prestamo]["monto"][valor];
      option.innerHTML = prestamos[prestamo]["monto"][valor];
      monto.appendChild(option);
    }
    let boton = document.createElement("button");
    boton.innerHTML = "Confirmar";
    boton.onclick = function () {
      loan(tasa.value, monto.value, plazo.value);
    };
    article.appendChild(tasa);
    article.appendChild(meses);
    article.appendChild(plazo);
    article.appendChild(value);
    article.appendChild(monto);
    article.appendChild(boton);
    loans.appendChild(article);
  }
}

function loan(tasa, monto, plazo) {
  let tasaConvertida = tasa / 100 / 12;
  let cuota =
    (monto * tasaConvertida) / (1 - Math.pow(1 + tasaConvertida, -plazo));
  let deuda = cuota * plazo;

  alert(
    "Tasa: " +
      tasa +
      " %\nMonto: $" +
      monto +
      "\nPlazo: " +
      plazo +
      " meses\nCuota: $" +
      cuota.toFixed(2) +
      "\nDeuda: $" +
      deuda.toFixed(2)
  );
}

let portfolio = {
  "Acciones": {
    "AR123": {
      precio: 1234,
      cantidad: 1,
    },
    "AR1235": {
      precio: 1234,
      cantidad: 1,
    },
  },
  "Bonos": {
    "Bonar123": {
      precio: 1234,
      cantidad: 1,
    },
    "Bonar1235": {
      precio: 1234,
      cantidad: 1,
    },
  },
};

function showInvestments() {
  const investments = document.getElementById("investments");
  investments.innerHTML = "";
  hideView(investments);
  let h2 = document.createElement("h2");
  h2.innerHTML = "Inversiones";
  investments.appendChild(h2);
  for (let investment in portfolio) {
    let article = document.createElement("article");
    article.className = "investments-article";
    article.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.innerHTML = investment;
    article.appendChild(h3);
    investments.appendChild(article);
    for (let inversion in portfolio[investment]) {
      let h4 = document.createElement("h4");
      h4.innerHTML = inversion;
      let p = document.createElement("p");
      p.innerHTML = "Precio: $" + portfolio[investment][inversion]["precio"];
      let cantidad = document.createElement("p");
      cantidad.innerHTML = "Cantidad: " + portfolio[investment][inversion]["cantidad"];
      cantidad.value = portfolio[investment][inversion]["cantidad"];
      let boton = document.createElement("button");
      boton.innerHTML = "Comprar";
      boton.onclick = function (){
        buyInvestment(inversion, cantidad.value);
      }
      article.appendChild(h4);
      article.appendChild(p);
      article.appendChild(cantidad);
      article.appendChild(boton);
      investments.appendChild(article);
    }
  }
}
function buyInvestment(inver, cant) {
  for (let inversion in portfolio){
    for (let investment in portfolio[inversion]){
      if (investment == inver){
        if (cant > 0 && cant <= portfolio[inversion][investment]["cantidad"]) {
          portfolio[inversion][investment]["cantidad"] = portfolio[inversion][investment]["cantidad"] - cant;
          alert("Compra exitosa");
          showInvestments();
        } 
      }
    }
  }
}

function repetir() {
  // let repetir = prompt("¿Desea volver al menu?\nSI\nNO").toUpperCase();
  // while (repetir != "SI" && repetir != "NO"){
  //   alert("Ingrese una opcion valida");
  //   repetir = prompt("¿Desea volver al menu?\nSI\nNO").toUpperCase();
  // }
  // if (repetir == "SI"){
  //   bienvenido();
  // }
  // else{
  //   alert("Gracias por usar nuestros servicios!");
  // }
}

function repeat_investment() {
  // let repite = prompt("Desea comprar otra inversion?\nSI\nNO").toUpperCase();
  // while (repite != "SI" && repite != "NO"){
  //   alert("Ingrese una opcion valida");
  //   repite = prompt("Desea comprar otra inversion?\nSI\nNO");
  // }
  // if (repite == "SI"){
  //   investments();
  // }else{
  //   repetir();
  // }
}

function buy(value) {
  // let val = value;
  // let inversion;
  // if (value == "acciones"){
  //   inversion = "accion";
  // }else if(value == "bonos"){
  //   inversion = "bono";
  // }
  // let mensaje = `Elija el nombre de su ${inversion}:\n`;
  // for (let i = 0; i < portfolio[val].length; i++) {
  //   const investment = portfolio[val][i];
  //   mensaje += `Nombre: ${investment.nombre}, Precio: ${investment.precio}, Cantidad: ${investment.cantidad}\n`;
  // }
  // let comprar = prompt(mensaje);
  // let investment = portfolio[val].find(investment => investment.nombre == comprar);
  // if (investment){
  //   alert(`Compra de ${investment.nombre} exitosa`);
  //   repeat_investment();
  // }
  // else{
  //   alert(`No se encontro su ${inversion}`);
  //   repeat_investment();
  // }
}

showPosition();