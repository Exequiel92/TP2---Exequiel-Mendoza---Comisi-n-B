const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
  const peso = Number(document.getElementById("peso").value);
  const estatura = Number(document.getElementById("estatura").value);
  const imc = peso / (estatura * estatura);

  if (peso < 300 && peso > 0 && estatura < 2.5 && estatura > 0) {
    resultado.textContent = `Tu IMC es: ${imc}`;
  } else {
    window.alert("ERROR: uno o ambos valores ingresados no son válidos");
  }
});
