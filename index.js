// Code your solutions in this file

let names = [ 'Lisa', 'Kaitlin', 'Jan' ]
function writeCards(names, word){
    let arr = []
    for(let i=0; i<names.length; i++){
        arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return arr
}

function countDown(num){
    while (num >= 0){
        console.log(num--)
    }
}