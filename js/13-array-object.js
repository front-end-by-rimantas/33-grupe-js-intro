const marks = [10, 5, 8, 7, 2, 5, 6, 3];

console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);

console.log(marks[-1]);
console.log(marks[4]);

const person = {
    name: 'Al',
    age: 50,
    isMarried: true,
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

console.log('-------------------------');

const badMarkLimit = 5;
const badMarks = [];

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    if (mark <= badMarkLimit) {
        badMarks.push(mark);
    }
}
console.log(badMarks);

console.log('-------------------------');

const car = {};
console.log(car);

car.model = 'asd';
console.log(car);

car.year = 1234;
console.log(car);

car.model = 'qewretryt';
console.log(car);

console.log(car.model);
console.log(car.year);

console.log('-------------------------');

const n = [1, 2, 3];
console.log(n);

n[0] = 7;
console.log(n);

n[1] = 7;
console.log(n);

n[2] = 7;
console.log(n);

n[3] = 7;
console.log(n);

for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
}

console.log('-------------------------');

const jonas = {};
const savybe = 'vardas';
const savybesReiksme = 'Jonukas';

console.log(jonas);

jonas[savybe] = savybesReiksme;
console.log(jonas);

console.log('-------------------------');

const point = {
    x: 1,
    y: 2,
    z: 3,
}
console.log(point);

const axis = 'y';
const axisValue = point[axis];
console.log(axis, axisValue);