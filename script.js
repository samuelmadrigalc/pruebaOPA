/* document.getElementById("inicio").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("fin").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, '');
}); */

////////////////////////////////////////////////////////////////////////////////////  

// CÓMO SABER SI UN NUMERO ES PERFECTO
function esPerfecto(n) {

  // Se revisa si los números dados son números enteros validos.
  if (!Number.isInteger(n) || n <= 0) {
      return false;
  }

  let sum = 0;

  // Ciclo para hallar los divisores del número y calcular su sumatoria
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  // Si la sunatoria es igual al número recibido en un principio entonce ES PERFECTO
  const isPerfect = sum === n;

  return isPerfect;
}

////////////////////////////////////////////////////////////////////////////////////

function mostrarPerfectos() {

  
  const inicio = parseInt(document.getElementById("inicio").value, 10);

  const fin = parseInt(document.getElementById("fin").value, 10);

  const perfecto = [];


  for (let i = inicio; i <= fin; i++) {

    // Ejecuta la función esPerfecto para verificar cuáles números que hay entre
    // el valor inicial y el valor final son números perfectos
    if(esPerfecto(i)){
        perfecto.push(i); // Se le manda la información a la lista / array llamada perfecto de los números perfectos encontrados
    }

  }

  document.getElementById("perfecto").textContent = perfecto.length > 1 ? perfecto.join(', ') : 'No hay numeros perfectos';
}

////////////////////////////////////////////////////////////////////////////////////

function resetear() {

  document.getElementById("perfecto").textContent = "";

  document.getElementById("inicio").value = "";

  document.getElementById("fin").value = "";
  
}