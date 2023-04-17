const saldo = document.getElementById("saldo");
const apuesta = document.getElementById("apuesta");
const numero = document.getElementById("numero");
const jugar = document.getElementById("jugar");
const mensaje = document.getElementById("mensaje");

let saldoActual = 50000;

function lanzarDado() {
    const numero = Math.floor(Math.random() * 6) + 1;
    const dadoImg = document.getElementById('dice');
    dadoImg.classList.add('animate');
    setTimeout(function() {
      dadoImg.src = `./images/dado-${numero}.png`;
      dadoImg.classList.remove('animate');
    }, 1000);
    return numero;
  }

function jugarDados(e) {
  e.preventDefault();
  const apuestaValor = parseInt(apuesta.value);
  const numeroValor = parseInt(numero.value);
  if (apuestaValor > saldoActual) {
    mensaje.innerHTML = "No tienes suficiente saldo para esa apuesta.";
  } else {
    const dado = lanzarDado();
    if (dado === numeroValor) {
      saldoActual += apuestaValor * 2;
      mensaje.innerHTML = `¡Ganaste! El número era ${numeroValor} y ganas $${apuestaValor * 2}.`;
    } else {
      saldoActual -= apuestaValor;
      mensaje.innerHTML = `Perdiste. El número era ${dado}.`;
    }
    saldo.innerHTML = saldoActual;
    if (saldoActual >= 1200000) {
      mensaje.innerHTML += " ¡Felicidades, ganaste el juego!";
      jugar.disabled = true;
    }
    if (saldoActual <= 0) {
      mensaje.innerHTML += " Lo siento, perdiste el juego.";
      jugar.disabled = true;
    }
  }
}

jugar.addEventListener("click", jugarDados);
