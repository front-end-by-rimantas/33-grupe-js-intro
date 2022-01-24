function max(list) {
    if (typeof list !== 'object') {
        return 'ERROR: privalo buti masyvas';
    }
    if (list.length === 0) {
        return 'ERROR: masyvas privalo buti ne tuscias';
    }

    let biggest = list[0];

    for (let i = 1; i < list.length; i++) {
        const n = list[i];
        if (n > biggest) {
            biggest = n;
        }
    }

    return biggest;
}

console.log(max('pomidoras'), '-->', 'ERROR');
console.log(max([]), '-->', 'ERROR');
console.log(max(Infinity), '-->', 'ERROR');
console.log(max(NaN), '-->', 'ERROR');

console.log(max([1]), '-->', 1);
console.log(max([1, 2, 3]), '-->', 3);
console.log(max([-5, 78, 14, 0, 18]), '-->', 78);
console.log(max([69, 69, 69, 69, 66]), '-->', 69);
console.log(max([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);

console.log(max([1, true, 'labas', [], [5], [5, 8], [''], ['a'], ['a', 'sdgf'], 2, 3]), '-->', 3);