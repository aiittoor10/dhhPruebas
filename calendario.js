document.addEventListener('DOMContentLoaded', function () {
    // Eventos históricos por día (solo como ejemplo)
    const eventos = {
        'Enero': {
            1: 'Nació José',
            2: 'Murió Antonio',
            3: 'Evento del 3 de Enero',
            // Añade más eventos aquí
        },
        'Febrero': {
            1: 'Evento del 1 de Febrero',
            2: 'Evento del 2 de Febrero',
            // Añade más eventos aquí
        },
        // Añade eventos para otros meses aquí
    };

    // Elementos del DOM
    const eventDateElement = document.getElementById('event-date');
    const eventDescription = document.getElementById('event-description');

    // Función para obtener la fecha actual en formato "Día de Mes"
    function obtenerFechaActual() {
        const ahora = new Date();
        const dia = ahora.getDate();
        const mes = ahora.toLocaleString('es', { month: 'long' }); // Obtener nombre del mes en español
        return `${dia} de ${mes}`;
    }

    // Función para mostrar el evento del día actual
    function mostrarEventoActual() {
        const ahora = new Date();
        const mesActual = ahora.toLocaleString('es', { month: 'long' }); // Obtener nombre del mes en español
        const diaActual = ahora.getDate();

        const evento = eventos[mesActual] && eventos[mesActual][diaActual] ?
            eventos[mesActual][diaActual] :
            `No hay eventos registrados para el día ${diaActual} de ${mesActual}.`;

        eventDateElement.textContent = obtenerFechaActual();
        eventDescription.style.display = 'block';
        eventDescription.textContent = evento;
    }

    // Mostrar el evento del día actual al cargar la página
    mostrarEventoActual();
});
