//Filter

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totle = function(i) { // This is a Call Back Function
    if (i % 2 === 0) {
        return i;
    }
};

const mainTotle = a.filter(totle); // Filter values after create new array

console.log(mainTotle);