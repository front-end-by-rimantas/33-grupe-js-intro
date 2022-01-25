/*
duomenu tipai:

Primityvus:
- number
- string
- boolean
- null
- undefined
- function

Kompleksiniai:
- array (object)
- object
*/


// Tasko koordinates yra [x, y, z].
const point = {
    z: 0,
    x: 2,
    y: -5,
}

console.log(`Tasko koordinates yra [${point['x']}, ${point['y']}, ${point['z']}].`);
console.log(`Tasko koordinates yra [${point.x}, ${point.y}, ${point.z}].`);

const person = {
    name: 'Vardenis',
    surname: 'Pavardenis',
    dob: {
        year: 2022,
        month: 1,
        day: 25
    },
    favoriteColors: ['red', 'blue', 'yellow'],
    isMarried: false,
    children: []
};

// Name Surname is (not) married.
let isNot = 'is';
if (!person.isMarried) {
    isNot += ' not';
}
console.log(`${person.name} ${person.surname} ${isNot} married.`);

// Person has N children.
console.log(`Person has ${person.children.length} children.`);

// Favorite colors is color, color, color.
let colors = 'none';
if (person.favoriteColors.length) {
    colors = person.favoriteColors[0];
    for (let i = 1; i < person.favoriteColors.length; i++) {
        const color = person.favoriteColors[i];
        colors += ', ' + color;
    }
}

console.log(`Favorite colors is ${colors}.`);

// DOB: yyyy-mm-dd.
console.log(`DOB: ${person.dob.year}-${person.dob.month}-${person.dob.day}.`);