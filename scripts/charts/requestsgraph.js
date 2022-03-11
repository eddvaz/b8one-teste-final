//Gráfico da página de pedidos

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
        label: 'Total de pedidos',
        backgroundColor: 'rgb(106, 90, 238)',
        borderColor: 'rgb(106, 90, 238)',
        data: [0, 15, 15, 30, 50, 10, 60],
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

const myChartRequests = new Chart (document.getElementById('myChart'), config);