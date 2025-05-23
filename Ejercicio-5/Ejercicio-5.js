const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
  const base = Number(document.getElementById("base").value);

  const alturaTriangulo = Number(
    document.getElementById("alturaTriangulo").value
  );

  const alturaRectangulo = Number(
    document.getElementById("alturaRectangulo").value
  );

  const areaTriangulo = (base * alturaTriangulo) / 2;

  const areaRectangulo = base * alturaRectangulo;

  const areaTotal = areaRectangulo + areaTriangulo;

  if (base > 0 && alturaRectangulo > 0 && alturaTriangulo > 0) {
    resultado.textContent = `El área total es: ${areaTotal} metros`;
  } else {
    window.alert("ERROR: uno o más valores ingresados no son válidos");
  }
});
