async function fetchData() {
    const response = await fetch('https://test-final.b8one.academy/resellers/ranking')
    const responseJson = await response.json();
    return responseJson;
}

function populateRanking(resellers) {
    const rankingListUl = document.querySelector('.list-resellers__ul');
    const rankingHtmlArray = resellers.map((reseller, index) => {
        return `
            <li>
                <div class="list-resellers__content">
                    <span class="list-resellers__content--order">
                        ${index + 1}
                    </span>
                    <div class="list-resellers__requests">
                        <span class="list-resellers__requests--text">
                            HR
                        </span>
                        <div class="list-resellers__requests--info">
                            <span class="list-resellers__requests--info-name"> 
                                ${reseller.name} 
                            </span>
                        <div class="list-resellers__requests--info-2">
                            <span class="list-resellers__requests--info-2--requets">
                                ${reseller.ordersCount} pedidos
                            </span>
                            <span class="list-resellers__requests--info-2--percentage">
                                ${reseller.percentage}
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>  
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </li>
        `
    })
    const rankingHtml = rankingHtmlArray.join(" ");
    rankingListUl.insertAdjacentHTML("beforeend", rankingHtml);
}

async function resellersRanking() {
    const data = await fetchData();
    populateRanking(data.resellers);
}

resellersRanking();