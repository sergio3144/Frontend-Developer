
let container = document.querySelectorAll('.question-container');
container.forEach((item, index) => {
    let padre = item.children[0]
    let hijo = item.children[1].children[0];
    let flecha = item.children[0].children[1];

    padre.addEventListener('click', () => {
        flecha.style.transition = '360ms all';
        flecha.classList.toggle('active-flecha');
        hijo.classList.toggle('active-respuesta')
    })
})



