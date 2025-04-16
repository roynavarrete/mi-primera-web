// 1. Obtenemos referencias a los elementos HTML que necesitamos manipular
const textoParaCambiar = document.getElementById('miTexto');
const boton = document.getElementById('miBoton');

// 2. Añadimos un "escuchador de eventos" al botón.
//    Esto significa: "cuando alguien haga clic en 'boton', ejecuta esta función".
boton.addEventListener('click', function() {
  // 3. Dentro de la función que se ejecuta al hacer clic:
  //    Usamos classList.toggle('textoRojo') en el párrafo.
  //    - Si el párrafo NO tiene la clase 'textoRojo', se la añade.
  //    - Si el párrafo YA tiene la clase 'textoRojo', se la quita.
  textoParaCambiar.classList.toggle('textoRojo');
});