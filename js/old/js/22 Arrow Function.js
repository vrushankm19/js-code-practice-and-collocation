let a = (x, y, z) => { // arrow function
    return x + y + z;
}
let b = a(2, 2, 2); // peramiters
console.log(b); // print


// **************Example 2************

let q = w => { // you pass 1 peramiter so we dont need ()pernthises but you pass more then 1 peraniters so we need () 
    return w % 2 === 0;
}
let s = q(10); // even condition return true and odd so give false
console.log(s);