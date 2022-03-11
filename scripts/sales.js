async function fetchSales() {
    const response = await fetch('https://test-final.b8one.academy/sales');
    const responseJson = await response.json();
    return responseJson;
}

async function populateSales() {
    const salesDiv = await fetchSales();

    const revenueSpan = document.querySelector('.revenues');
    revenueSpan.innerHTML = (salesDiv.revenues/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const totalSalesSpan = document.querySelector('.totalSales');
    totalSalesSpan.innerHTML = (salesDiv.totalSales);

    const ticketSpan = document.querySelector('.averageTicket');
    ticketSpan.innerHTML = (salesDiv.averageTicket/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}


populateSales();