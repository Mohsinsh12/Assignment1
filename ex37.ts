
function make_shirt1(size:string){
    let Message='I love typescript'
    let Message2= 'I love Programming'
    if (size=='large'){
    console.log(`The size of shirt is "${size}" and Message written on shirt is "${Message}"`)
} else if (size=='Medium'){
    console.log(`The size of shirt is "${size}" and Message written on shirt is "${Message}"`)
} else {console.log(`The size of shirt is "${size}" and Message written on shirt is "${Message2}"`)}
    }
    // make_shirt( , 'I love typescript')
    make_shirt1('large');
    make_shirt1('Medium');
    make_shirt1('Small');