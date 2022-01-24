function daugyba(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras ne skaicius';
    }
    if (!isFinite(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }
    // if (isNaN(a)) {
    //     return 'ERROR: pirmas parametras turi buti tikras skaicius';
    // }
    // if ('' + NaN === 'NaN') {
    //     return 'ERROR: pirmas parametras turi buti tikras skaicius';
    // }
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras ne skaicius';
    }
    if (!isFinite(b)) {
        return 'ERROR: antras parametras turi buti tikras skaicius';
    }

    const rez = a * b;
    return rez;
}

console.log(daugyba('labas', 'rytas'), '-->', 'ERROR');
console.log(daugyba('labas', 5), '-->', 'ERROR');
console.log(daugyba(5, 'labas'), '-->', 'ERROR');
console.log(daugyba(NaN, 8), '-->', 'ERROR');
console.log(daugyba(8, NaN), '-->', 'ERROR');
console.log(daugyba(Infinity, 8), '-->', 'ERROR');
console.log(daugyba(8, Infinity), '-->', 'ERROR');
console.log(daugyba(-Infinity, 8), '-->', 'ERROR');
console.log(daugyba(8, -Infinity), '-->', 'ERROR');
console.log(daugyba(true, -5), '-->', 'ERROR');
console.log(daugyba(false, -5), '-->', 'ERROR');
console.log(daugyba([], -5), '-->', 'ERROR');
console.log(daugyba(daugyba, -5), '-->', 'ERROR');
console.log(daugyba(-5, true), '-->', 'ERROR');
console.log(daugyba(-5, false), '-->', 'ERROR');
console.log(daugyba(-5, []), '-->', 'ERROR');
console.log(daugyba(-5, daugyba), '-->', 'ERROR');

console.log(daugyba(2, 4), '-->', 8);
console.log(daugyba(-2, 4), '-->', -8);
console.log(daugyba(-3.5, 1.25), '-->', -4.375);
console.log(daugyba(0, 1.25), '-->', 0);
console.log(daugyba(-884551.25, 0), '-->', 0);
console.log(daugyba(-0, 5), '-->', 0);
console.log(daugyba(-0, -5), '-->', 0);
