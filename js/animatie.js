//klik op de animeer-knop laat vlakje animeren door class toe te voeren of weg te nemen
document.querySelector('.animeer-knop').addEventListener('click', (e) =>{
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-recht')
});
 ///na enige tijd na het laden van de pagina start de animatie van het vlakje vanzelf
setTimeout(() => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-recht')
}, 2000);

//een klik op de menu knop laat de link__link (alle) na elkaar binnen schuiven
//door ze de class nav__link--schuif
const menuKnop = document.querySelector('.nav__knop');
const  navgatieItemas = document.querySelectorAll('.nav__link');
menuKnop.addEventListener('click', () =>{
    navgatieItemas.forEach((item,index) => {
        setTimeout(() => {
            item.classList.toggle('nav__link--schuif-in');
        }, 100* index);
    })
});
