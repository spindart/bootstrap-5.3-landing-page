const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

inputCheck.addEventListener('click', () => {
    if (inputCheck.checked) {
        elemento.setAttribute("data-bs-theme", 'dark');
    } else {
        elemento.removeAttribute("data-bs-theme");
    }
});