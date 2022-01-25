/*
ternary operator:
question ? yes : no;
*/

const isMarried = true;

// Vardenis is (not) married.
let isNot = '';
if (!isMarried) {
    isNot = ' not';
}
console.log(`Vardenis is${isNot} married.`);
console.log(`Vardenis is${isMarried ? '' : ' not'} married.`);

const n = 7;
// Skaicius 7 yra (ne)lyginis.
let lyginis = '';
if (n % 2 !== 0) {
    lyginis = 'ne';
}
console.log(`Skaicius ${n} yra ${lyginis}lyginis.`);
console.log(`Skaicius ${n} yra ${n % 2 === 0 ? '' : 'ne'}lyginis.`);
