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
