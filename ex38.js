"use strict";
function describe_city(name, country) {
    console.log(`${name} is in ${country}`);
}
describe_city('Mansehra', 'Pakistan');
let country = 'Pakistan';
describe_city('Islamabad', country);
describe_city('Karachi', country);
describe_city('London', 'UK');
