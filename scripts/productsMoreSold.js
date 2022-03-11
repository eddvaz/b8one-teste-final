//Products Populate
const API_URL = 'https://test-final.b8one.academy'

async function fetchData() {
    const response = await fetch(`${API_URL}/products/more-sold`);
    const responseJson = await response.json();
    return responseJson;
}

function transformPriceCut() {
    let number = "299900"
    number.slice(0,4)
    return number.slice(0,4);
} 

function populateMoreSold(products) {
    const productsListUl = document.querySelector(".products");
    const productsHtmlArray = products.map ((product, index) => {
        return `
            <li class="products__itens">
                <div class="products__info">
                    <span class="products__itens--order">
                        ${index + 1}
                    </span>
                    <img class="products__info--image" src="${product.image}" alt="computer">
                    <span class="products__info--text">
                        ${product.name}
                    </span>
                </div>
                <div class="products__type">
                    <span class="products__type--text products__type--text--code">
                       # ${product.orderId}
                    </span>
                    <span class="products__type--text products__type--text--type">
                        ${product.department}
                    </span>
                    <span class="products__type--text products__type--text--price">
                       R$ ${transformPriceCut(product.price)},00
                    </span>
                </div>
            </li>
        `
    })
    const productsHtml = productsHtmlArray.join(" ");
    productsListUl.insertAdjacentHTML("beforeend", productsHtml);
}

async function productsMoreSold() {
    const data = await fetchData();
    populateMoreSold(data.products);
}

productsMoreSold();