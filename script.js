function buscarEvento() {
    // Obtiene el valor del campo de texto
    const fecha = document.getElementById("fechaNacimiento").value;

    // Contenedor donde mostrar el resultado
    const resultados = document.getElementById("resultados-busqueda");

    // Limpia el contenedor de resultados
    resultados.innerHTML = "";

    // Verifica si la fecha está vacía o no tiene el formato correcto
    if (!fecha.match(/^\d{2}\/\d{2}$/)) {
        resultados.innerHTML = "<p class='text-danger'>Por favor, ingrese una fecha válida en el formato DD/MM.</p>";
        return;
    }

    // Simula un resultado de búsqueda basado en la fecha ingresada
    const mensajes = {
        "01/01": "El 1 de enero marca el comienzo del calendario gregoriano.",
        "25/12": "El 25 de diciembre se celebra la Navidad en muchas partes del mundo.",
        "15/07": "Un 15 de julio comenzó la construcción de la Torre Eiffel en 1887.",
    };

    // Muestra el resultado correspondiente o un mensaje de "sin resultados"
    resultados.innerHTML = mensajes[fecha]
        ? `<p class="text-success">${mensajes[fecha]}</p>`
        : "<p class='text-warning'>No se encontraron eventos históricos para esta fecha.</p>";
}
