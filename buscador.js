// Funciones para buscar eventos
async function cargarEventos() {
    const response = await fetch('eventos.json');
    const eventos = await response.json();
    return eventos;
}

async function buscarEvento() {
    const query = document.getElementById('search').value.toLowerCase();
    const eventos = await cargarEventos();
    const resultados = eventos.filter(evento =>
        evento.mes.toLowerCase().includes(query) ||
        evento.fecha.includes(query) ||
        evento.evento.toLowerCase().includes(query)
    );

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach(evento => {
            const eventoDiv = document.createElement('div');
            eventoDiv.className = 'event';
            eventoDiv.textContent = `${evento.mes}: ${evento.fecha}: ${evento.evento}`;
            resultadosDiv.appendChild(eventoDiv);
        });
    } else {
        resultadosDiv.textContent = 'No se encontraron eventos.';
    }
}

// Añadir evento para detectar la tecla "Enter"
document.getElementById('search').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        buscarEvento();
    }
});