let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = a.filter((values) => {
    return values % 2 === 0;
});
console.log(b);