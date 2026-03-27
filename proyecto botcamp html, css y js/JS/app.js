document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formEncuesta");
    const mensaje = document.getElementById("mensaje");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let completo = true;
        const datos = {};

        for (let i = 1; i <= 7; i++) {
            const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
            
            if (!respuesta) {
                completo = false;
                break;
            }

            datos[`p${i}`] = respuesta.value;
        }

        if (!completo) {
            mensaje.textContent = "Responde todas las preguntas";
            mensaje.style.color = "red";
            return;
        }

        // Guardar
        localStorage.setItem("encuestaHumedales", JSON.stringify(datos));

        // Mostrar mensaje SI O SI
        mensaje.textContent = "¡Gracias por su opinión!";
        mensaje.style.color = "green";

        // Limpiar formulario
        formulario.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("slider");
    const overlay = document.getElementById("overlay");

    slider.addEventListener("input", function () {
        overlay.style.width = slider.value + "%";
    });

});
    
const ctx1 = document.getElementById('graficoProteccion');

new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Protección efectiva', 'Protección parcial', 'Sin protección'],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: ['#2ecc71', '#f1c40f', '#e74c3c']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Nivel de protección ambiental en Colombia'
            }
        }
    }
});

const ctx2 = document.getElementById('graficoProblemas');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Amenazas', 'Falta de seguridad', 'Acceso a justicia'],
        datasets: [{
            label: 'Nivel de riesgo',
            data: [80, 70, 65],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Problemas que enfrentan los defensores ambientales'
            }
        }
    }
});









const ctx3 = document.getElementById('graficoGestion');

new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Eficiencia en gestión ambiental',
            data: [60, 55, 50, 48, 45, 40],
            fill: true,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Disminución en la gestión ambiental'
            }
        }
    }
}); 



const ctx4 = document.getElementById('graficoArea').getContext('2d');

new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
            {
                label: 'Emprendimiento ambiental',
                data: [40, 45, 50, 55, 60, 65],
                fill: true
            },
            {
                label: 'Innovación ambiental',
                data: [35, 40, 48, 52, 58, 70],
                fill: true
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Comparación: Emprendimiento vs Innovación'
            }
        }
    }
});