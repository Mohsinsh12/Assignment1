"use strict";
let prompt1 = require('prompt-sync')();
let alien_color = prompt1('Color of Alien just shot:');
if (alien_color == 'Green') {
    console.log('you have earned 5 points');
}
else {
    null;
}
