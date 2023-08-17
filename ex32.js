"use strict";
let current_Users = ['Mohsin', 'Masab', 'Muneeb', 'Mehran', 'Junaid', 'Saood'];
let new_Users = ['Ismail', 'Masab', 'Wasif', 'Ali', 'SAOOD'];
for (let i = 0; i < new_Users.length; i++) {
    if (current_Users[i] == new_Users[i]) {
        console.log('Enter a new user Name');
    }
    else {
        console.log('User Name is available');
    }
}
