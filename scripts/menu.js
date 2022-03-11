async function fetchData() {
    const response = await fetch('https://test-final.b8one.academy/menu');
    const responseJson = await response.json();
    return responseJson;
}

function populateMenu(menuTree) {
    const menuListUl = document.querySelector('.sidebar__menu');
    const menuHtmlArray = menuTree.map((menu) => {
        return `
            <li class="sidebar__menu--options">
                <svg class="icons-sidebar" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 3.75H3.75V10.5H10.5V3.75Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.25 3.75H13.5V10.5H20.25V3.75Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.25 13.5H13.5V20.25H20.25V13.5Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.5 13.5H3.75V20.25H10.5V13.5Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="sidebar__menu--text">
                    ${menu.name}
                </span>
            </li>    
        `
    })
    const menuHtml = menuHtmlArray.join(" ");
    menuListUl.insertAdjacentHTML("beforeend", menuHtml);
}

async function menuAside() {
    const data = await fetchData();
    populateMenu(data.menuTree);
}

menuAside();