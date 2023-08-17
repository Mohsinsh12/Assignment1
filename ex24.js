"use strict";
// Q#24
let car1 = 'Suzuki';
let car2 = 'Toyota';
console.log(car1.length > car2.length); // i predict its false
console.log(car1.length == car2.length); // i predict its true
console.log(car1.length < car2.length); // i predict its false
console.log(car1.length != car2.length); // i predict its false
let brothers = ['Masab', 'Mohsin'];
console.log(brothers[1].length == brothers[0].length);
console.log(brothers[1].length != brothers[0].length);
console.log(brothers[1].length > brothers[0].length);
console.log(brothers[1].length < brothers[0].length);
let myName = 'Mohsin Shafique';
console.log(myName == 'Mohsin shafique'); //False
console.log(myName == 'Mohsin Shafique'); //True
let x = [24, 35, 46, 48, 53, 56, 59, 75, 89];
console.log(x[1] == x[2]);
console.log(x[2] <= x[4]);
console.log(x[3] >= x[4]);
console.log(x[2] != x[3]);
console.log(x[6] > x[5]);
console.log(x[1] < x[2]);
console.log(x[1] < x[2] && x[4] < x[5]); //True
console.log(x[3] > x[1] && x[5] > x[6]); //False
console.log(x[1] != x[2] && x[4] != x[5]); //True
console.log(x[1] >= x[2] && x[4] <= x[5]); //False
console.log(x[1] < x[2] || x[4] <= x[5]); //True
console.log(x[3] > x[1] || x[4] == x[1]); //True
console.log(x[6] >= x[2] || x[3] <= x[5]); //True
console.log(x[6] < x[2] || x[3] > x[5]); //False
console.log(x.includes(35));
console.log(x.includes(75));
console.log(x.includes(45));
