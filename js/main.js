function loan(){
  let amount = document.getElementById("loans-article-amount");

  let amountValue = parseInt(prompt("Ingrese el monto del prestamo:\n$500000(500000)\n$1000000(1000000)"));
  
  while (amountValue != 500000 && amountValue != 1000000) {
    alert("Ingrese un monto valido");
    amountValue = parseInt(prompt("Ingrese el monto del prestamo:\n$500000(500000)\n$1000000(1000000)"));
  }
  amount.innerHTML = "Monto: $" + amountValue;

  let months = document.getElementById("loans-article-months");

  let monthsValue = parseInt(prompt("Ingrese el numero de meses:\n6\n12"));

  while (monthsValue != 6 && monthsValue != 12) {
    alert("Ingrese un monto valido");
    monthsValue = parseInt(prompt("Ingrese el numero de meses:\n6\n12"));
  }

  months.innerHTML = "Meses: " + monthsValue;

  let taxValue;

  if (monthsValue == 6) {
    taxValue = 1.2;
  } else if (monthsValue == 12) {
    taxValue = 1.5;
  }

  let tax = document.createElement("p");
  tax.innerHTML = 'Tasa del: ' + taxValue * 100 + '%';

  let p = document.getElementById("loans-article-total");

  p.innerHTML = "";

  let total = (amountValue * taxValue);

  let quota = total / monthsValue;

  let articleTotal = document.createElement("p");
  articleTotal.innerHTML = 'Total a pagar: $' + total;

  let articleQuota = document.createElement("p");
  articleQuota.innerHTML = 'Valor de la cuota: $' + quota;

  p.appendChild(tax);
  p.appendChild(articleTotal);
  p.appendChild(articleQuota);
}