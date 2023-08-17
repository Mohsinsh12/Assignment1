let prompt2= require('prompt-sync')();
let alien_color2=prompt2('Color of Alien just shot:')

if (alien_color2=='Green') {
    console.log('you have earned 5 points')
} else{
    console.log('you have earned 10 points')
}