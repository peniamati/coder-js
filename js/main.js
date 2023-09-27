// Definición de tipos de préstamos con tasas, plazos y montos
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

// Definición de un portafolio con acciones y bonos
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

// Preguntas frecuentes
const preguntas = {
  1: "Como transferir dinero?",
  2: "Como realizar un pago?",
  3: "Como realizar un préstamo?",
  4: "Como realizar una inversión?",
  5: "Como consultar mi saldo?",
};

// Información de contacto
const contactos = {
  Telefono: "tel:6031112298",
  Email: "mailto:JY4yQ@example.com",
  Facebook: "https://www.facebook.com",
  Instagram: "https://www.instagram.com",
  Twitter: "https://www.twitter.com",
};

// Función para mostrar el formulario de inicio de sesión
function showLogin() {
  const seccion = document.getElementById("login");
  seccion.className = "login";
  const mainElement = document.getElementById("main");
  mainElement.classList.add("mainLogin");
  hideNav();
  hideView(seccion);
  seccion.innerHTML = "";

  // Creación de elementos HTML para el formulario de inicio de sesión
  let titulo = document.createElement("h1");
  titulo.innerHTML = "Bienvenido a Banco Libertad";
  titulo.className = "login-h1";
  seccion.appendChild(titulo);

  let img = document.createElement("img");
  img.src = "./img/logo.png";
  img.className = "login-img";
  seccion.appendChild(img);

  let subtitulo = document.createElement("h2");
  subtitulo.innerHTML =
    "Donde tenes la libertad de hacer con tu plata lo que quieras";
  subtitulo.className = "login-h2";
  seccion.appendChild(subtitulo);

  let login = document.createElement("form");
  login.id = "login-form";
  login.className = "login-form";

  let username = document.createElement("input");
  username.id = "username";
  username.placeholder = "Usuario";

  let password = document.createElement("input");
  password.id = "password";
  password.placeholder = "Contraseña";
  password.type = "password";

  let boton = document.createElement("button");
  boton.innerHTML = "Iniciar Sesión";

  // Función de click del botón de inicio de sesión
  boton.onclick = function (event) {
    event.preventDefault(); // Esto evita que la página se recargue
    if (username.value == "juan" && password.value == "juan") {
      sessionStorage.setItem("usuario", username.value);
      mainElement.classList.replace("mainLogin", "mainNormal");
      showNav();
      showPosition();
    } else if (username.value == "pepe" && password.value == "pepe") {
      sessionStorage.setItem("usuario", username.value);
      mainElement.classList.replace("mainLogin", "mainNormal");
      showNav();
      showPosition();
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  login.appendChild(username);
  login.appendChild(password);
  login.appendChild(boton);
  seccion.appendChild(login);
}

// Función para mostrar la posición consolidada del usuario
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
    let detalles = document.createElement("p");
    detalles.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i></i>`;
    let balance = document.createElement("p");
    balance.innerHTML = "Saldo: $" + cuentas[cuenta]["saldo"];
    article.appendChild(tipo);
    article.appendChild(detalles);
    article.appendChild(balance);
    position.appendChild(article);
  }
}

// Función para ocultar vistas
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

// Función para mostrar opciones de préstamos
function showLoans() {
  const loans = document.getElementById("loans");
  loans.innerHTML = "";
  hideView(loans);
  let h2 = document.createElement("h2");
  h2.innerHTML = "Prestamos";
  loans.appendChild(h2);

  // Recorre los tipos de préstamos y crea elementos HTML para cada uno
  for (let prestamo in prestamos) {
    let article = document.createElement("article");
    article.className = "loans-article";
    let h3 = document.createElement("h3");
    h3.innerHTML = prestamo;
    article.appendChild(h3);
    let tasa = document.createElement("p");
    tasa.innerHTML = "Tasa: " + prestamos[prestamo]["tasa"] + " %";
    tasa.value = prestamos[prestamo]["tasa"];
    tasa.className = "loans-article-p";
    let divMeses = document.createElement("div");
    divMeses.className = "loans-article-months";
    let meses = document.createElement("p");
    meses.innerHTML = "Meses: ";
    meses.className = "loans-article-months-p";
    divMeses.appendChild(meses);
    let plazo = document.createElement("select");
    plazo.className = "loans-article-months";
    plazo.id = "loans-article-months";
    for (let mes in prestamos[prestamo]["plazo"]) {
      let option = document.createElement("option");
      option.value = prestamos[prestamo]["plazo"][mes];
      option.innerHTML = prestamos[prestamo]["plazo"][mes];
      plazo.appendChild(option);
    }
    divMeses.appendChild(plazo);
    let divMonto = document.createElement("div");
    divMonto.className = "loans-article-amount";
    let value = document.createElement("p");
    value.innerHTML = "Monto: ";
    value.className = "loans-article-amount-p";
    divMonto.appendChild(value);
    let monto = document.createElement("select");
    monto.className = "loans-article-amount";
    monto.id = "loans-article-amount";
    for (let valor in prestamos[prestamo]["monto"]) {
      let option = document.createElement("option");
      option.value = prestamos[prestamo]["monto"][valor];
      option.innerHTML = prestamos[prestamo]["monto"][valor];
      monto.appendChild(option);
    }
    divMonto.appendChild(monto);
    let boton = document.createElement("button");
    boton.innerText = "Confirmar";
    boton.className = "btn btn-warning";
    boton.id = "loans-article-btn";
    boton.onclick = () => {
      loan(tasa.value, monto.value, plazo.value);
    };
    article.appendChild(tasa);
    article.appendChild(divMeses);
    article.appendChild(divMonto);
    article.appendChild(boton);
    loans.appendChild(article);
  }
}

// Función para calcular un préstamo y mostrar información
function loan(tasa, monto, plazo) {
  let tasaConvertida = tasa / 100 / 12;
  let cuota =
    (monto * tasaConvertida) / (1 - Math.pow(1 + tasaConvertida, -plazo));
  let deuda = cuota * plazo;

  Swal.fire({
    title: "Préstamo solicitado con éxito!",
    html: `
      Tasa: ${tasa} %<br>
      Monto: $${monto}<br>
      Plazo: ${plazo} meses<br>
      Cuota: $${cuota.toFixed(2)}<br>
      Deuda: $${deuda.toFixed(2)}
    `,
    icon: "success",
  });

  // Prepare data for the POST request
  const postData = {
    tasa: tasa,
    monto: monto,
    plazo: plazo,
    cuota: cuota.toFixed(2),
    deuda: deuda.toFixed(2),
  };

  // Send the POST request
  // fetch("/your-server-endpoint", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(postData),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("Success:", data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
}

// Función para mostrar opciones de inversión
function showInvestments() {
  const investments = document.getElementById("investments");
  investments.innerHTML = "";
  hideView(investments);
  let h2 = document.createElement("h2");
  h2.innerHTML = "Inversiones";
  investments.appendChild(h2);
  for (let investment in portfolio) {
    let section = document.createElement("section");
    section.className = "investments-section";
    let h3 = document.createElement("h3");
    h3.innerHTML = investment;
    section.appendChild(h3);
    investments.appendChild(section);
    for (let inversion in portfolio[investment]) {
      let article = document.createElement("article");
      article.className = "investments-section-article";
      article.innerHTML = "";
      let h4 = document.createElement("h4");
      h4.innerHTML = inversion;
      let p = document.createElement("p");
      p.innerHTML = "Precio: $" + portfolio[investment][inversion]["precio"];
      let cantidad = document.createElement("p");
      cantidad.innerHTML =
        "Cantidad: " + portfolio[investment][inversion]["cantidad"];
      cantidad.value = portfolio[investment][inversion]["cantidad"];
      let boton = document.createElement("button");
      boton.innerText = "Comprar";
      boton.className = "btn btn-warning";
      boton.id = "investments-section-article-btn";
      boton.value = inversion;
      boton.onclick = function () {
        buyInvestment(inversion, cantidad.value);
      };
      article.appendChild(h4);
      article.appendChild(p);
      article.appendChild(cantidad);
      article.appendChild(boton);
      section.appendChild(article);
      investments.appendChild(section);
    }
  }
}

// Función para comprar una inversión
function buyInvestment(inver, cant) {
  for (let inversion in portfolio) {
    for (let investment in portfolio[inversion]) {
      if (investment == inver) {
        if (cant > 0 && cant <= portfolio[inversion][investment]["cantidad"]) {
          portfolio[inversion][investment]["cantidad"] =
            portfolio[inversion][investment]["cantidad"] - cant;

          // Enviar la solicitud POST para actualizar la inversión utilizando el método update
          // fetch('/update_investment', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json'
          //   },
          //   body: JSON.stringify({
          //     investment: inver,
          //     newAmount: portfolio[inversion][investment]["cantidad"]
          //   })
          // })
          // .then(response => response.json())
          // .then(data => {
          //   console.log('Respuesta del servidor:', data);})
            Swal.fire({
              title: "Inversión comprada con éxito!",
              html: `
                Inversión: ${inver}<br>
                Cantidad: ${cant}<br>
                Precio: $${portfolio[inversion][investment]["precio"]}<br>
                Cantidad actual: ${portfolio[inversion][investment]["cantidad"]}
              `,
              icon: "success",
            });
          
          // .catch(error => {
          //   console.error('Error al actualizar inversión:', error);
          // });

          // Update the portfolio
          sessionStorage.setItem("portfolio", JSON.stringify(portfolio));
          showInvestments();
          return; // Importante: salir del bucle una vez que la inversión se ha encontrado y actualizado.
        } else {
          Swal.fire({
            title: "No hay suficiente cantidad disponible",
            html: `
              Inversión: ${inver}<br>
              Cantidad: ${cant}<br>
              Precio: $${portfolio[inversion][investment]["precio"]}<br>
              Cantidad actual: ${portfolio[inversion][investment]["cantidad"]}
            `,
            icon: "error",
          });
          return; // Importante: salir del bucle si la cantidad no es válida
        }
      }
    }
  }
}


// Función para mostrar las tarjetas disponibles
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
    nav.className = "cards-nav";
    nav.id = "cards-nav";
    let ul = document.createElement("ul");
    ul.className = "cards-nav-ul";
    ul.id = "cards-nav-ul";
    for (let opcion in tarjetas[card]["opciones"]) {
      let li = document.createElement("li");
      li.className = "cards-nav-ul-li";
      li.id = "cards-nav-ul-li";
      let link = document.createElement("a");
      link.className = "cards-nav-ul-li-a";
      link.id = "cards-nav-ul-li-a";
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

// Función para mostrar la sección de ayuda
function showHelp() {
  const help = document.getElementById("help");
  help.innerHTML = "";
  hideView(help);
  let h2 = document.createElement("h2");
  h2.innerHTML = "Ayuda";
  h2.className = "help-h2";
  help.appendChild(h2);
  article = document.createElement("article");
  article.className = "help-article";
  article.innerHTML = "";
  let h3 = document.createElement("h3");
  h3.innerHTML = "¿Necesitas ayuda?";
  h3.className = "help-article-h3";
  article.appendChild(h3);
  let linkFrecuentes = document.createElement("a");
  linkFrecuentes.innerHTML = "Preguntas frecuentes ˅";
  linkFrecuentes.href = "#";
  linkFrecuentes.id = "help-article-a";
  linkFrecuentes.className = "help-article-a";
  let frecuentes = document.createElement("nav");
  frecuentes.id = "help-article-nav";
  frecuentes.className = "help-article-nav";
  let lista = document.createElement("ul");
  lista.id = "help-article-nav-ul";
  lista.className = "help-article-nav-ul";
  article.appendChild(linkFrecuentes);
  for (element in preguntas) {
    let li = document.createElement("li");
    li.id = "help-article-nav-ul-li";
    li.className = "help-article-nav-ul-li";
    let linkPreguntas = document.createElement("a");
    linkPreguntas.innerHTML = preguntas[element];
    linkPreguntas.href = "#" + preguntas[element];
    linkPreguntas.id = "help-article-nav-ul-li-a";
    linkPreguntas.className = "help-article-nav-ul-li-a";
    li.appendChild(linkPreguntas);
    lista.appendChild(li);
  }
  frecuentes.appendChild(lista);
  lista.style.display = "none";
  linkFrecuentes.addEventListener("click", function () {
    if (lista.style.display === "none") {
      linkFrecuentes.innerHTML = "Preguntas frecuentes ^";
      lista.style.display = "block";
    } else {
      linkFrecuentes.innerHTML = "Preguntas frecuentes ˅";
      lista.style.display = "none";
    }
  });
  article.appendChild(frecuentes);
  let linkContacto = document.createElement("h3");
  linkContacto.innerHTML = "Contáctanos";
  linkContacto.id = "help-article-h3";
  linkContacto.className = "help-article-h3";
  let contacto = document.createElement("nav");
  contacto.id = "help-article-contact";
  contacto.className = "help-article-contact";
  let listaContacto = document.createElement("ul");
  listaContacto.id = "help-article-contact-ul";
  listaContacto.className = "help-article-contact-ul";
  article.appendChild(linkContacto);
  for (element in contactos) {
    let li = document.createElement("li");
    li.id = "help-article-contact-ul-li";
    li.className = "help-article-contact-ul-li";
    let linkContacto = document.createElement("a");
    linkContacto.innerHTML = element;
    linkContacto.href = contactos[element];
    linkContacto.id = "help-article-contact-ul-li-a";
    linkContacto.className = "help-article-contact-ul-li-a";
    li.appendChild(linkContacto);
    listaContacto.appendChild(li);
  }
  contacto.appendChild(listaContacto);
  article.appendChild(contacto);
  help.appendChild(article);
}

// Función para mostrar la barra de navegación
function showNav() {
  const navbarHeader = document.getElementById("navbar-header");
  navbarHeader.classList.replace("hide", "navbar-header");
  const navbarLateral = document.getElementById("navbar-lateral");
  navbarLateral.classList.replace("hide", "navbar-lateral");
  const footerNav = document.getElementById("footer-nav");
  footerNav.classList.replace("hide", "footer-nav");
  const footerContact = document.getElementById("footer-contact");
  footerContact.classList.replace("hide", "footer-contact");
}

// Función para ocultar la barra de navegación
function hideNav() {
  const navbarHeader = document.getElementById("navbar-header");
  navbarHeader.classList.replace("navbar-header", "hide");
  const navbarLateral = document.getElementById("navbar-lateral");
  navbarLateral.classList.replace("navbar-lateral", "hide");
  const footerNav = document.getElementById("footer-nav");
  footerNav.classList.replace("footer-nav", "hide");
  const footerContact = document.getElementById("footer-contact");
  footerContact.classList.replace("footer-contact", "hide");
}

// Función para cerrar sesión
function logOut() {
  sessionStorage.removeItem("usuario");
  const mainElement = document.getElementById("main");
  mainElement.classList.remove("mainNormal");
  showLogin();
}

// Inicia la aplicación mostrando la pantalla de inicio de sesión
showLogin();
