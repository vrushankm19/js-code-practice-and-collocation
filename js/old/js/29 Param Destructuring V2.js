// Param Destructuring

// Object
// React in Use Mostly

const a = { // object [1]
    fname: "Vrushank",
    sex: "Male",
}

function r({ fname, sex }) { // Object Destruccring Here... [3]
    console.log(fname);
    console.log(sex);
}

let s = r(a); // Pass Object as a Peramiter [2]