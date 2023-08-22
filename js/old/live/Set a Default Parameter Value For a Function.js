// program to set default parameter value

function sum(x = 3, y = 5) { // Deforet values x = 3 and y = 5 

    // return sum
    return x + y;
}

console.log(sum(5, 15));
console.log(sum(7));
console.log(sum());

// _______________V2_________________

// using previous parameter in default value expression

let calculate = function(x = 15, y = x + 2) { //NOTE: x defolt values is 15 || x = 10 , y = 10 + 2
    return x + y; // || x = 10 y = 12 = 22 retun values
}

const result1 = calculate(10); //22  ||  return 10 || ans is 22
console.log(result1); // || print 22 values

const result2 = calculate(); //32
console.log(result2);