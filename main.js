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




let audioElement = document.querySelector('#js-audio');

// Funkce, která přehraje hudbu

function prehraj() {
    audioElement.play();
}

// Funkce, která pozastaví hudbu

function zastav(){
    audioElement.pause();
}

// Funkce, která ztiší zvuk
function ztis(){
    audioElement.volume = 0;
}

// Funkce, která nastaví střední hlasitost
function hlasitostAkorat(){
    audioElement.volume = 0.5;
}

// Funkce, která nastaví maximální hlasitost
function hlasitostMax(){
    audioElement.volume = 1;
}

// Funkce, která přehraje zvuk od začátku
function prehrajOdZacatku(){
    audioElement.currentTime = 0;
}