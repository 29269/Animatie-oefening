//klik op de animeer-knop laat vlakje animeren door class toe te voeren of weg te nemen
document.querySelector('.animeer-knop').addEventListener('click', (e) =>{
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-recht')
});
 ///na enige tijd na het laden van de pagina start de animatie van het vlakje vanzelf
setTimeout(() => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-recht')
}, 2000);