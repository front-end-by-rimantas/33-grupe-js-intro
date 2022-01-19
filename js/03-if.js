/*
IF - sąlygos sakinys

PALYGINIMO OPERATORIAI:
visi: >, <, >=, <=, ==, !=, ===, !==
nenaudotinus: ==, !=
naudotinus: >, <, >=, <=, ===, !==
papildomi: && (and), || (or)

SABLONAI:
if () {}
if () {} else {}
if () {} else if {} else {}
if () {} else if {} ...  else if {}
if () {} else if {} ...  else if {} else {}

if (salyga / klausimas) {
    ka daryti, jei tenkinama salyga
} else {
    ka daryti, jei NEtenkinama salyga
}

*/

const a = 5;
const b = 7;

// jeigu, a yra daugiau uz b, tai parasyti - daugiau
// jeigu, a yra nera daugiau uz b, tai parasyti - nera daugiau


if (a > b) {
    console.log('daugiau');
} else {
    console.log('nera daugiau');
}

const c = 9;
const d = 99;

if (c >= d) {
    console.log('daugiau arba lygu');
} else {
    console.log('nei daugiau, nei lygu -> maziau');
}

const e = 99;
const f = 9;

if (e <= f) {
    console.log('maziau arba lygu');
} else {
    console.log('nei maziau, nei lygu -> daugiau');
}

const pinigine = 10;
// turiu pinigu
// neturiu pinigu
// esu skoloje

if (pinigine > 0) {
    console.log('turiu pinigu');
} else if (pinigine === 0) {
    console.log('neturiu pinigu');
} else {
    console.log('esu skoloje');
}

const akys = 'raudonos';

if (akys === 'melynos') {
    console.log('Geras zmogus');
} else if (akys === 'melynos') {
    console.log('Gabus zmogus');
} else if (akys === 'rudos') {
    console.log('Melagis');
} else if (akys === 'pilkos') {
    console.log('Pelyte???');
} else if (akys === 'raudonos') {
    console.log('Gal tu issimiegok??');
} else {
    console.log('Zmogus su nezinomos spalvos akimis');
}

const diena = 8;

if (diena === 1) {
    console.log('pirmadienis');
} else {
    if (diena === 2) {
        console.log('antradienis');
    } else {
        if (diena === 3) {
            console.log('treciadienis');
        } else {
            if (diena === 4) {
                console.log('ketvirtadienis');
            } else {
                if (diena === 5) {
                    console.log('penktadienis');
                } else {
                    if (diena === 6) {
                        console.log('sestadienis');
                    } else {
                        if (diena === 7) {
                            console.log('sekmadienis');
                        } else {
                            console.log('tokia diena neegzistuoja');
                        }
                    }
                }
            }
        }
    }
}

if (5 !== 4) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

console.log('-----------------');
const didelis = 8;
const dydis = 5;
const prinokimas = 'neprinokes';

// mazas prinokes pomidoras
// didelis prinokes pomidoras
// mazas neprinokes pomidoras
// didelis neprinokes pomidoras

if (dydis >= didelis && prinokimas === 'prinokes') {
    console.log('didelis prinokes pomidoras');
} else if (dydis < didelis && prinokimas === 'prinokes') {
    console.log('mazas prinokes pomidoras');
} else if (dydis >= didelis && prinokimas !== 'prinokes') {
    console.log('didelis neprinokes pomidoras');
} else {
    console.log('mazas neprinokes pomidoras');
}

if (dydis >= didelis) {
    if (prinokimas === 'prinokes') {
        console.log('didelis prinokes pomidoras');
    } else {
        console.log('didelis neprinokes pomidoras');
    }
} else {
    if (prinokimas === 'prinokes') {
        console.log('mazas prinokes pomidoras');
    } else {
        console.log('mazas neprinokes pomidoras');
    }
}

const day = 0;

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    console.log('darbo diena');
} else if (day === 6 || day === 7) {
    console.log('savaitgalis');
} else {
    console.log('tokia savaites diena neegzistuoja');
}