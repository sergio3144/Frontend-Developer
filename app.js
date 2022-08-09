
const miFuncion = () => {
    let container = document.querySelectorAll('.question-container');
    container.forEach(element => {
        let padre = element.children[0]
        const res = element.children[1].children[0]
        const flecha = element.children[0].children[1]
        padre.addEventListener('click', (e) => {
            flecha.style.transition = '360ms all';
            flecha.classList.toggle('active-flecha')
            res.classList.toggle('active-respuesta')
        })
    });
}
miFuncion()




