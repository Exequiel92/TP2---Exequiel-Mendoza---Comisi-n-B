const boton = document.getElementById("boton");
const datosFinales = document.getElementById("resultado");

boton.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = Number(document.getElementById("edad").value);
  const altura = Number(document.getElementById("altura").value);
  const correoElectronico = document.getElementById("correoElectronico").value;

  if (
    edad > 18 &&
    edad < 120 &&
    altura > 0 &&
    altura < 230 &&
    nombre.length > 0 &&
    nombre.length < 51 &&
    apellido.length > 0 &&
    apellido.length < 51 &&
    correoElectronico.length > 0 &&
    correoElectronico.includes("@")
  ) {
    datosFinales.style.color = "green";
    datosFinales.textContent = `Nombre: ${nombre}. Apellido: ${apellido}. Edad: ${edad} años. Altura: ${altura} cm. Correo electrónico: ${correoElectronico}`;
  } else {
    if (
      edad > 0 &&
      edad < 18 &&
      altura > 0 &&
      altura < 230 &&
      nombre.length > 0 &&
      nombre.length < 51 &&
      apellido.length > 0 &&
      apellido.length < 51 &&
      correoElectronico.length > 0 &&
      correoElectronico.includes("@")
    ) {
      datosFinales.style.color = "green";
      datosFinales.textContent = `Nombre: ${nombre}. Apellido: ${apellido}. Edad: !Menor de edad!. Altura: ${altura} cm. Correo Electrónico: ${correoElectronico}`;
    } else {
      datosFinales.style.color = "red";
      datosFinales.textContent =
        "ERROR: Uno o más campos están vacíos y/o uno o más valores ingresados no son válidos.";
    }
  }
});
