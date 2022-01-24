function count(n) {
    console.log(n);

    if (typeof n !== 'number'
        || !isFinite(n)) {
        return 'ERROR: ne skaiciaus tipo reiksme';
    }

    const numberAsString = '' + n;
    let size = numberAsString.length;

    // atmetam minusa
    if (n < 0) {
        size--;
    }

    // atmetam kableli (taska)
    if (n % 1 !== 0) {
        size--;
    }

    return size;
}

console.log(count(true), '-->', 'ERROR');
console.log(count('asd'), '-->', 'ERROR');
console.log(count(NaN), '-->', 'ERROR');
console.log(count(Infinity), '-->', 'ERROR');
console.log(count(-Infinity), '-->', 'ERROR');

console.log(count(5), '-->', 1);
console.log(count(781), '-->', 3);
console.log(count(37060123456), '-->', 11);
console.log(count(-7), '-->', 1);
console.log(count(-777), '-->', 3);
console.log(count(3.1415), '-->', 5);
console.log(count(333.1415), '-->', 7);
console.log(count(0.123), '-->', 4);
console.log(count(-3.1415), '-->', 5);
console.log(count(-333.1415), '-->', 7);
console.log(count(-0.123), '-->', 4);
console.log(count(3.4548e8), '-->', 9);

console.log(count(99999999999999999999999999999999999), '-->', 35);
console.log(count(999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999), '-->', 105);