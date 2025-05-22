const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
  const baseTriangulo = Number(document.getElementById("baseTriangulo").value);
  const alturaTriangulo = Number(
    document.getElementById("alturaTriangulo").value
  );
  const baseRectangulo = Number(
    document.getElementById("baseRectangulo").value
  );
  const alturaRectangulo = Number(
    document.getElementById("alturaRectangulo").value
  );
  const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
  const areaRectangulo = baseRectangulo * alturaRectangulo;

  const areaTotal = areaRectangulo + areaTriangulo;
  if (baseTriangulo <= 0) {
    window.alert("ERROR: uno o más valores ingresados no son válidos");
  } else {
    if (alturaTriangulo <= 0) {
      window.alert("ERROR: uno o más valores ingresados no son válidos");
    } else {
      if (baseRectangulo <= 0) {
        window.alert("ERROR: uno o más valores ingresados no son válidos");
      } else {
        if (alturaRectangulo <= 0) {
          window.alert("ERROR: uno o más valores ingresados no son válidos");
        } else {
          resultado.textContent = `El área total es: ${areaTotal} metros`;
        }
      }
    }
  }
});
