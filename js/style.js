document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.querySelector('.menu');
    const loginButton = document.getElementById('login');
    const userInfo = document.getElementById('user-info');
    const searchInput = document.getElementById('buscador');
    const searchButton = document.querySelector('.buscar');
    const seriesContainer = document.getElementById('series');
    const loginForm = document.getElementById('login-form');
    const closeFormButton = document.getElementById('close-form');
    const submitButton = document.getElementById('submit-login');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('show');
        }
    });

    
    loginButton.addEventListener('click', function () {
        loginForm.classList.add('show');
    });

    
    closeFormButton.addEventListener('click', function () {
        loginForm.classList.remove('show');
    });

    
    submitButton.addEventListener('click', function () {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === 'cvallejo069@gmail.com' && password === 'contraseña') {
            userInfo.style.display = 'block';
            loginForm.classList.remove('show');
        } else {
            alert('Credenciales incorrectas');
        }
    });

    
    searchButton.addEventListener('click', function () {
        const query = searchInput.value.toLowerCase().trim();
        const series = Array.from(seriesContainer.querySelectorAll('article'));

        series.forEach((serie) => {
            const title = serie.querySelector('h4').textContent.toLowerCase();
            serie.style.display = title.includes(query) ? 'block' : 'none';
            if (title.includes(query)) {
                serie.querySelector('.item').style.width = '250px';
                serie.querySelector('h4').style.textAlign = 'center';
            }
        });
    });
});


