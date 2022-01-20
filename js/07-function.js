/*
function - perpanaudojamo kodo blokas
*/

function sumavimas(pirmasSkaicius, antrasSkaicius) {
    return pirmasSkaicius + antrasSkaicius;
}

const a = 5;
const b = 7;
const c = 11;
const d = 777;

const r1 = sumavimas(a, b);
const r2 = sumavimas(b, c);
const r3 = sumavimas(c, d);
const r4 = sumavimas(a, d);

console.log(a, b, ' = ', r1);
console.log(b, c, ' = ', r2);
console.log(c, d, ' = ', r3);
console.log(a, d, ' = ', r4);

console.log('------------------');


const asmuo1 = 'Petras';
const asmuo2 = 'Maryte';
const asmuo3 = 'Ona';
const asmuo4 = 'Jurgis';

const vardas = 'Vardenis';

function pasisveikinimas(vardas) {
    return `Sveiki, mano vardas yra ${vardas}!`;
}

const labas1 = pasisveikinimas(asmuo1);
console.log(labas1);

const labas2 = pasisveikinimas(asmuo2);
console.log(labas2);

const labas3 = pasisveikinimas(asmuo3);
console.log(labas3);

const labas4 = pasisveikinimas(asmuo4);
console.log(labas4);

console.log('------------------');

const petras = [10, 2, 8, 4];
const maryte = [1, 3, 5, 7, 9];
const ona = [5, 6, 7, 8, 9];
const jurgis = [9, 9, 6];

function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    for (let i = 0; i < pazymiuSarasas.length; i++) {
        const pazymys = pazymiuSarasas[i];
        pazymiuSuma += pazymys;
    }
    return pazymiuSuma / pazymiuSarasas.length;
}

const petroVidurkis = vidurkis(petras);
console.log('Petras:', petroVidurkis);

const marytesVidurkis = vidurkis(maryte);
console.log('Maryte:', marytesVidurkis);

const onosVidurkis = vidurkis(ona);
console.log('Onos:', onosVidurkis);

const jurgioVidurkis = vidurkis(jurgis);
console.log('Jurgio:', jurgioVidurkis);



console.log('------------------');


function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

