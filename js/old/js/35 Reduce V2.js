// Reduce

let numbers = [1,2,3,4,5,6,7,8,9];

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 100); // accumulator in set defferlet values (100)

console.log(sum); 