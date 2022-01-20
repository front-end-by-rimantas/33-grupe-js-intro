/*
FOR - ciklas, kazko kartojimasis
*/

const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis'];

// Metu menesiai:
// 1. Sausis
// 2. Vasaris
// ...
// 12. Gruodis

console.log('Metu menesiai:');

for (let i = 0; i < months.length; i++) {
    console.log((i + 1) + '. ' + months[i]);
}

console.log('--------------------');

const nuo1 = 0;
const iki1 = 4;
let suma1 = 0;

for (let i = nuo1; i <= iki1; i++) {
    suma1 = suma1 + i;
}

console.log(`Nuo ${nuo1} iki ${iki1} skaiciu suma yra ${suma1}.`);

const nuo2 = 0;
const iki2 = 100;
let suma2 = 0;

for (let i = nuo2; i <= iki2; i++) {
    suma2 = suma2 + i;
}

console.log(`Nuo ${nuo2} iki ${iki2} skaiciu suma yra ${suma2}.`);

const nuo3 = -70;
const iki3 = 30;
let suma3 = 0;

for (let i = nuo3; i <= iki3; i++) {
    suma3 = suma3 + i;
}

console.log(`Nuo ${nuo3} iki ${iki3} skaiciu suma yra ${suma3}.`);

console.log('--------------------');

/*
Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: "abcdef" -> "fedcba"
*/

const text1 = 'abcdef';
let reverseText1 = '';

for (let i = 0; i < text1.length; i++) {
    const symbol = text1[text1.length - 1 - i];
    reverseText1 += symbol;
}

console.log(`${text1} --> ${reverseText1}`);

console.log('--------------------');

const text2 = 'pomidoras';
let reverseText2 = '';

for (let i = 0; i < text2.length; i++) {
    const symbol = text2[i];
    reverseText2 = symbol + reverseText2;
}

console.log(`${text2} --> ${reverseText2}`);

console.log('--------------------');

const text3 = 'šaškės';
let reverseText3 = '';

for (let i = text3.length - 1; i >= 0; i--) {
    const symbol = text3[i];
    reverseText3 += symbol;
}

console.log(`${text3} --> ${reverseText3}`);