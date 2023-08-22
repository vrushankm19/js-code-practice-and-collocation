let a = "Objkey1";
let b = "Objkey2";

let a1 = "Mainkey1";
let a2 = "Mainkey2";

//task i want a values = a1 values 

let sup = {
    // a : a1, Not Working
    // b : a2, Not Working

    [a] : a1,
    [b] : a2
}
console.log(sup);