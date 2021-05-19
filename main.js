var btnAbrir = document.querySelector('.hamb');
let fundo = document.querySelector('.navigation');

document.addEventListener('click', (e) => {
    let alvo = e.target;

    if (alvo == btnAbrir) {
        fundo.classList.toggle('expandido')
    }
    
    if ((fundo.classList.contains('expandido')) && alvo != btnAbrir) {
        fundo.classList.toggle('expandido')
    }
});