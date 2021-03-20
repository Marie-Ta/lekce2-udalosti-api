// tady je místo pro náš program

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
let velikostPisma
velikostPisma = parseInt("16px",10);

function zvetsiPismo(){
    velikostPisma = 1 + velikostPisma;
    /*console.log (velikostPisma);*/
    lviOdstavec.style.fontSize=velikostPisma + "px";
    return velikostPisma;     
}

// Ukázání na audio nahrávku, se kterou se pracuje dále

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