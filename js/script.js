
// let index = 0;
// while ( index < 20){
//     console.log(index);
//     index++;
// }


// let userNumber = parseInt(prompt('Type a number'));

// while ( isNaN(userNumber) ){
//     userNumber = parseInt(prompt('WRONG! Please type an actual number'));
// }

// console.log(userNumber);


const array = ['ginettina', 'gino', 'gina'];

let isNameFound = false;
let wordToSearch = 'ginettina';

let index = 0
while(isNameFound === false || index > array.length){
    console.log(index);

    if ( array[index] === wordToSearch){
        isNameFound = true;
        console.log('found!');
    }

    index++;
}