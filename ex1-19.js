"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #Q2
let Name = "Javed";
console.log("Hello " + "Name" + " would you like to learn typescript with me");
// Q#3
let personName = "javed khan";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
const title_case_1 = require("title-case");
let titleName = (0, title_case_1.titleCase)(Name); //personName.split(" ").map((l: string) => l[0].toUpperCase() + (1)).join(" ")
console.log(titleName);
// Q#4
const author = 'Muhammad(SAWW)';
let famousQuote = '"Let him who believes in God and the Last Day either speak good or keep silent, and let him who believes in God and the Last Day be generous to his neighbor, and let him who believes in God and the Last Day be generous to his guest."';
console.log(author, 'once said,', famousQuote);
// Q#5
let famous_Person = "Muhammad (SAWW)";
let message = '"And the servants of the Most Merciful are those who walk upon the earth easily, and when the ignorant address them [harshly], they say [words of] peace."';
console.log(famous_Person, "once said,", message);
// Q#6
personName = " Mohsin \n";
console.log(personName);
personName = ' MOHSIN \t';
console.log(personName);
// Q#7
console.log(6 + 2, 12 - 4, 2 * 4, 16 / 2);
// Q#8
console.log(4 + 4);
console.log(18 - 10);
console.log(4 * 2);
console.log(24 / 3);
// Q#9
let myFavouriteNumber = 28207;
console.log(myFavouriteNumber);
// Q#10
//This Program prints my name on the console
let myName = 'Mohsin';
console.log(`My name is ${myName}`);
// Q#11
const names = ['Mohsin', 'Masab', 'Imran'];
let Name1 = names[0];
let Name2 = names[1];
let Name3 = names[2];
console.log(Name1);
console.log(Name2);
console.log(Name3);
// Q#12
const Names = ['Mohsin', 'Masab', 'Imran'];
let Message = ('How are you ');
console.log(Message + Names[0]);
console.log(Message + Names[1]);
console.log(Message + Names[2]);
// Q#13
const modeoftransportations = ['car',
    'motorcycle',
    'Private Jet',
    'Ship'
];
let print_Message = ('I would like to own a ');
console.log(print_Message + modeoftransportations[0]);
console.log(print_Message + modeoftransportations[1]);
console.log(print_Message + modeoftransportations[2]);
// Q#14
let guestList = ['Mehran', 'Zeeshan', 'Javed', 'Muneeb'];
let start = ('Dear');
let invitation = (', I cordially invite you on the dinner tomorrow to celebrate Eid Milan');
console.log(start, guestList[0] + invitation);
console.log(start, guestList[1] + invitation);
console.log(start, guestList[2] + invitation);
console.log(start, guestList[3] + invitation);
// Q#15
let cant_Make = ('cannot make it today to the dinner');
console.log(guestList[2], cant_Make);
guestList.splice(2, 1, 'Imran');
console.log(start, guestList[0] + invitation);
console.log(start, guestList[1] + invitation);
console.log(start, guestList[2] + invitation);
console.log(start, guestList[3] + invitation);
// Q#16
let newGuest = ('Zia');
guestList.unshift(newGuest);
console.log(guestList);
guestList.splice(3, 0, 'Misbah');
guestList.push('Shoaib');
console.log(start, guestList[0] + invitation);
console.log(start, guestList[1] + invitation);
console.log(start, guestList[2] + invitation);
console.log(start, guestList[3] + invitation);
console.log(start, guestList[4] + invitation);
console.log(start, guestList[5] + invitation);
console.log(start, guestList[6] + invitation);
// Q#17
console.log(guestList);
console.log('Hi everyone! I apologize, i can only invite two guests on dinner because i just knew that my dining table has been shrunk');
console.log('Hi', guestList[0], 'I am sorry i cannot invite you to the dinner');
guestList.splice(0, 1);
console.log('Hi', guestList[0], 'I am sorry i cannot invite you to the dinner');
guestList.splice(0, 1);
console.log('Hi', guestList[0], 'I am sorry i cannot invite you to the dinner');
guestList.splice(0, 1);
console.log('Hi', guestList[0], 'I am sorry i cannot invite you to the dinner');
guestList.splice(0, 1);
console.log('Hi', guestList[0], 'I am sorry i cannot invite you to the dinner');
guestList.splice(0, 1);
console.log('Hi', guestList[0], 'you are still invited to the dinner');
console.log('Hi', guestList[1], 'you are still invited to the dinner');
guestList.splice(0, 1);
guestList.splice(0, 1);
console.log(guestList);
// Q#18
const favorit_places = ['Switzerland', 'UK', 'Canada', 'Australia', 'Saudi Arabia'];
console.log(favorit_places);
const alphabeticSorted_Places = [...favorit_places].sort();
console.log(alphabeticSorted_Places);
console.log(favorit_places);
const revAlphabetic_Places = [...favorit_places].sort().reverse();
console.log(revAlphabetic_Places);
console.log(favorit_places);
const rev_Favourite_Places = favorit_places.reverse();
console.log(favorit_places);
const original_Favourite_Places = favorit_places.reverse();
console.log(favorit_places);
const sortedPlaces = favorit_places.sort();
console.log(favorit_places);
const sortedPlaces_revAlpha = favorit_places.sort().reverse();
console.log(favorit_places);
// Q#19
let number_Of_guests = favorit_places.length;
console.log(number_Of_guests);
