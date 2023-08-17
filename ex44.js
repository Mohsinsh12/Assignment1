"use strict";
// let desiredSandwichComp:string[]=[];
function makeSandwich(itemsOfSandwich) {
    for (let components of itemsOfSandwich) {
        console.log(components);
    }
}
console.log('The 1st sandwich must contain:');
makeSandwich(['cucumber', 'beetroot', 'potato']);
console.log('The 2nd sandwich must contain:');
makeSandwich(['beetroot', 'potato', 'lettuce', 'mayonnaise']);
console.log('The 3rd sandwich must contain:');
makeSandwich(['beetroot', 'potato', 'lettuce', 'mayonnaise', 'ketchup', 'chilli sauce']);
