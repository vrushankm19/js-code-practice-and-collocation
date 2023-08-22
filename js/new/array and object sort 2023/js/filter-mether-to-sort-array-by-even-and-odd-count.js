// filter mether to sort array even and odd count
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let ans = a.filter(numSort);
console.log(ans);

function numSort(a) {
    return a % 2 !== 0;
}