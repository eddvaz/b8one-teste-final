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
        label: 'Valor total de vendas',
        backgroundColor: 'rgb(0, 0, 255',
        borderColor: 'rgb(0, 0, 255)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }, {
        label: 'Quantidade de pedidos',
        backgroundColor: 'rgb(0, 255, 0)',
        borderColor: 'rgb(0, 255, 0)',
        data: [0, 8, 13, 16, 22, 25, 40],
    }, {
        label: 'Comissão a pagar',
        backgroundColor: 'rgb(255, 96, 142)',
        borderColor: 'rgb(255, 96, 142)',
        data: [0, 12, 15, 20, 28, 5, 10],
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
