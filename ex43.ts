let magiciansNames3 = ['Fazle ilahi', 'Mohsin', 'Junaid'];
let ThegreatMagicians2: string[] = [];

function make_great2() {
    for (let i = 0; i < magiciansNames3.length; i++) {
        ThegreatMagicians2.push('The Great '+magiciansNames3[i])
    }
}
make_great2()
// console.log(ThegreatMagicians2);
function show_Magicians1() {
    for (let i = 0; i < ThegreatMagicians2.length; i++) {
        console.log(ThegreatMagicians2[i]);
       
    }
};

show_Magicians1();

function show_Magicians2() {
    for (let j = 0; j < magiciansNames3.length; j++) {
        console.log(magiciansNames3[j]);
    }
}
show_Magicians2();

// make_great2();

// let greatMagicians=magiciansNames3.flatMap((i)=>['The Great ' + i])


// function show_Magicians2() {
//     for (let i = 0; i < greatMagicians.length; i++) {
//         console.log(greatMagicians[i])
//     }
// }
// show_Magicians2();