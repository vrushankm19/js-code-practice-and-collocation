// Map

// Real Life Example of Map

let t = [ // Extrext age inside array using Map methoed
    { uname: "Vrushnak", age: 25 },
    { uname: "Yash", age: 23 },
    { uname: "Jay", age: 28 }
];

let ma = t.map(function(r) {
    return r.uname; // select peramiters Values
});

console.log(ma); //Stored in ma Varible  inside