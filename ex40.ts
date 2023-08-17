// let make_album= (artistName:string, albumTitle:string, numberOfTracks?:number)=>  {

//     if (numberOfTracks===undefined){
//     return artistName+': ' + albumTitle}
// else{
//     return artistName +': '+ albumTitle+'=> '+ numberOfTracks
// }};


// let returnvalue= make_album('MOhsin', 'Dictionaries of Pakistan')
// console.log (returnvalue)
// let returnvalue2= make_album('NFAK', 'Muhabbaten', 34)
// console.log (returnvalue2)



// let make_album=():{artistName:string, albumTitle:string,}=>  {

//     return {artistName:'Mohsin' , albumTitle:'Rocking days'}
// }
// console.log(make_album())

// interface album {
//     artist: string ;
//     albumtitle: string ;
// }

function make_album(artist:string, albumtitle:string):object {
    return {artist, albumtitle}
}
console.log(make_album('Mohsin','NFAK'))

function make_album2(artist:string, albumtitle:string, numberOfTracks?:number):object {
 if(numberOfTracks===undefined)  { return {artist, albumtitle}
}else{
    return{artist, albumtitle,numberOfTracks}
}
}
console.log(make_album2('Mohsin','NFAK'))
console.log(make_album2('Mohsin', 'NFAK', 40))