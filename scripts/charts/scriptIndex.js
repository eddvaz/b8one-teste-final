//Gráfico da página de Pedidos

const labels = [
    '06/10/21',
    '07/10/21',
    '08/10/21',
    '09/10/21',
    '10/10/21',
    '11/10/21',
    '12/10/21',
]

const data = {
labels: labels,
    datasets: [{
        label: 'Estornado',
        backgroundColor: 'rgb(106, 90, 238)',
        borderColor: 'rgb(106, 90, 238)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }, {
        label: 'Cancelado',
        backgroundColor: 'rgb(255, 0, 0)',
        borderColor: 'rgb(255, 0, 0)',
        data: [0, 8, 13, 16, 22, 25, 40],
    }, {
        label: 'Não Pago',
        backgroundColor: 'rgb(255, 165, 0)',
        borderColor: 'rgb(255, 165, 0)',
        data: [0, 12, 15, 20, 28, 5, 10],
    }, {
        label: 'Pago',
        backgroundColor: 'rgb(60, 179, 113)',
        borderColor: 'rgb(60, 179, 113)',
        data: [0, 14, 20, 24, 15, 10, 3],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
            legend: {
                display: true,
                position: 'bottom',
                align: 'start'
            }
        }
    }
};

const myChart = new Chart (document.getElementById('myChart'), config);