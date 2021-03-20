// tady je místo pro náš program

let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");

//nadpis.classList.remove('zluty');

function secti(a, b) {
    nadpis.innerHTML = a + b;
}

let lviOdstavec;
lviOdstavec = document.querySelector(".muj_odstavec");

function priNajeti(){
lviOdstavec.classList.toggle("tucne_pismo");
}

// Funkce, která zajistí zčervenání textu odstavce
function zcervenej(){
    lviOdstavec.classList.toggle("cervene_pismo");
}

// Funkce, která každým kliknutím přídá velikosti písma 1px


/*function zvetsiPismo(){
    lviOdstavec.style.fontSize="spocitej()+px";
}
*/


/*
let vetsiPismo
vetsiPismo=document.querySelector()
*/
/**
 * Funkce, která přehraje předaný prvek
 * 
 * 
 */

function prehraj() {
    let audioElement = document.querySelector('#js-audio');
    audioElement.play();
}

/**
 * Funkce, která pozataví předaný prvek
 * 
 * @param {string} elementSelector 
 */

 function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}