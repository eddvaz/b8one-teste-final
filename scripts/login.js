function init () {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.btn-form')

    if(submitButton) {
        submitButton.addEventListener('click', (event) => {
            
            event.preventDefault();

            fetch('https://test-final.b8one.academy/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((reponse) => {
                return reponse.json();
            }).then((data) => {
                console.log(data)
            })
        })
    }
}

window.onload = init;
