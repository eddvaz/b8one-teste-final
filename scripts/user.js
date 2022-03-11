// User

async function fetchData() {
    const response = await fetch('https://test-final.b8one.academy/user');
    const responseJson = await response.json();
    return responseJson;
}

async function populateUser() {
    const userDiv = await fetchData();

    const userNameSpan = document.querySelector('.user-drop__user-name');
    userNameSpan.innerHTML = (userDiv.username);

    const organizationSpan = document.querySelector('.company-area__name');
    organizationSpan.innerHTML = (userDiv.organization);

    // const photoUser = document.querySelector('.')
}

populateUser();

