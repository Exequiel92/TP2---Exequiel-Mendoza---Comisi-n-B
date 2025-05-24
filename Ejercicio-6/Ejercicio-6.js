const boton = document.getElementById("boton");

const pNombre = document.getElementById("pNombre");
const pApellido = document.getElementById("pApellido");
const pEdad = document.getElementById("pEdad");
const pAltura = document.getElementById("pAltura");
const pCorreo = document.getElementById("pCorreo");
const sNombre = document.getElementById("sNombre");
const sApellido = document.getElementById("sApellido");
const sEdad = document.getElementById("sEdad");
const sAltura = document.getElementById("sAltura");
const sCorreo = document.getElementById("sCorreo");

boton.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = Number(document.getElementById("edad").value);
  const altura = Number(document.getElementById("altura").value);
  const correoElectronico = document.getElementById("correoElectronico").value;

  if (nombre.length > 0 && nombre.length < 51) {
    sNombre.style.color = "green";
    pNombre.style.color = "green";
    pNombre.textContent = ` ${nombre}`;
  } else {
    pNombre.style.color = "red";
    sNombre.style.color = "red";
    pNombre.textContent = ` Campo vacío`;
  }

  if (apellido.length > 0 && apellido.length < 51) {
    sApellido.style.color = "green";
    pApellido.style.color = "green";
    pApellido.textContent = ` ${apellido}`;
  } else {
    sApellido.style.color = "red";
    pApellido.style.color = "red";
    pApellido.textContent = ` Campo vacío`;
  }

  if (edad > 17 && edad < 120) {
    sEdad.style.color = "green";
    pEdad.style.color = "green";
    pEdad.textContent = ` ${edad} años`;
  } else {
    if (edad > 0 && edad < 18) {
      sEdad.style.color = "green";
      pEdad.style.color = "green";
      pEdad.textContent = ` ${edad} años ¡MENOR DE EDAD!`;
    } else {
      sEdad.style.color = "red";
      pEdad.style.color = "red";
      pEdad.textContent = `Campo vacío o valor ingresado no válido`;
    }
  }

  if (altura >= 1 && altura < 230) {
    sAltura.style.color = "green";
    pAltura.style.color = "green";
    pAltura.textContent = `${altura} cm.`;
  } else {
    sAltura.style.color = "red";
    pAltura.style.color = "red";
    pAltura.textContent = `Campo vacío o valor ingresado no válido`;
  }

  if (correoElectronico.includes("@")) {
    sCorreo.style.color = "green";
    pCorreo.style.color = "green";
    pCorreo.textContent = ` ${correoElectronico}`;
  } else {
    sCorreo.style.color = "red";
    pCorreo.style.color = "red";
    pCorreo.textContent = `Campo vacío o no se ingresó "@"`;
  }
});
