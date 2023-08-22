// Important Array Methods

// Using FOREACH uname and index print

let a = [
    { uname: "Vrushank", age: 25 },
    { uname: "Krupa", age: 27 },
    { uname: "Mayur", age: 26 }
];

a.forEach((t, ind) => { // using arrow function
    console.log(`${t.uname} and index is ${ind}`);
});