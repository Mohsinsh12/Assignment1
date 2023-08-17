"use strict";
let prompt4 = require('prompt-sync')();
let person_Age = prompt4('Age of the person is:');
if (person_Age < 2 && person_Age >= 0) {
    console.log('person is a baby');
}
else if (person_Age < 4 && person_Age >= 2) {
    console.log('person is a toddler');
}
else if (person_Age < 13 && person_Age >= 4) {
    console.log('person is a kid');
}
else if (person_Age < 20 && person_Age >= 13) {
    console.log('person is a teenager');
}
else if (person_Age < 65 && person_Age >= 20) {
    console.log('person is a Adult');
}
else {
    console.log('person is a Elder');
}
