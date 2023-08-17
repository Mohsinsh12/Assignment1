"use strict";
let prompt3 = require('prompt-sync')();
let alien_color3 = prompt3('Color of Alien just shot:');
if (alien_color3 == 'Green') {
    console.log('you have earned 5 points');
}
else if (alien_color3 == 'Yellow') {
    console.log('you have earned 10 points');
}
else if (alien_color3 == 'Red') {
    console.log('you have earned 15 points');
}
else {
    null;
}
