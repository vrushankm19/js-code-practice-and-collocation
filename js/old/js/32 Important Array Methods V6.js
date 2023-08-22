// Important Array Methods

//NOTE: Using FOREACH loop print all uname inside Object

let a = [
    { uname: "Vrushank", age: 25 },
    { uname: "Krupa", age: 27 },
    { uname: "Mayur", age: 26 }
];

a.forEach(function(t) { // old Functionality
    console.log(t.uname);
})

// We Use FOREACH and FOROF loop this program make Easly

for (let t of a) { // New Functionality
    console.log(t.uname);
}