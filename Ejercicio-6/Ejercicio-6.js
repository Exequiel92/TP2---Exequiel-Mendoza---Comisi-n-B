const boton = document.getElementById("boton");

const pNombre = document.getElementById("pNombre");
const pApellido = document.getElementById("pApellido");
const pEdad = document.getElementById("pEdad");
const pAltura = document.getElementById("pAltura");
const pCorreo = document.getElementById("pCorreo");

boton.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = Number(document.getElementById("edad").value);
  const altura = Number(document.getElementById("altura").value);
  const correoElectronico = document.getElementById("correoElectronico").value;

  if (nombre.length > 0 && nombre.length < 51) {
    pNombre.style.color = "green";
    pNombre.textContent = `Nombre: ${nombre}`;
  } else {
    pNombre.style.color = "red";
    pNombre.textContent = `Nombre: Campo vacío`;
  }

  if (apellido.length > 0 && apellido.length < 51) {
    pApellido.style.color = "green";
    pApellido.textContent = `Apellido: ${apellido}`;
  } else {
    pApellido.style.color = "red";
    pApellido.textContent = `Apellido: Campo vacío`;
  }

  if (edad > 17 && edad < 120) {
    pEdad.style.color = "green";
    pEdad.textContent = `Edad: ${edad} años`;
  } else {
    if (edad > 0 && edad < 18) {
      pEdad.style.color = "red";
      pEdad.textContent = `Edad: ${edad} años ¡ES MENOR DE EDAD!`;
    } else {
      pEdad.style.color = "red";
      pEdad.textContent = `Edad: Valor ingresado no válido`;
    }
  }

  if (altura >= 1 && altura < 230) {
    pAltura.style.color = "green";
    pAltura.textContent = `Altura: ${altura} cm.`;
  } else {
    pAltura.style.color = "red";
    pAltura.textContent = `Altura: Valor ingresado no válido`;
  }

  if (correoElectronico.includes("@")) {
    pCorreo.style.color = "green";
    pCorreo.textContent = `Correo electrónico: ${correoElectronico}`;
  } else {
    pCorreo.style.color = "red";
    pCorreo.textContent = `Correo electrónico: ¡ERROR! Ingrese "@"`;
  }
});
