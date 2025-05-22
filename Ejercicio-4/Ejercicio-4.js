const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
  const peso = Number(document.getElementById("peso").value);
  const estatura = Number(document.getElementById("estatura").value);
  const imc = peso / (estatura * estatura);

  if (peso > 300) {
    window.alert("ERROR: uno o ambos valores ingresados no son válidos");
  } else {
    if (peso < 45) {
      window.alert("ERROR: uno o ambos valores ingresados no son válidos");
    } else {
      if (estatura > 2.5) {
        window.alert("ERROR: uno o ambos valores ingresados no son válidos");
      } else {
        if (estatura < 1.5) {
          window.alert("ERROR: uno o ambos valores ingresados no son válidos");
        } else {
          console.log(imc);
          resultado.textContent = `Tu IMC es: ${imc}`;
        }
      }
    }
  }
});
