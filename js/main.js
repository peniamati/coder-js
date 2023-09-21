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

const portfolio = {
  Acciones: {
    AR123: {
      precio: 1234,
      cantidad: 1,
    },
    AR1235: {
      precio: 1234,
      cantidad: 1,
    },
  },
  Bonos: {
    Bonar123: {
      precio: 1234,
      cantidad: 1,
    },
    Bonar1235: {
      precio: 1234,
      cantidad: 1,
    },
  },
};

const preguntas = {
  1: "Como transferir dinero?",
  2: "Como realizar un pago?",
  3: "Como realizar un préstamo?",
  4: "Como realizar una inversión?",
  5: "Como consultar mi saldo?",
};

const contactos = {
  Telefono: "tel:6031112298",
  Email: "mailto:JY4yQ@example.com",
  Facebook: "https://www.facebook.com",
  Instagram: "https://www.instagram.com",
  Twitter: "https://www.twitter.com",
};

function showLogin() {
  const seccion = document.getElementById("login");
  hideNav();
  hideView(seccion);
  seccion.innerHTML = "";
  let login = document.createElement("form");
  login.id = "login-form";
  let username = document.createElement("input");
  username.id = "username";
  username.placeholder = "Usuario";
  let password = document.createElement("input");
  password.id = "password";
  password.placeholder = "Contraseña";
  let boton = document.createElement("button");
  boton.innerHTML = "Login";
  boton.onclick = function (event) {
    event.preventDefault(); // Esto evita que la página se recargue
    if (username.value == "juan" && password.value == "juan") {
      sessionStorage.setItem("usuario", username.value);
      showNav();
      showPosition();
    } else if (username.value == "pepe" && password.value == "pepe") {
      sessionStorage.setItem("usuario", username.value);
      showNav();
      showPosition();
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };
  login.appendChild(username);
  login.appendChild(password);
  login.appendChild(boton);
  seccion.appendChild(login);
  
}

function showPosition() {
  let position = document.getElementById("position");
  position.innerHTML = "";
  hideView(position);
  let h2 = document.createElement("h2");
  h2.innerHTML = "Posicion consolidada";
  position.appendChild(h2);
  let usuario = sessionStorage.getItem("usuario");
  let cuentas;
  if (usuario == "juan") {
    cuentas = cuentasJuan;
  } else if (usuario == "pepe") {
    cuentas = cuentasPepe;
  }
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
  const login = document.getElementById("login");
  login.classList.replace("login", "hide");
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
      cantidad.innerHTML =
        "Cantidad: " + portfolio[investment][inversion]["cantidad"];
      cantidad.value = portfolio[investment][inversion]["cantidad"];
      let boton = document.createElement("button");
      boton.innerHTML = "Comprar";
      boton.onclick = function () {
        buyInvestment(inversion, cantidad.value);
      };
      article.appendChild(h4);
      article.appendChild(p);
      article.appendChild(cantidad);
      article.appendChild(boton);
      investments.appendChild(article);
    }
  }
}
function buyInvestment(inver, cant) {
  for (let inversion in portfolio) {
    for (let investment in portfolio[inversion]) {
      if (investment == inver) {
        if (cant > 0 && cant <= portfolio[inversion][investment]["cantidad"]) {
          portfolio[inversion][investment]["cantidad"] =
            portfolio[inversion][investment]["cantidad"] - cant;
          alert("Compra exitosa");
          showInvestments();
        }
      }
    }
  }
}

function showCards() {
  const seccion = document.getElementById("cards");
  seccion.innerHTML = "";
  hideView(cards);
  let h2 = document.createElement("h2");
  h2.innerHTML = "Tarjetas";
  seccion.appendChild(h2);
  if (sessionStorage.getItem("usuario") == "juan") {
    tarjetas = tarjetasJuan;
  } else if (sessionStorage.getItem("usuario") == "pepe") {
    tarjetas = tarjetasPepe;
  }
  for (let card in tarjetas) {
    let article = document.createElement("article");
    article.className = "cards-article";
    article.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.innerHTML = card;
    article.appendChild(h3);
    let img = document.createElement("img");
    img.src = "./img/" + card + ".jpg";
    article.appendChild(img);
    let p = document.createElement("p");
    p.innerHTML = tarjetas[card]["number"];
    article.appendChild(p);
    let nav = document.createElement("nav");
    nav.id = "card-nav";
    let ul = document.createElement("ul");
    ul.id = "card-nav-ul";
    for (let opcion in tarjetas[card]["opciones"]) {
      let li = document.createElement("li");
      li.id = "card-nav-ul-li";
      let link = document.createElement("a");
      link.id = "card-nav-ul-li-a";
      link.innerHTML = tarjetas[card]["opciones"][opcion];
      link.href = "#" + tarjetas[card]["opciones"][opcion];
      li.appendChild(link);
      ul.appendChild(li);
    }
    nav.appendChild(ul);
    article.appendChild(nav);
    seccion.appendChild(article);
  }
}

function showHelp() {
  const help = document.getElementById("help");
  help.innerHTML = "";
  hideView(help);
  let h2 = document.createElement("h2");
  h2.innerHTML = "Ayuda";
  help.appendChild(h2);
  article = document.createElement("article");
  article.className = "help-article";
  article.innerHTML = "";
  let h3 = document.createElement("h3");
  h3.innerHTML = "¿Necesitas ayuda?";
  article.appendChild(h3);
  let linkFrecuentes = document.createElement("a");
  linkFrecuentes.innerHTML = "Preguntas frecuentes";
  linkFrecuentes.href = "#frequent";
  let frecuentes = document.createElement("nav");
  frecuentes.id = "frequent";
  let lista = document.createElement("ul");
  article.appendChild(linkFrecuentes);
  for (element in preguntas) {
    let li = document.createElement("li");
    li.id = "help-nav-li";
    let linkPreguntas = document.createElement("a");
    linkPreguntas.innerHTML = preguntas[element];
    linkPreguntas.href = "#" + preguntas[element];
    linkPreguntas.id = "help-nav-li-a";
    li.appendChild(linkPreguntas);
    lista.appendChild(li);
  }
  frecuentes.appendChild(lista);
  article.appendChild(frecuentes);
  let linkContacto = document.createElement("h3");
  linkContacto.innerHTML = "Contáctanos";
  let contacto = document.createElement("nav");
  contacto.id = "contact";
  let listaContacto = document.createElement("ul");
  article.appendChild(linkContacto);
  for (element in contactos) {
    let li = document.createElement("li");
    li.id = "help-nav-li";
    let linkContacto = document.createElement("a");
    linkContacto.innerHTML = element;
    linkContacto.href = contactos[element];
    linkContacto.id = "help-nav-li-a";
    li.appendChild(linkContacto);
    listaContacto.appendChild(li);
  }
  contacto.appendChild(listaContacto);
  article.appendChild(contacto);
  help.appendChild(article);
}

function showNav(){
  const navbarHeader = document.getElementById("navbar-header");
  navbarHeader.classList.replace("hide", "navbar-header");
  const navbarLateral = document.getElementById("navbar-lateral");
  navbarLateral.classList.replace("hide", "navbar-lateral");
  const footerNav = document.getElementById("footer-nav");
  footerNav.classList.replace("hide", "footer-nav");
  const footerContact = document.getElementById("footer-contact");
  footerContact.classList.replace("hide", "footer-contact");
}

function hideNav(){
  const navbarHeader = document.getElementById("navbar-header");
  navbarHeader.classList.replace("navbar-header", "hide");
  const navbarLateral = document.getElementById("navbar-lateral");
  navbarLateral.classList.replace("navbar-lateral", "hide");
  const footerNav = document.getElementById("footer-nav");
  footerNav.classList.replace("footer-nav", "hide");
  const footerContact = document.getElementById("footer-contact");
  footerContact.classList.replace("footer-contact", "hide");
}

function logOut(){
  sessionStorage.removeItem("usuario");
  showLogin();
}
showLogin();
